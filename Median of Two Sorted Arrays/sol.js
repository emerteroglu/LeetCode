/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let cnt = 0;
  let sol = [];
  for (let i = 0, j = 0; ; ) {
    if (nums1[i] != undefined && nums2[j] != undefined && nums1[i] <= nums2[j]) {
      cnt++;
      sol.push(nums1[i]);
      i++;
    } else if (nums1[i] != undefined && nums2[j] != undefined && nums1[i] >= nums2[j]) {
      cnt++;
      sol.push(nums2[j]);
      j++;
    } else if (nums1[i] != undefined) {
      cnt++;
      sol.push(nums1[i]);
      i++;
    } else if (nums2[j] != undefined) {
      cnt++;
      sol.push(nums2[j]);
      j++;
    }

    if (cnt - 0.5 === (nums1.length + nums2.length) / 2) {
      return sol[sol.length - 1];
    } else if (cnt - 1 === (nums1.length + nums2.length) / 2) {
      return (sol[sol.length - 1] + sol[sol.length - 2]) / 2;
    }
  }
};
