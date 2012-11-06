/**
    Portfolio.js
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
    className = 'Portfolio',
    group = require('./groups').groups.Portfolio,
    utils = require('utils'),
    forEach = utils.forEach,
    isArray = utils.isArray,
    FullScreenSlideshow = require('./FullScreenSlideshow').FullScreenSlideshow,
    FramedImage = require('./FramedImage').FramedImage;

/*
    Note: to keep things simple and because this thing will be
    provisioned by hand, we will load all the images as soon as the
    slideshow is initialized.
    Then we will simply distribute them graphically and allow a
    click to maximize feature.
*/

function Portfolio(config) {
    this.setThumbnailDimensions([180, 120, 0]);
    this.setThumbnailSpacing([20, 20, 0]);
    domvisual.DOMElement.call(this, config, group);
    this.setOverflow('hidden');
}
Portfolio.prototype = visual.inheritVisual(domvisual.DOMElement, group, packageName, className);

Portfolio.createPreview = function () {
    return new domvisual.DOMImg({url: 'simpleui/img/Portfolio.png'});
};

Portfolio.prototype.getConfigurationSheet = function () {
    var config = require('config');
    return {
        slides: config.imageUrlArrayConfig('Images')
    };
};
/*
    this is the max thumbnail dimension
*/
Portfolio.prototype.setThumbnailDimensions = function (dim) {
    this.thumbDimensions = dim;
};
/*
    this is the thumbnail spacing
*/
Portfolio.prototype.setThumbnailSpacing = function (dim) {
    this.thumbSpacing = dim;
};
Portfolio.prototype.setSlides = function (slides) {
    if (!isArray(slides)) {
        slides = [slides, slides, slides, slides, slides, slides];
    }
    // we do not support reloading for now
    if (this.slidesLoading) {
        return;
    }
    var toLoad = slides.length,
        that = this;
    function slideLoaded() {
        this.setVisible(true);
        toLoad -= 1;
        if (toLoad === 0) {
            delete that.slidesLoading;
            // we want to redisplay
            that.positionSlides();
        }
    }
    if (toLoad > 0) {
        this.slidesLoading = true;
        this.slides = slides;
        this.removeAllChildren();
        forEach(slides, function (s, n) {
            var img = new FramedImage({url: s});
            that.addChild(img, String(n));
            img.on('load', slideLoaded
            ).on('click', function () {
                // hack for using a non standard run full screen
                var fsss = new FullScreenSlideshow({slides: that.slides, select: n}),
                    runFullScreen = domvisual.getStage().runFullScreen;
                if (runFullScreen) {
                    runFullScreen.call(domvisual.getStage(), fsss);
                }
            }).setCursor('pointer'
            ).setVisible(false);

        });
    }
};
/*
    We position 'à la Google Images': lines of a constant height,
    flowing the width

QUESTION: DO WE EVENT WANT TO FLOW MANUALLY???
OR WE WANT TO USE THE NORMAL FLOWING THING?

Let's use matrices and do it manually...

*/
Portfolio.prototype.positionSlides = function () {
    if (!this.slides || this.slidesLoading) {
        return;
    }
    var cntDim = this.dimensions,
        that = this,
        x = 0,
        y = 0,
        line = [],
        linew = 0,
        thmbDim = this.thumbDimensions,
        thmbSpacing = this.thumbSpacing;
    function fitDimensions(dim) {
        // take the height of the thumb and compute a width
        var w = thmbDim[1] * dim[0] / dim[1],
            h = thmbDim[1];
        // if the computed width is wider than the max thumb width
        if (w > thmbDim[0]) {
            // do the opposite (max the width, and compute the height)
            h = thmbDim[0] * dim[1] / dim[0];
            w = thmbDim[0];
        }
        return [w, h, 0];
    }
    function flushLine(line, linew) {
        // take all the elements in the line and put them at an appropriate
        // position
        forEach(line, function (le, n) {
            var ex = le.pos[0] + (cntDim[0] - linew) / 2,
                ey = le.pos[1] + (thmbDim[1] - le.dim[1]) / 2;
            that.getChild(String(le.index)
            ).setDimensions(le.dim
            ).setTranslationMatrix([ex, ey, 0]);
        });
    }

    forEach(this.slides, function (s, n) {
        var c = that.getChild(n),
            dim = c.getNaturalDimensions(),
            fDim = fitDimensions(dim),
            le = {index: n, dim: fDim, pos: [x, y, 0] };
        // can be added to the current layout line
        if (x + fDim[0] < cntDim[0]) {
            linew += fDim[0];
            line.push(le);
        } else {
            x = 0;
            y += thmbDim[1] + thmbSpacing[1];
            // stop iterating
            if (y > cntDim[1]) {
                return true;
            }
            flushLine(line, linew + line.length * thmbSpacing[0]);
            le.pos = [x, y, 0];
            line = [le];
            linew = fDim[0];
        }
        x += fDim[0] + thmbSpacing[0];

    });
    // if the last line is not empty
    if (line.length > 0) {
        flushLine(line, linew + line.length * thmbSpacing[0]);
    }
};

Portfolio.prototype.applyLayout = function (children) {
    domvisual.DOMElement.prototype.applyLayout.call(this, children);
    this.positionSlides();
    return this;
};


exports.Portfolio = Portfolio;
