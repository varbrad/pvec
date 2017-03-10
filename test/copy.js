/* global describe, it, beforeEach */
const assert = require('chai').assert
const PVec = require('../build/pvec.umd.js')

describe('copy', function () {
  let p, p2

  beforeEach(function () {
    p = new PVec(50, 40, 30)
  })

  describe('Instance', function () {
    beforeEach(function () {
      p2 = p.copy()
    })

    it('Copy should be seperate object', function () {
      assert.notEqual(p, p2)
    })

    it('Copy should have identical values', function () {
      assert.equal(p.x, p2.x)
      assert.equal(p.y, p2.y)
      assert.equal(p.z, p2.z)
    })
  })

  describe('Static', function () {
    beforeEach(function () {
      p2 = PVec.copy(p)
    })

    it('Static copy should not reference original PVec', function () {
      assert.notEqual(p, p2)
    })

    it('Static copy should have identical values', function () {
      assert.equal(p.x, p2.x)
      assert.equal(p.y, p2.y)
      assert.equal(p.z, p2.z)
    })
  })
})
