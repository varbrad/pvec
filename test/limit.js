/* global describe, it */
const assert = require('chai').assert
const PVec = require('../build/pvec.umd.js')

describe('limit', function () {
  let p

  it('Integer result', function () {
    p = new PVec(6, 8, 0)
    p.limit(5)
    assert.equal(p.x, 3)
    assert.equal(p.y, 4)
    assert.equal(p.z, 0)
  })

  it('Fractional result', function () {
    p = new PVec(10, 20, 2)
    p.limit(5)
    assert.equal(Math.round(p.x), 2)
    assert.equal(Math.round(p.y), 4)
    assert.equal(Math.round(p.z), 0)
  })

  it('Zero limit', function () {
    p = new PVec(12.2, 8.4, 9.5)
    p.limit(0)
    assert.equal(p.x, 0)
    assert.equal(p.y, 0)
    assert.equal(p.z, 0)
  })
})
