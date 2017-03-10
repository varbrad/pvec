/* global describe, it, beforeEach */
const assert = require('chai').assert
const PVec = require('../build/pvec.umd.js')

describe('set', function () {
  let p

  beforeEach(function () {
    p = new PVec(0, -0.5, 95480)
  })

  describe('Instance', function () {
    it('Should set only x value', function () {
      p.set(24)
      assert.equal(p.x, 24)
      assert.equal(p.y, -0.5)
      assert.equal(p.z, 95480)
    })

    it('Should set only x & y values', function () {
      p.set(89, -5)
      assert.equal(p.x, 89)
      assert.equal(p.y, -5)
      assert.equal(p.z, 95480)
    })

    it('Should set all values', function () {
      p.set(-0.02, 19, 0)
      assert.equal(p.x, -0.02)
      assert.equal(p.y, 19)
      assert.equal(p.z, 0)
    })

    it('Set values from array', function () {
      p.set([4, 6, 8])
      assert.equal(p.x, 4)
      assert.equal(p.y, 6)
      assert.equal(p.z, 8)
    })

    it('Ensure empty array values are zero', function () {
      p.set(41, 18, 29)
      p.set([3, 0, 0])
      assert.equal(p.x, 3)
      assert.equal(p.y, 0)
      assert.equal(p.z, 0)
    })
  })
})
