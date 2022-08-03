import * as algorithms from '../algorithms/index.js';
import * as dspatterns from '../design-patterns/index.js';

// eslint-disable-next-line no-unused-vars
function factory(target = '', callback = (_target) => {}) {
  const splittedTarget = target.split(':');
  const category = splittedTarget[0];
  const name = splittedTarget[1];

  switch (category) {
    case 'algorithms':
      return callback(algorithms[name]);

    case 'ds':
      return callback(dspatterns[name]);

    default:
      throw new Error('Your category entered does not exists.');
  }
}

export default factory;
