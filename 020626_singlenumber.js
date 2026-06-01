/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let hash ={}
    for(let i=0;i<nums.length;i++){
        if(hash[nums[i]]==undefined){
            hash[nums[i]]=1;
        }else{
            hash[nums[i]]++;
        }
    }
    for(let key in hash){
        if(hash[key]===1){
            return Number(key);
        }
    }
};
