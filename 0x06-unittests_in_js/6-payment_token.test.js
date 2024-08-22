const getPaymentTokenFromAPI = require('./6-payment_token');
const chai = require('chai');
const expect = chai.expect;

describe('getPaymentTokenFromAPI', () => {
  it('Test the result of getPaymentTokenFromAPI(true)', (done) => {
    getPaymentTokenFromAPI(true).then((val) => {
      expect(val).to.deep.equal({data: 'Successful response from the API'});
      done();
    });
  });
});
