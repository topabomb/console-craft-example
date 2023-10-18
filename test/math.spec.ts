import { it, describe } from 'mocha';
import { expect } from 'chai';
import { add } from '../src/math';
describe('Math', () => {
  it('add()', () => {
    expect(add(3, 5)).equal(8);
  });
});
