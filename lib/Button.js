/**
    Button.js
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
    packageName = 'simpleui',
    className = 'Button',
    group = require('./groups').groups.Button;

function Button(config) {
    domvisual.DOMElement.call(this, config, group);
    var pressed = false, over = false;
    this.on('mouseover', function () {
        over = true;
        this.getChild('background').setStyle(pressed ? 'pressed' : 'highlight');
    }).on('mouseout', function () {
        over = false;
        this.getChild('background').setStyle('normal');
    }).on('mousedown', function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        pressed = true;
        this.children.background.setStyle('pressed');
        this.once('mouseupc', function (evt) {
            pressed = false;
            evt.preventDefault();
            evt.stopPropagation();
            this.children.background.setStyle(over ? 'highlight' : 'normal');
            if (over) {
                window.open(this.url, '_self');
            }
        });
    });
    this.getChild('background').setOverflow('hidden'
    );
    this.on('added', function () {
        if (this.startupClick) {
            window.open(this.url, '_self');
        }
    });
}
Button.prototype = visual.inheritVisual(domvisual.DOMElement, group, packageName, className);

Button.createPreview = function () {
    return new domvisual.DOMImg({url: 'simpleui/img/Button.png'});
};

Button.prototype.getConfigurationSheet = function () {
    var config = require('config');
    return {
        url: config.inputConfigFullLine('Url (or #ComponentName):'),
        startupClick: config.booleanConfig('Auto click at startup'),
        text: config.inputConfigFullLine('Text:'),
        dummy: config.skinningConfig('Skinning', Button.prototype.getStyleListFromTheme())
    };
};
Button.prototype.setStartupClick = function (click) {
    this.startupClick = click;
};
Button.prototype.setUrl = function (url) {
    this.url = url;
};
Button.prototype.setText = function (txt) {
    this.text = txt;
    var txtChild = new domvisual.DOMElement();
    txtChild.setInnerText(txt);

    this.getChild('label'
    ).removeAllChildren(
    ).addChild(txtChild, 'text');

    this.updateCenteredText();
};
Button.prototype.setDummy = function () { };

Button.prototype.applyLayout = function (children) {
    domvisual.DOMElement.prototype.applyLayout.call(this, children);
    this.updateCenteredText();

    return this;
};

Button.prototype.updateCenteredText = function () {
    var that = this;
    // this is semi a joke... how to correctly get the expected
    // computed dimensions is +/- a mystery
    if (!this.to) {
        this.to = setTimeout(
            function () {
                if (that.children && that.children.label && that.children.label.children && that.children.label.children.text) {
            //visual.update();
                    var label = that.getChild('label'),
                        text = label.getChild('text'),
                        textDim = text.getComputedDimensions(),
                        dim = label.dimensions;

                    // Position the thing
                    text.setDimensions([dim[0], textDim[1], 0]);
                    text.setTranslationMatrix([0, (dim[1] - textDim[1]) / 2, 0]);
                }
                visual.update();
                delete that.to;
            },
            20
        );
    }
};

exports.Button = Button;
