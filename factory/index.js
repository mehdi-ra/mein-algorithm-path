import * as algorithms from '../algorithms/index.js';

// eslint-disable-next-line no-unused-vars
function factory(target = '', callback = (_target) => { }) {
  const splittedTarget = target.split(':');
  const category = splittedTarget[0];
  const name = splittedTarget[1];

  switch (category) {
    case 'algorithms':
      return callback(algorithms[name]);

    default:
      throw new Error('Your category entered does not exists.');
  }
}

export default factory;
