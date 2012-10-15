/**
    Slideshow.js
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
    className = 'Slideshow',
    group = require('./groups').groups.Slideshow,
    utils = require('utils'),
    image = require('./Image'),
    isArray = utils.isArray;

function Slideshow(config) {
    this.entry = 'right';
    this.exit = 'left';
    domvisual.DOMElement.call(this, config, group);
    this.setOverflow('hidden');
    // FAKE
    if (!this.interval) {
        this.setInterval(2000);
    }


}



Slideshow.prototype = visual.inheritVisual(domvisual.DOMElement, group, packageName, className);
Slideshow.createPreview = function () {
    return new Slideshow({forPreview: true});
};
Slideshow.prototype.getConfigurationSheet = function () {
    var config = require('config');
    return {
        slides: config.imageUrlArrayConfig('Images')
    };
};
Slideshow.prototype.setForPreview = function (fp) {
    this.forPreview = fp;
};
Slideshow.prototype.setSlides = function (slides) {
    if (slides && !isArray(slides)) {
        slides = [slides, slides, slides];
    }
    this.slides = slides;
    this.goTo(0);
};
Slideshow.prototype.clearInterval = function () {
    if (this.interval) {
        clearInterval(this.interval);
        delete this.interval;
    }
};
Slideshow.prototype.setInterval = function (ms) {
    ms = Number(ms);
    var that = this;
    this.clearInterval();
    if (ms > 0 && !this.forPreview) {
// FIXME: this could leak an interval on removal
        this.interval = setInterval(function () {
            if (that.parent && !domvisual.getStage().isSwallowEditor) {
                that.next();
                visual.update();
            }
        }, ms);
    }
};
Slideshow.prototype.remove = function () {
    domvisual.DOMElement.prototype.remove.call(this);
    this.clearInterval();
};
Slideshow.prototype.setEntry = function (where) {
    this.entry = where;
};
Slideshow.prototype.setExit = function (where) {
    this.exit = where;
};

Slideshow.prototype.next = function () {
    if (this.slides) {
        var n = this.current + 1;
        if (n >= this.slides.length) {
            n = 0;
        }
        this.goTo(n);
    }
};
Slideshow.prototype.previous = function () {
    if (this.slides) {
        var n = this.current - 1;
        if (n < 0) {
            n = this.slides.length - 1;
        }
        this.goTo(n);
    }
};
Slideshow.prototype.goTo = function (n) {
    var slides = this.slides,
        prevSlide,
        newSlide;
    if (n < slides.length && n !== this.current) {
        prevSlide = this.currentSlide;
        if (prevSlide) {
            prevSlide.setPosition(this.exit);
            setTimeout(function () {
                prevSlide.remove();
                visual.update();
            }, 1000);
        }
        // delete the slide after a while
        newSlide = new image.Image({url: slides[n]});
        this.addChild(newSlide);
        newSlide.setPosition(this.entry);
        this.current = n;
        this.currentSlide = newSlide;
        setTimeout(function () {
            newSlide.setTransition(500);
            newSlide.setPosition('center');
            visual.update();
        }, 0);
    }
};

exports.Slideshow = Slideshow;
