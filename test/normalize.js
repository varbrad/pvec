/* global describe, it */
const assert = require('chai').assert
const PVec = require('../build/pvec.umd.js')

describe('normalize', function () {
  let a, b

  it('Unit length', function () {
    a = new PVec(42.5, 15.4, 18.2)
    a.normalize()
    assert.approximately(a.magSq(), 1, 0.01)
  })

  it('Match heading', function () {
    a = new PVec(15, 12)
    b = new PVec()
    a.normalize(b)
    assert.approximately(a.heading(), b.heading(), 0.01)
  })

  it('Absolute 1D normalize', function () {
    a = new PVec(20)
    a.normalize()
    assert.equal(a.x, 1)
    assert.equal(a.y, 0)
    assert.equal(a.z, 0)
  })

  it('Absolute 2D normalize', function () {
    a = new PVec(5, 10)
    a.normalize()
    assert.approximately(a.x, 0.447, 0.01)
    assert.approximately(a.y, 0.894, 0.01)
    assert.equal(a.z, 0)
  })

  it('Absolute 3D normalize', function () {
    a = new PVec(14.5, 12.8, 4)
    a.normalize()
    assert.approximately(a.x, 0.734, 0.01)
    assert.approximately(a.y, 0.648, 0.01)
    assert.approximately(a.z, 0.203, 0.01)
  })
})
