/* global describe, it */
const assert = require('assert')
const PVec = require('../build/pvec.common.js')

describe('FromAngle', function () {
  let p

  it('Right-facing vector from 0 angle', function () {
    p = PVec.fromAngle(0)
    assert.equal(Math.round(p.x), 1)
    assert.equal(Math.round(p.y), 0)
    assert.equal(p.z, 0)
  })

  it('Left-facing vector from PI angle', function () {
    p = PVec.fromAngle(Math.PI)
    assert.equal(Math.round(p.x), -1)
    assert.equal(Math.round(p.y), 0)
    assert.equal(p.z, 0)
  })

  it('Set referenced vector', function () {
    p = new PVec()
    PVec.fromAngle(Math.PI, p)
    assert.equal(Math.round(p.x), -1)
    assert.equal(Math.round(p.y), 0)
    assert.equal(p.z, 0)
  })
})
