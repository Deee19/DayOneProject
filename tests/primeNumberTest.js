(function(){
  'use strict';
  var chai = require('chai');
  var expect = chai.expect;

  var myApp = require('../app/primeNumber.js');
  describe("Generate Prime Numbers", function() {
    
    it('should return 2, 3, 5, 7, 11, 13, 17, 19 for 20', function() {
      expect(myApp.prime(20)).to.eql([ 2, 3, 5, 7, 11, 13, 17, 19 ]);
    });
    
    it('should return [] for 0', function() {
      expect(myApp.prime(0)).to.eql([]);
    });
    
    it('should return the prime numbers in an array', function() {
      expect(myApp.prime(5)).to.eql([2,3,5]);
    });
  });
})();