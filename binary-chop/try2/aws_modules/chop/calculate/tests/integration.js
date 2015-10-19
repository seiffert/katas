require('../chop');
var assert = require('assert');
var rp = require('request-promise')

if (process.env.API_ENDPOINT) {
  function chop(haystack, needle) {
    return rp({
      method: 'POST',
      uri: process.env.API_ENDPOINT + 'chop/calculate',
      body: JSON.stringify({
        haystack: haystack,
        needle: needle
      })
    });
  }
  function test(expectedResult, haystack, needle) {
    return chop(haystack, needle).then(function(response) {
      assert.equal(expectedResult, JSON.parse(response).result);
    });
  }
  
  describe('chop on Lambda', function() {
    it('should return -1 when the value is not present', function (done) {
      var tests = [
        test(-1, [], 3),
        test(-1, [1], 3),
        test(-1, [1, 3, 5], 0),
        test(-1, [1, 3, 5], 2),
        test(-1, [1, 3, 5], 4),
        test(-1, [1, 3, 5], 6),
        test(-1, [1, 3, 5, 7], 0),
        test(-1, [1, 3, 5, 7], 2),
        test(-1, [1, 3, 5, 7], 4),
        test(-1, [1, 3, 5, 7], 6),
        test(-1, [1, 3, 5, 7], 8)
      ];
      Promise.all(tests).then(function() {
        done();
      });
    });
    it('should return the elements index when the value is present', function (done) {
      var tests = [
        test(0, [1], 1),
        test(0, [1, 3, 5], 1),
        test(1, [1, 3, 5], 3),
        test(2, [1, 3, 5], 5),
        test(0, [1, 3, 5, 7], 1),
        test(1, [1, 3, 5, 7], 3),
        test(2, [1, 3, 5, 7], 5),
        test(3, [1, 3, 5, 7], 7)
      ];
      Promise.all(tests).then(function() {
        done();
      });
    });
  });
}
