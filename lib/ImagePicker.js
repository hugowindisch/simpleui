/**
    ImagePicker.js
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
    className = 'ImagePicker',
    group = require('./groups').groups.ImagePicker,
    utils = require('utils'),
    image = require('./Image'),
    isArray = utils.isArray,
    forEach = utils.forEach,
    beforeAndAfter = 4;

function ImagePicker(config) {
    domvisual.DOMElement.call(this, config, group);
    this.on('keydown', function (k) {
        switch (k.decoratedVk) {
        case 'VK_RIGHT':
            this.next();
            break;
        case 'VK_LEFT':
            this.previous();
            break;
        }
    }).setOverflow('hidden');
}
ImagePicker.prototype = visual.inheritVisual(domvisual.DOMElement, group, packageName, className);
ImagePicker.prototype.getConfigurationSheet = function () {
    var config = require('config');
    return {
        slides: config.imageUrlArrayConfig('Images')
    };
};

ImagePicker.prototype.setSlides = function (slides) {

    if (!isArray(slides)) {
        slides = [slides, slides, slides, slides, slides, slides, slides, slides, slides];
    }
    // we do not support reloading for now
    if (this.slidesLoading) {
        return;
    }
    var toLoad = slides.length,
        that = this;
    function slideLoaded() {
        toLoad -= 1;
        this.setVisible(true);
        if (toLoad === 0) {
            delete that.slidesLoading;
            that.slidesLoaded = true;
            // we want to redisplay
            that.emit('load');
            // if nothing is selected
            if (this.selected === null) {
                this.select(0);
            }
        }
    }
    delete this.selected;
    delete this.slidesLoaded;
    if (toLoad > 0) {
        this.selected = null;
        this.slidesLoading = true;
        this.slides = slides;
        this.loadedSlides = [];
        this.removeAllChildren();
        forEach(slides, function (s, n) {
            var img = new image.Image({framed: true, url: s});
            that.loadedSlides.push(img);
            that.addChild(img, String(n));
            img.on('load', slideLoaded
            ).on('click', function () {
                that.select(n);
            }).setCursor('pointer'
            ).setVisible(false);
        });
        this.emit('change', this.slides[0]);
    }
};
ImagePicker.prototype.select = function (n) {
    if (this.slidesLoaded && n !== this.selected && n >= 0 && n < this.slides.length) {
        this.selected = n;
        this.distribute(300);
        this.emit('change', this.slides[n]);
    }
};
ImagePicker.prototype.next = function () {
    this.select(this.selected + 1);
};
ImagePicker.prototype.previous = function () {
    this.select(this.selected - 1);
};
ImagePicker.prototype.distribute = function (transition) {
    var i = 0,
        ls = this.loadedSlides.length,
        n;
    function setTransition(item) {
        if (transition) {
            item.setInnerTransition(transition).setTransition(transition);
        }
        return item;
    }
    setTransition(this.loadedSlides[this.selected]).setPosition('s');
    n = this.selected + 1;
    for (i = 0; i < beforeAndAfter; i += 1) {
        if (n >= this.slides.length) {
            break;
        }
        setTransition(this.loadedSlides[n]).setPosition('sp' + (i + 1));
        n += 1;
    }
    n = this.selected - 1;
    for (i = 0; i < beforeAndAfter; i += 1) {
        if (n < 0) {
            break;
        }
        setTransition(this.loadedSlides[n]).setPosition('sm' + (i + 1));
        n -= 1;
    }
    // hide the stuff that is out of limits
    for (i = this.selected + beforeAndAfter; i < ls; i += 1) {
        setTransition(this.loadedSlides[i]).setPosition('sp4');
    }
    for (i = this.selected - beforeAndAfter; i >= 0; i -= 1) {
        setTransition(this.loadedSlides[i]).setPosition('sm4');
    }
};


exports.ImagePicker = ImagePicker;
