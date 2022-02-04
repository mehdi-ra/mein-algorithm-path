import simpleStore from './simple-store.js';

describe('Simple store testing.', () => {
  test('Store and should be stored', () => {
    simpleStore.store(3, 4);
    expect(simpleStore.check(3))
      .toBe(true);
  });
});
