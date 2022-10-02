/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let steps = 0;
  for (;;) {
    if (num === 0) {
      return steps;
    }
    if (num % 2 === 0) {
      num /= 2;
      steps++;
    } else {
      num -= 1;
      steps++;
    }
  }
};
