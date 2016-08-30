var fs = require('fs');
var path = require('path');

var main = require(path.join(__dirname, '../../', 'package.json'));

module.exports = function () {
    var params = Array.prototype.slice.call(arguments);
    var ls = fs.readdirSync(path.join(__dirname, '../'));
    var rx = new RegExp('^' + main.name + '\\-');
    var modules = {};
    ls.forEach(function (f) {
        if (rx.test(f)) {
            if (params.length) {
                modules[f] = require(path.join(__dirname, '../', f)).apply(require, params);
            } else {
                modules[f] = require(path.join(__dirname, '../', f));
            }
        }
    });
    return modules;
};