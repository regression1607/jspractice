// sum of arrray using recursion

/**
 * @param {number[]} nums
 * @return {number}
 */
let arr = [5,4,3,2,0,3];
function sum(n){
  if(n==0){
    return arr[n];
  }
  return arr[n]+sum(n-1);
}
console.log("sum",sum(arr.length-1));
