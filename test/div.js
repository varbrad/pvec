/* global describe, it */
const assert = require('chai').assert
const PVec = require('../build/pvec.umd.js')

describe('div', function () {
  let p, p2

  describe('Instance', function () {
    it('PVec division', function () {
      p = new PVec(7, 2, 10)
      p2 = new PVec(-7, 1, 2)
      p.div(p2)
      assert.equal(p.x, -1)
      assert.equal(p.y, 2)
      assert.equal(p.z, 5)
    })

    it('Handle division by 0', function () {
      p = new PVec(18, 0, -2)
      p.div(new PVec(0, 0, -2))
      assert.equal(p.x, Infinity)
      assert.equal(isNaN(p.y), true)
      assert.equal(p.z, 1)
    })
  })

  describe('Static', function () {
    it('Return new vector', function () {
      p = PVec.div(new PVec(5, 10, 15), new PVec(3, -10, 8))
      assert.equal(Math.round(p.x), Math.round(5 / 3))
      assert.equal(p.y, -1)
      assert.equal(Math.round(p.z), Math.round(15 / 8))
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
