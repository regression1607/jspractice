//merge sorted array
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 
let nums1 = [1,2,3,0,0,0];

let m = 3;
let nums2 = [2,5,6];
let n = 3;

//nums1copy=[1,2,3(p1)]

var merge = function(nums1, m, nums2, n) {
   let nums1copy=nums1.slice(0,m); 
   let p1=0
   let p2=0;
   for(let i=0;i<m+n;i++){
     if((p2>=n) || (nums1copy[p1]<nums2[p2]) && p1<m){
       nums1[i]=nums1copy[p1];
       p1++;
     }else{
       nums1[i]=nums2[p2];
       p2++;
     }
   }
   return nums1;
};

console.log("nums1:",merge(nums1,m,nums2,n));
