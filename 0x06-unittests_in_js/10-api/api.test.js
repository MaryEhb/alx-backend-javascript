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

  it('Test 1', (done) => {
    request.get('http://localhost:7865/cart/19', (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 19');
      done();
    });
  });

  it('Test 2', (done) => {
    request.get('http://localhost:7865/cart/m19', (err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('Test 3', (done) => {
    request.get('http://localhost:7865/available_payments', (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      const val = {payment_methods: {credit_cards: true, paypal: false}};
      expect(JSON.parse(body)).to.be.deep.equal(val);
      done();
    });
  });

  it('Test 4', (done) => {
    request.post('http://localhost:7865/login',
	         {json: {userName: 'Mariem'}},
	         (err, res, body) => {
		   expect(res.statusCode).to.be.equal(200);
                   expect(body).to.be.equal('Welcome Mariem');
                   done();
		 });
  });
});
