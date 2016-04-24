XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var deg2rad = require('/Users/kvz/code/phpjs/src/php/math/deg2rad.js')

describe('php.math.deg2rad.js', function () {
  it('should pass example 1', function (done) {
    deg2rad(45)
    var expected = 0.7853981633974483
    var result = deg2rad(45)
    expect(result).to.deep.equal(expected)
    done()
  })
})