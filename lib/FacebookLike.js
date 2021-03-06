/**
    FacebookLike.js
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
    className = 'FacebookLike',
    group = require('./groups').groups.FacebookLike;

function FacebookLike(config) {
    domvisual.DOMElement.call(this, config, group);
    function setup() {
        var fbRoot,
            fbLib;
        if (!document.getElementById('fb-root')) {
            fbRoot = new domvisual.DOMElement('div');
            fbRoot.setElementAttributes({id: 'fb-root'});
            domvisual.getStage().addChild(fbRoot);
            fbLib = document.createElement('script');
            fbLib.id = 'facebook-jssdk';
            fbLib.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
            document.getElementsByTagName('head')[0].appendChild(fbLib);
        }
    }
    setup();
    this.setInnerHTML('<div class="fb-like" data-href="' +
        window.location.href +
        '" data-send="' +
        Boolean(this.dataSend) +
        '" data-layout="button_count" data-width="450" data-show-faces="true"></div>'
    );
}

FacebookLike.prototype = visual.inheritVisual(domvisual.DOMElement, group, packageName, className);

FacebookLike.createPreview = function () {
    return new domvisual.DOMImg({url: 'simpleui/img/FacebookLike.png'});
};

FacebookLike.prototype.getConfigurationSheet = function () {
    return { dataSend: require('config').booleanConfig('Send Button:') };
};

FacebookLike.prototype.setDataSend = function (enable) {
    this.dataSend = enable;
    return this;
};

exports.FacebookLike = FacebookLike;
