/* global describe, it */
const assert = require('chai').assert
const PVec = require('../build/pvec.umd.js')

describe('random2D', function () {
  let a

  it('Ensure unit vector', function () {
    a = PVec.random2D()
    assert.approximately(a.mag(), 1, 0.01)
  })
})
