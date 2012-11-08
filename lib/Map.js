/**
    Map.js
*/
var visual = require('visual'),
    domvisual = require('domvisual'),
    packageName = 'simpleui',
    className = 'Map',
    group = require('./groups').groups.Map;

function Map(config) {
    domvisual.DOMElement.call(this, config, group);
}
Map.prototype = visual.inheritVisual(domvisual.DOMElement, group, packageName, className);
Map.createPreview = function () {
    return new domvisual.DOMImg({url: 'simpleui/img/Map.png'});
};

Map.prototype.getConfigurationSheet = function () {
    var config = require('config');
    return {
        googleMapCode: config.inputConfigFullLine('google map embed code:')
    };
};
Map.prototype.setGoogleMapCode = function (code) {
    var map = this.getChild('map'),
        fc;
    map.setInnerHTML(code);
    fc = map.element.firstChild;
    if (fc) {
        fc.width = '100%';
        fc.height = '100%';
        fc.position = 'relative';
    }
};

/*Map.prototype.applyLayout = function (stuff) {
    domvisual.prototype.applyLayout.call(this, stuff);
    var map = this.getChild('map'),
        fc = map.element.firstChild;
    if (fc) {
        fc.width = 100
    }
};*/

exports.Map = Map;
