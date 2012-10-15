/**
    FramedImage.js
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
var visual = require('visual'),
    domvisual = require('domvisual'),
    packageName = 'simpleui',
    className = 'FramedImage',
    group = require('./groups').groups.FramedImage;

function FramedImage(config) {
    domvisual.DOMElement.call(this, config, group);
    this.getChild('image').on('load', function () {
        this.getParent().emit('load');
    });
}
FramedImage.prototype = visual.inheritVisual(domvisual.DOMElement, group, packageName, className);
FramedImage.prototype.getConfigurationSheet = function () {
    return {  };
};

FramedImage.prototype.setUrl = function (url) {
    this.getChild('image').setUrl(url);
    return this;
};

FramedImage.prototype.setTitle = function (alt) {
    this.getChild('image').setTitle(alt);
    return this;
};

FramedImage.prototype.getImageDimensions = function () {
    return this.getChild('image').getImageDimensions();
};

FramedImage.prototype.getNaturalDimensions = function () {
    return this.getImageDimensions();
};

FramedImage.prototype.getConfigurationSheet = function () {
    return {
        "title": require('config').inputConfigFullLine('Title (tooltip)'),
        "url": require('config').imageUrlConfig('Image'),
        "style": null //require('config').styleConfig('Style:')
    };
};


exports.FramedImage = FramedImage;
