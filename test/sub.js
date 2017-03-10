/* global describe, it */
const assert = require('chai').assert
const PVec = require('../build/pvec.common.js')

describe('sub', function () {
  let p, p2

  describe('Instance', function () {
    it('PVec subtraction', function () {
      p = new PVec(1, 2, 3)
      p2 = new PVec(-1, -2, -3)
      p.sub(p2)
      assert.equal(p.x, 2)
      assert.equal(p.y, 4)
      assert.equal(p.z, 6)
    })

    it('Integer subtraction', function () {
      p = new PVec(-3, 6, 12)
      p.sub(3, -6, -12)
      assert.equal(p.x, -6)
      assert.equal(p.y, 12)
      assert.equal(p.z, 24)
    })

    it('Floating point addition', function () {
      p = new PVec(28.3827, 45.1827, 15.2827)
      p.sub(new PVec(48.2817, -4.333, 8.0009))
      assert.equal(Math.round(p.x), Math.round(28.3827 - 48.2817))
      assert.equal(Math.round(p.y), Math.round(45.1827 + 4.333))
      assert.equal(Math.round(p.z), Math.round(15.2827 - 8.0009))
    })
  })

  describe('Static', function () {
    it('Return new vector', function () {
      p = PVec.sub(new PVec(5, 10, 15), new PVec(3, -10, 8))
      assert.equal(p.x, 2)
      assert.equal(p.y, 20)
      assert.equal(p.z, 7)
    })

    it('Set existing vector', function () {
      p = new PVec(3, 8, 24) // Should ignore these values
      p2 = PVec.sub(new PVec(-5, 2, 18), new PVec(6, 3, 2), p)
      assert.equal(p, p2) // Should both reference the same vector
      assert.equal(p.x, -11)
      assert.equal(p.y, -1)
      assert.equal(p.z, 16)
    })
  })
})
