/**
    FullScreenSlideshow.js
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
    className = 'FullScreenSlideshow',
    group = require('./groups').groups.FullScreenSlideshow;

function FullScreenSlideshow(config) {
    domvisual.DOMElement.call(this, config, group);
    var that = this;
    this.getChild('image').setFramed(true);
    this.getChild('picker').on('change', function (url) {
        this.getSibling('image'
        ).setUrl(url
        ).setVisible(false);
        visual.update();
    }).on('load', function () {
        this.select(that.select);
    });
    this.getChild('close').on('click', function () {
        that.remove();
    }).setCursor('pointer');
    this.getChild('previous').on('click', function () {
        that.getChild('picker').previous();
    }).setCursor('pointer');
    this.getChild('next').on('click', function () {
        that.getChild('picker').next();
    }).setCursor('pointer');
    this.getChild('image').on('load', function () {
        var that = this;
        that.setVisible(true
        ).clearTransition(
        ).setOpacity(0.1
        );
        setTimeout(function () {
            that.setTransition(600).setOpacity(1);
        }, 30);
    });
}
FullScreenSlideshow.prototype = visual.inheritVisual(domvisual.DOMElement, group, packageName, className);
FullScreenSlideshow.prototype.getConfigurationSheet = function () {
    var config = require('config');
    return { slides: config.imageUrlArrayConfig('Images')  };
};
FullScreenSlideshow.prototype.setSlides = function (slides) {
    this.getChild('picker').setSlides(slides);
};
FullScreenSlideshow.prototype.setSelect = function (n) {
    this.select = n;
    return this;
};

exports.FullScreenSlideshow = FullScreenSlideshow;
