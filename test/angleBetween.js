/* global describe, it */
const assert = require('chai').assert
const PVec = require('../build/pvec.umd.js')

describe('angleBetween', function () {
  let a, b

  it('Maximum possible angle', function () {
    a = new PVec(10, 0)
    b = new PVec(-10, 0)
    assert.approximately(PVec.angleBetween(a, b), Math.PI, 0.01)
  })

  it('Similar vectors', function () {
    a = new PVec(3, 4)
    b = new PVec(4, 3)
    assert.approximately(PVec.angleBetween(a, b), 0.284, 0.01)
  })

  it('Different length vectors', function () {
    a = new PVec(7, 1)
    b = new PVec(5, 5)
    assert.approximately(PVec.angleBetween(a, b), 0.644, 0.01)
  })

  it('Zero vector', function () {
    a = new PVec()
    b = new PVec(2, 4, 5)
    assert.equal(PVec.angleBetween(a, b), 0)
  })
})
