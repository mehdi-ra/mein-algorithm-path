import factory from './factory/index.js';
import constants from './constants/index.js';
import { runWithTimer } from './util/run-with-timer.js';

const fibSeqNum = constants.FIBONACCI_SEQ_NUM;

factory('algorithms:fibonacci', ((fibonacci) => {
  runWithTimer('Traditional fibonacci', fibonacci, [fibSeqNum]);
}));

factory('algorithms:fibMemo', (fibMemo) => {
  runWithTimer('Memorized fibonacci', fibMemo, [fibSeqNum]);
});
