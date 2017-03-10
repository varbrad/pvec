/* global describe, it */
const assert = require('chai').assert
const PVec = require('../build/pvec.umd.js')

describe('dist', function () {
  let a, b

  it('No distance', function () {
    a = new PVec(24, 4)
    b = new PVec(24, 4)
    assert.equal(a.dist(b), 0)
  })

  it('Integer distance', function () {
    a = new PVec(6, 8)
    b = new PVec(3, 4)
    assert.equal(a.dist(b), 5)
  })

  it('Arbitrary 1D distance', function () {
    a = new PVec(22.5)
    b = new PVec(-18.5)
    assert.equal(a.dist(b), 41)
  })

  it('Arbitrary 2D distance', function () {
    a = new PVec(18, 11)
    b = new PVec(12, -2)
    assert.approximately(a.dist(b), 14.318, 0.01)
  })

  it('Arbitrary 3D distance', function () {
    a = new PVec(-4.5, 2, 11)
    b = new PVec(9, 35.5, 27.25)
    assert.approximately(a.dist(b), 39.605, 0.01)
  })

  it('Square distance', function () {
    a = new PVec(25, 25)
    b = new PVec(-25, -25)
    assert.approximately(a.dist(b), 70.711, 0.01)
  })

  it('Equivalent order', function () {
    a = new PVec(82.234, 14.4, 18.48)
    b = new PVec(18.4, -2.33, 4.19)
    assert.equal(a.dist(b), b.dist(a))
  })
})
