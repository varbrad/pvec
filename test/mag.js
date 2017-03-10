/* global describe, it */
const assert = require('chai').assert
const PVec = require('../build/pvec.umd.js')

describe('mag', function () {
  let a

  it('One-dimensional magnitude', function () {
    a = new PVec(10, 0)
    assert.equal(a.mag(), 10)
  })

  it('Two-dimensional magnitude', function () {
    a = new PVec(8, 8)
    assert.approximately(a.mag(), 11.314, 0.01)
  })

  it('Three-dimensional magnitude', function () {
    a = new PVec(3, 4, 8)
    assert.approximately(a.mag(), 9.434, 0.01)
  })

  it('Zero magnitude', function () {
    a = new PVec()
    assert.equal(a.mag(), 0)
  })
})
