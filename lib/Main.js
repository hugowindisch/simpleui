/**
    Main.js
    Copyright (C) 2012 Hugo Windisch

    Permission is hereby granted, free of charge, to any person obtaining a
    copy of this software and associated documentation files (the "Software"),
    to deal in the Software without restriction, including without limitation
    the rights to use, copy, modify, merge, publish, distribute, sublicense,
    and/or sell copies of the Software, and to permit persons to whom the
    Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    IN THE SOFTWARE.
*/
/*globals window */
var visual = require('visual'),
    domvisual = require('domvisual'),
    utils = require('utils'),
    deepCopy = utils.deepCopy,
    forEachProperty = utils.forEachProperty;

function Main(config, group, packageName) {
    var that = this,
        stage = domvisual.getStage();
    domvisual.DOMElement.call(this, config, group);


    function setupStage() {
        // we set a more normal 'WEB' behavior for the stage, sizing the root
        // horizontally not affecting it vertically
        stage.applyLayout = function (children) {
            var dim = this.dimensions;
            forEachProperty(this.children, function (c, k) {
                if (c.position === 'fullScreen') {
                    c.setDimensions([dim[0], dim[1], 0]);
                } else {
                    c.setDimensions([dim[0], c.dimensions[1], c.dimensions[2]]);
                }
            });
        };
        stage.runFullScreen = function (c) {
            this.addChild(c);
            c.setPosition('fullScreen');
        };
        stage.setOverflow(['hidden', 'auto']);

    }
    function loadLocation() {
        var factory, type, toLoad;
        if (window.location.hash) {
            toLoad = window.location.hash.split('.');
            if (toLoad.length === 2) {
                factory = toLoad[0].slice(1);
                type = toLoad[1];
            } else if (toLoad.length === 1) {
                factory = packageName;
                type = toLoad[0].slice(1);
            }
        }
        that.showPage(factory, type);
        // FIXME: we should have a Visual.setInterval that would cleanly
        // remove the interval when the thing is removed from the stage,
        // and do the update automatically
        visual.update();
    }
    // poll the location
    if (!this.forPreview && !stage.isSwallowEditor) {
        setInterval(loadLocation, 300);
        // reconfigure the stage to make the 'root' hooked on both edges
        // but free at the bottom and to allow vertical scrolling
        setupStage();
    }
}
Main.prototype = new domvisual.DOMElement();
Main.prototype.getConfigurationSheet = function () {
    return {  };
};
Main.prototype.setForPreview = function (enable) {
    this.forPreview = enable;
};
Main.createPreview = function () {
    return new Main({forPreview: true, overflow: 'hidden'});
};

// page toggling using # (ajax)
Main.prototype.showPage = function (factory, type) {
    var Constr, c, cDim;
    if (this.visibleFactory !== factory || this.visibleType !== type) {
        // remove the existing page
        if (this.visiblePage) {
            this.visiblePage.remove();
            delete this.visiblePage;
            delete this.visibleFactory;
            delete this.visibleType;
        }
        // create the new one
        try {
            Constr = require(factory)[type];
            c = new Constr();
            cDim = deepCopy(c.dimensions);
            this.addChild(c);
            c.setPosition('main');
            this.adjustDimensionsToContent(cDim);
            this.visiblePage = c;
            this.visibleFactory = factory;
            this.visibleType = type;
        } catch (e) {
        }
    }
};

Main.prototype.adjustDimensionsToContent = function (contentDimensions) {
    var dim = this.dimensions,
        layout = this.layout,
        mat = layout.positions.main.matrix,
        v = mat[5],
        lv = this.layout.dimensions[1],
        newDim = [dim[0], lv - v + contentDimensions[1], dim[2]];
    this.setDimensions(newDim);
    this.applyLayout();
};

exports.Main = Main;
