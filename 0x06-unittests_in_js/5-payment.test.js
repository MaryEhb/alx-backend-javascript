const sendPaymentRequestToAPI = require('./5-payment');
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

describe('sendPaymentRequestToAPI', () => {
  let spy;
  beforeEach(() => {
    spy = sinon.spy(console, 'log');
  });

  it('Test 0', () => {
    sendPaymentRequestToAPI(100, 20);
    expect(spy.calledWith('The total is: 120')).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });

  afterEach(() => {
    spy.restore();
  });
});
