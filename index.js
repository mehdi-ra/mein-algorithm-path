import factory from './factory/index.js';

factory('algorithm:fibonacci', ((fibonacci) => {
  console.log(fibonacci(10));
}));
