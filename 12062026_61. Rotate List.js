/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head || !head.next) return head;
    let s=head;
    let f=head;

    let l=1;
    let curr=head;
    while(curr && curr.next){
        curr=curr.next;
        l++;
    }
    k = k%l; //3
    for(let i =0;i<k;i++){
        f=f.next;
    }
    while(f.next){
        s=s.next;
        f=f.next;
    }
    f.next=head;
    let newhead=s.next;
    s.next=null;
    return newhead;
};
