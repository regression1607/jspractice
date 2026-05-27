/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let j = s.length-1;
    let temp =0;
    for(let i=0;i<s.length/2;i++){
        temp=s[j];
        s[j]=s[i];
        s[i]=temp;
        j--;
    }
    return s;
};
