/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let s = [];
  let current = head;
  for (;;) {
    s.push(current.val);
    if (current.next) current = current.next;
    else break;
  }
  for (let i = 0, j = s.length - 1; i < s.length / 2; i++, j--) {
    if (s[i] !== s[j]) {
      return false;
    }
  }
  return true;
};
