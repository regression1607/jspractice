/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let con = 0;
  let max =0;
    for(let i =0;i<nums.length;i++){
      if(nums[i]==1){
        con++;
        if(max<con){
         max=con; 
        }
      }else{
        con =0;
      }
    }
    return max;
};
