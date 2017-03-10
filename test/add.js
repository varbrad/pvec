/* global describe, it */
const assert = require('chai').assert
const PVec = require('../build/pvec.common.js')

describe('add', function () {
  let p, p2

  describe('Instance', function () {
    it('PVec addition', function () {
      p = new PVec(1, 2, 3)
      p2 = new PVec(-1, -2, -3)
      p.add(p2)
      assert.equal(p.x, 0)
      assert.equal(p.y, 0)
      assert.equal(p.z, 0)
    })

    it('Integer addition', function () {
      p = new PVec(-3, 6, 12)
      p.add(3, -6, -12)
      assert.equal(p.x, 0)
      assert.equal(p.y, 0)
      assert.equal(p.z, 0)
    })

    it('Floating point addition', function () {
      p = new PVec(28.3827, 45.1827, 15.2827)
      p.add(new PVec(48.2817, -4.333, 8.0009))
      assert.equal(Math.round(p.x), 77)
      assert.equal(Math.round(p.y), 41)
      assert.equal(Math.round(p.z), 23)
    })
  })

  describe('Static', function () {
    it('Return new vector', function () {
      p = PVec.add(new PVec(5, 10, 15), new PVec(3, -10, 8))
      assert.equal(p.x, 8)
      assert.equal(p.y, 0)
      assert.equal(p.z, 23)
    })

    it('Set existing vector', function () {
      p = new PVec(3, 8, 24) // Should ignore these values
      p2 = PVec.add(new PVec(-5, 2, 18), new PVec(6, 3, 2), p)
      assert.equal(p, p2) // Should both reference the same vector
      assert.equal(p.x, 1)
      assert.equal(p.y, 5)
      assert.equal(p.z, 20)
    })
  })
})
