/* global describe, it */
const assert = require('assert')
const PVec = require('../build/pvec.common.js')

describe('Dot', function () {
  let p, p2

  describe('Instance', function () {
    it('Integer dot product', function () {
      p = new PVec(14, 8, 3)
      p2 = new PVec(3, 2, 1)
      assert.equal(p.dot(p2), 61)
    })
  })

  describe('Static', function () {
  })
})
