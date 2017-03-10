/* global describe, it */
const assert = require('chai').assert
const PVec = require('../build/pvec.umd.js')

describe('normalize', function () {
  let a, b

  it('Maximum angle', function () {
    a = new PVec(10, 0)
    b = new PVec(0, 0)
    assert.equal(a.y, b.y)
  })
})
