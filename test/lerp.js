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

  it('Individual params (x)', function () {
    p = new PVec(4, 0, 0)

    p.lerp(8, 0.5)

    assert.approximately(p.x, 6, 0.01)
    assert.approximately(p.y, 0, 0.01)
    assert.approximately(p.z, 0, 0.01)
  })

  it('Individual params (x, y)', function () {
    p = new PVec(-2, 15.5, 0)

    p.lerp(2, 31, 0.5)

    assert.approximately(p.x, 0, 0.01)
    assert.approximately(p.y, 23.25, 0.01)
    assert.approximately(p.z, 0, 0.01)
  })

  it('Individual params (x, y, z)', function () {
    p = new PVec(18.553, 0.4, 14.2)

    p.lerp(85, 44, -3.48, 0.85)

    assert.approximately(p.x, 75.033, 0.01)
    assert.approximately(p.y, 37.46, 0.01)
    assert.approximately(p.z, -0.828, 0.01)
  })
})
