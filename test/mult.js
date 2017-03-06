/* global describe, it */
const assert = require('assert')
const PVec = require('../build/pvec.common.js')

describe('Mult', function () {
  let p, p2

  describe('Instance', function () {
    it('PVec multiplication', function () {
      p = new PVec(4, 5, 6)
      p2 = new PVec(-1, 2, -3)
      p.mult(p2)
      assert.equal(p.x, -4)
      assert.equal(p.y, 10)
      assert.equal(p.z, -18)
    })
  })

  describe('Static', function () {
    it('Return new vector', function () {
      p = PVec.mult(new PVec(5, 10, 15), new PVec(3, -10, 8))
      assert.equal(p.x, 15)
      assert.equal(p.y, -100)
      assert.equal(p.z, 120)
    })

    it('Set existing vector', function () {
      p = new PVec(3, 8, 24) // Should ignore these values
      p2 = PVec.mult(new PVec(-5, 2, 18), new PVec(6, 3, 2), p)
      assert.equal(p, p2) // Should both reference the same vector
      assert.equal(p.x, -30)
      assert.equal(p.y, 6)
      assert.equal(p.z, 36)
    })
  })
})
