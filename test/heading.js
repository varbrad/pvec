/* global describe, it */
const assert = require('chai').assert
const PVec = require('../build/pvec.umd.js')

describe('heading', function () {
  let p

  it('fromAngle coordination', function () {
    assert.approximately(PVec.fromAngle(0).heading(), 0, 0.1)
    assert.approximately(PVec.fromAngle(Math.PI).heading(), Math.PI, 0.1)
    assert.approximately(PVec.fromAngle(Math.PI * 2).heading(), 0, 0.1)
    assert.approximately(PVec.fromAngle(Math.PI / 8).heading(), Math.PI / 8, 0.1)
  })

  it('Arbitrary angles', function () {
    p = new PVec(2, 2)
    assert.approximately(p.heading(), 0.785, 0.1)
    p = new PVec(-4, 3)
    assert.approximately(p.heading(), 2.498, 0.1)
    p = new PVec(0, 5)
    assert.approximately(p.heading(), 1.571, 0.1)
  })

  it('Degree angles', function () {
    p = new PVec(4, 4)
    assert.approximately(p.heading() * 180 / Math.PI, 45, 0.1)
    p = new PVec(0.234, 0)
    assert.approximately(p.heading() * 180 / Math.PI, 0, 0.1)
    p = new PVec(-8, -8)
    assert.approximately(p.heading() * 180 / Math.PI, -135, 0.1)
  })
})
