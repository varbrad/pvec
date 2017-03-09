/* global describe, it */
const assert = require('chai').assert
const PVec = require('../build/pvec.common.js')

describe('lerp', function () {
  let p, p2

  it('Minimum', function () {
    p = new PVec(5, 5, 5)
    p2 = new PVec(10, 10, 10)

    p.lerp(p2, 0)

    assert.approximately(p.x, 5, 0.01)
    assert.approximately(p.y, 5, 0.01)
    assert.approximately(p.z, 5, 0.01)
  })

  it('Intermediate', function () {
    p = new PVec(5, 5, 5)
    p2 = new PVec(10, 10, 10)

    p.lerp(p2, 0.5)

    assert.approximately(p.x, 7.5, 0.01)
    assert.approximately(p.y, 7.5, 0.01)
    assert.approximately(p.z, 7.5, 0.01)
  })

  it('Maximum', function () {
    p = new PVec(5, 5, 5)
    p2 = new PVec(10, 10, 10)

    p.lerp(p2, 1)

    assert.approximately(p.x, 10, 0.01)
    assert.approximately(p.y, 10, 0.01)
    assert.approximately(p.z, 10, 0.01)
  })
})
