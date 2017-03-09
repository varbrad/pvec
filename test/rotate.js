/* global describe, it */
const assert = require('chai').assert
const PVec = require('../build/pvec.common.js')

describe('rotate', function () {
  let p

  it('PI interval rotations', function () {
    p = new PVec(10, 0)
    p.rotate(Math.PI)
    assert.approximately(p.x, -10, 0.1)
    assert.approximately(p.y, 0, 0.1)
    assert.approximately(p.z, 0, 0.1)
    p.rotate(Math.PI / 2)
    assert.approximately(p.x, 0, 0.1)
    assert.approximately(p.y, -10, 0.1)
    assert.approximately(p.z, 0, 0.1)
  })

  it('Fractional rotations', function () {
    p = new PVec(18, 4, 2)
    p.rotate(0.8572)
    assert.approximately(p.x, 8.758, 0.1)
    assert.approximately(p.y, 10.990, 0.1)
    assert.approximately(p.z, 2, 0.1)
  })
})
