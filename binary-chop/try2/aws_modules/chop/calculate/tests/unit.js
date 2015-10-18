require('../chop');
var assert = require('assert');

describe('chop', function() {
  it('should return -1 when the value is not present', function () {
    assert.equal(-1, [].chop(3));
    assert.equal(-1, [1].chop(3));
    assert.equal(-1, [1, 3, 5].chop(0));
    assert.equal(-1, [1, 3, 5].chop(2));
    assert.equal(-1, [1, 3, 5].chop(4));
    assert.equal(-1, [1, 3, 5].chop(6));
    assert.equal(-1, [1, 3, 5, 7].chop(0));
    assert.equal(-1, [1, 3, 5, 7].chop(2));
    assert.equal(-1, [1, 3, 5, 7].chop(4));
    assert.equal(-1, [1, 3, 5, 7].chop(6));
    assert.equal(-1, [1, 3, 5, 7].chop(8));
  });
  it('should return the elements index when the value is present', function () {
    assert.equal(0, [1].chop(1));
    assert.equal(0, [1, 3, 5].chop(1));
    assert.equal(1, [1, 3, 5].chop(3));
    assert.equal(2, [1, 3, 5].chop(5));
    assert.equal(0, [1, 3, 5, 7].chop(1));
    assert.equal(1, [1, 3, 5, 7].chop(3));
    assert.equal(2, [1, 3, 5, 7].chop(5));
    assert.equal(3, [1, 3, 5, 7].chop(7));
  });
});
