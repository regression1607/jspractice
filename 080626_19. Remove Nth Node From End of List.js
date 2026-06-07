/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let size=0;
     let sentinalnode=new ListNode();
    sentinalnode.next=head;
    while(head){
        head=head.next;
        size++;
    }
    let prev=sentinalnode;
    let elementRemove=size-n;
    for(let i=0;i<elementRemove;i++){
        prev=prev.next;
    } 
    prev.next=prev.next.next;
    return sentinalnode.next;
};
