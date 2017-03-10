/* global describe, it */
const assert = require('chai').assert
const PVec = require('../build/pvec.umd.js')

describe('magSq', function () {
  let a

  it('One-dimensional squared magnitude', function () {
    a = new PVec(10, 0)
    assert.equal(a.magSq(), 100)
  })

  it('Two-dimensional squared magnitude', function () {
    a = new PVec(8, 8)
    assert.approximately(a.magSq(), 11.314 * 11.314, 0.01)
  })

  it('Three-dimensional squared magnitude', function () {
    a = new PVec(3, 4, 8)
    assert.approximately(a.magSq(), 9.434 * 9.434, 0.01)
  })

  it('Zero squared magnitude', function () {
    a = new PVec()
    assert.equal(a.magSq(), 0)
  })
})
