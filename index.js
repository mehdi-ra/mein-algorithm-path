import factory from './factory/index.js';
import constants from './constants/index.js';

const fibSeqNum = constants.FIBONACCI_SEQ_NUM;

factory('algorithms:fibonacci', ((fibonacci) => {
  console.time('oldFib');
  console.log(fibonacci(fibSeqNum));
  console.timeEnd('oldFib');
}));

factory('algorithms:fibMemo', (fibMemo) => {
  console.time('fibMemo');
  fibMemo(fibSeqNum);
  console.timeEnd('fibMemo');
});
