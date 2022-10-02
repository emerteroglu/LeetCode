/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  let weak = [];
  for (let j = 0; j < mat[0].length; j++) {
    for (let i = 0; i < mat.length; i++) {
      if (mat[i][j] === 0) {
        if (!weak.includes(i)) weak.push(i);
        if (weak.length === k) return weak;
      }
    }
  }
  for (let j = mat[0].length - 1; j === mat[0].length - 1; j--) {
    for (let i = 0; i < mat.length; i++) {
      if (mat[i][j] === 1) {
        if (!weak.includes(i)) weak.push(i);
        if (weak.length === k) return weak;
      }
    }
  }
  return [0];
};
