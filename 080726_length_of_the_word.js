/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let last = s.length-1;
    while(last>0){
        if(s[last]==' '){
            --last;
        }else{
            break;
        }
    }
    let count =0;
    for(let i=last;i>=0;--i){
        if(s[i]!=' '){
            count++;
        }else{
            break;
        }
    }
    return count;
};
