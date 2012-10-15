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
    className = 'Image',
    group = require('./groups').groups.Image,
    FramedImage = require('./FramedImage').FramedImage;

function Image(config) {
    this.scaling = 'constrain';
    domvisual.DOMElement.call(this, config, group);
}

Image.prototype = visual.inheritVisual(domvisual.DOMElement, group, packageName, className);

Image.prototype.getConfigurationSheet = function () {
    return {  };
};

Image.prototype.getConfigurationSheet = function () {
    var config = require('config');
    return {
        tooltip: config.inputConfigFullLine('ToolTip:'),
        link: config.inputConfigFullLine('Link:'),
        url: config.imageUrlConfig('Image')
    };
};
Image.prototype.getImage = function () {
    var image = this.getChild('image'),
        that = this,
        Constr = this.framed ? FramedImage : domvisual.DOMImg;
    if (!image) {
        image = new Constr({visible: false}, 'image');
        image.on('load', function () {
            that.updateImage();
            that.emit('load', this.url);
        });
        this.addChild(image, 'image');
    }
    return image;
};

Image.prototype.setTooltip = function (v) {
    var image = this.getImage();
    image.setTitle(v);
    return this;
};

Image.prototype.setLink = function (v) {
    if (v) {
        this.setCursor('pointer');
        this.on('click', function () {
            window.open(v, '_self');
        });
    } else {
        this.removeAllListeners('click');
        this.setCursor(null);
    }
    return this;
};

Image.prototype.setFramed = function (framed) {
    this.framed = framed;
    // FIXME: update if already exists
};

Image.prototype.setUrl = function (value) {
    var image = this.getImage();

    if (value !== this.url) {
        image.setUrl(value).setVisible(false);
        this.url = value;
    }
    return this;
};

Image.prototype.setInnerTransition = function (value) {
    this.getChild('image').setTransition(value);
    return this;
};

Image.prototype.getUrl = function () {
    return this.url;
};

Image.prototype.setScaling = function (s) {
    this.scaling = s;
    return this;
};

Image.prototype.setDimensions = function (dim) {
    domvisual.DOMElement.prototype.setDimensions.call(this, dim);
    this.updateImage();
    return this;
};

Image.prototype.updateImage = function () {
    var iDim,
        dim = this.dimensions,
        sx,
        sy,
        nd,
        image = this.getChild('image');
    if (image) {
        iDim = image.getImageDimensions();
        if (iDim[0] && iDim[1]) {
            image.setVisible(true);
            switch (this.scaling) {
            case 'constrain':
                sx = dim[0] / iDim[0];
                sy = dim[1] / iDim[1];
                if (sy < sx) {
                    nd = [iDim[0] * sy, iDim[1] * sy, 0];
                } else {
                    nd = [iDim[0] * sx, iDim[1] * sx, 0];
                }
                image.setDimensions(nd);
                image.setTranslationMatrix(
                    [(dim[0] - nd[0]) / 2, (dim[1] - nd[1]) / 2, 0]
                );
                break;
            case 'fitw':
            case 'fith':
            case 'cover':
                // not supported yet
                throw new Error('scaling not supported yet');
            default:
                // not supported yet
                throw new Error('scaling not supported yet');
            }
        }
    }
};

exports.Image = Image;
