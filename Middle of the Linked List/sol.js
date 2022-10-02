/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let current = head;
  let len = 0;

  for (;;) {
    len++;
    if (current.next) current = current.next;
    else break;
  }
  let mid;
  if (len % 2 === 0) {
    mid = len / 2;
  } else {
    mid = (len - 1) / 2;
  }
  current = head;
  for (let i = 0; i < mid; i++) {
    current = current.next;
  }
  return current;
};
