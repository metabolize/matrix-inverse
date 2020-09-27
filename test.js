var chai = require('chai'),
  chaiStats = require('chai-stats')

chai.use(chaiStats)

var should = chai.should(),
  expect = chai.expect

var matrixInverse = require('./matrix-inverse')

var M = [
  [3, 3.2],
  [3.5, 3.6],
]

var M_inv = matrixInverse(M)

var expected = [
  [-9, 8],
  [8.75, -7.5],
]

expect(M_inv[0][0]).to.almost.equal(expected[0][0])
expect(M_inv[0][1]).to.almost.equal(expected[0][1])
expect(M_inv[1][0]).to.almost.equal(expected[1][0])
expect(M_inv[1][1]).to.almost.equal(expected[1][1])

var M_notinvertible = matrixInverse([
  [1, 1],
  [1, 1],
])
expect(M_notinvertible).to.equal(null)
