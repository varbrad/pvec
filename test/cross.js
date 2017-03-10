/* global describe, it */
const assert = require('chai').assert
const PVec = require('../build/pvec.umd.js')

describe('cross', function () {
  let a, b, c

  it('Arbitrary cross product', function () {
    a = new PVec(10, 20, 2)
    b = new PVec(60, 80, 6)
    c = a.cross(b)
    assert.approximately(c.x, -40, 0.01)
    assert.approximately(c.y, 60, 0.01)
    assert.approximately(c.z, -400, 0.01)
  })
})
