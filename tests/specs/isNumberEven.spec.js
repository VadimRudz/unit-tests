/* eslint-disable new-cap */
let expect;
let numberValidator;

before(async function() {
  const chai = await import('chai');
  expect = chai.expect; // Измените на chai.expect
  numberValidator = require('../../app/number-validator.js');
});

describe('numberValidator', function() {
  it('should return true for even numbers', function() {
    const validator = new numberValidator();
    expect(validator.isNumberEven(4)).to.be.true;
  });

  it('should return false for odd numbers', function() {
    const validator = new numberValidator();
    expect(validator.isNumberEven(7)).to.be.false;
  });
});
