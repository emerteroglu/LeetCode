/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let sol = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      sol.push("FizzBuzz");
    } else if (i % 3 === 0) {
      sol.push("Fizz");
    } else if (i % 5 === 0) {
      sol.push("Buzz");
    } else {
      sol.push(i.toString());
    }
  }
  return sol;
};
