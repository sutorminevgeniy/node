const assert = require('assert');

describe('Array#indexOf()', () => {
  it('должен вернуть -1 если элемента нет в массиве', () => {
    assert.equal(-1, [1, 2, 3].indexOf(4));
  });
});