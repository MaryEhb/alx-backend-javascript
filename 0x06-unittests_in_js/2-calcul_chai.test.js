const calculateNumber = require('./1-calcul');
const chai = require('chai');
const expect = chai.expect;

describe('calculateNumber', () => {
  it('Test 0', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.be.equal(6);
  });
  it('Test 1', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.be.equal(-4);
  });
  it('Test 2', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.equal(0.2);
  });
  it('Test 3', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.be.equal('Error');
  });
});
