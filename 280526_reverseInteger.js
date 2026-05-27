// reverse integer 
//Math.abs = chnage negative to positive
//Math.pow(2,31);
// ternary operator (x>0)?true:false;

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let xcopy =x;
    let rev =0;
    x=Math.abs(x);
    while(x>0){
        rev = 10*rev+x%10;
        x=Math.floor(x/10);
    }
    let limit = 2**31;
    if(-limit > rev || limit < rev){
        return 0;
    }
    return xcopy<0 ?-rev:rev;
};
