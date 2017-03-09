/* global describe, it */
const assert = require('chai').assert
const PVec = require('../build/pvec.common.js')

describe('SetMag', function () {
  let p, p2

  describe('Instance', function () {
    it('One-dimensional', function () {
      p = new PVec(1, 0, 0)
      p.setMag(5)
      assert.equal(p.x, 5)
      assert.equal(p.y, 0)
      assert.equal(p.z, 0)
    })

    it('Two-dimensional', function () {
      p = new PVec(5, 10, 0)
      p.setMag(12)
      assert.equal(Math.round(p.x), 5)
      assert.equal(Math.round(p.y), 11)
      assert.equal(p.z, 0)
    })

    it('Three-dimensional', function () {
      p = new PVec(-4, 19, 4)
      p.setMag(7.5)
      assert.equal(Math.round(p.x), -2)
      assert.equal(Math.round(p.y), 7)
      assert.equal(Math.round(p.z), 2)
    })
  })

  describe('Static', function () {
    it('One-dimensional', function () {
      p = new PVec(9, 0, 0)
      p2 = new PVec(28, 3, 0)
      p.setMag(p2, 12)
      assert.notEqual(p, p2)
      assert.equal(p2.x, 12)
      assert.equal(p2.y, 0)
      assert.equal(p2.z, 0)
    })

    it('Two-dimensional', function () {
      p = new PVec(15, 3, 0)
      p2 = new PVec()
      p.setMag(p2, 8)
      assert.notEqual(p, p2)
      assert.equal(Math.round(p2.x), 8)
      assert.equal(Math.round(p2.y), 2)
      assert.equal(p2.z, 0)
    })

    it('Three-dimensional', function () {
      p = new PVec(-5, 4, 32.5)
      p2 = new PVec(5, 0, 0)
      p.setMag(p2, 18.4)
      assert.notEqual(p, p2)
      assert.equal(Math.round(p2.x), -3)
      assert.equal(Math.round(p2.y), 2)
      assert.equal(Math.round(p2.z), 18)
    })
  })
})
