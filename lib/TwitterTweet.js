/**
    TwitterTweet.js
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
    className = 'TwitterTweet',
    group = require('./groups').groups.TwitterTweet;

function TwitterTweet(config) {
    domvisual.DOMElement.call(this, config, group);
    var that = this;
    function setup() {
        var twLib;

        that.setInnerHTML('<a href="https://twitter.com/share" class="twitter-share-button" data-via="twitterapi" data-lang="en">Tweet</a>');
        if (!document.getElementById('twitter-wjs')) {
            twLib = document.createElement('script');
            twLib.id = 'twitter-wjs';
            twLib.src = "https://platform.twitter.com/widgets.js";
            document.getElementsByTagName('head')[0].appendChild(twLib);
        }
    }
    setup();
}
TwitterTweet.prototype = visual.inheritVisual(domvisual.DOMElement, group, packageName, className);
TwitterTweet.prototype.getConfigurationSheet = function () {
    return {  };
};

exports.TwitterTweet = TwitterTweet;
