/* global describe, it */
const assert = require('chai').assert
const PVec = require('../build/pvec.umd.js')

describe('array', function () {
  let a

  it('One-dimensional', function () {
    a = new PVec(18)
    assert.deepEqual(a.array(), [18, 0, 0])
  })

  it('Two-dimensional', function () {
    a = new PVec(8.33, -542)
    assert.deepEqual(a.array(), [8.33, -542, 0])
  })

  it('Three-dimensional', function () {
    a = new PVec(15.5, 20.5, -14.5)
    assert.deepEqual(a.array(), [15.5, 20.5, -14.5])
  })
})
