const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('suite for the index page', () =>{
  it('Test 0', (done) => {
    request.get('http://localhost:7865', (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
