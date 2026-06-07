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
var isPalindrome = function(head) {
   // find the mid of the linked list 
   let slow = head;
   let fast = head;
   while(fast && fast.next){
        slow=slow.next;
        fast=fast.next.next;
   }
   // reverse the second half of the linked list 
   let prev = null;
   let curr = slow;
    while(curr){
        let temp = curr.next;
        curr.next=prev;
        prev=curr;
        curr=temp;
    }
   // conpair the firsthalf and second half of the linked list 
   let firstlist=head;
   let secondlist=prev;
   while(secondlist){
    if(firstlist.val != secondlist.val){
        return false;
    } 
     firstlist=firstlist.next;
     secondlist=secondlist.next;
   }
    return true;
};
