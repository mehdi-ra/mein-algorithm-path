import factory from './factory/index.js';
import constants from './constants/index.js';
import { runWithTimer } from './util/run-with-timer.js';

// Change the constant value to see difference in calculation time.
const fibSeqNum = constants.FIBONACCI_SEQ_NUM;

/**
 * Time complexity is O(2n) - 2n = two to power of n.
 * Space complexity is O(n).
 */
factory('algorithms:fibonacci', ((fibonacci) => {
  runWithTimer('Traditional fibonacci', fibonacci, [fibSeqNum]);
}));

/**
 * Time complexity is O(n).
 * Space complexity is O(n).
 */
factory('algorithms:fibMemo', (fibMemo) => {
  runWithTimer('Memorized fibonacci', fibMemo, [fibSeqNum]);
});
