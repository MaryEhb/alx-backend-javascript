const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('calculateNumber', () => {
  it('Test 0', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('Test 1', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('Test 2', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('Test 3', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
