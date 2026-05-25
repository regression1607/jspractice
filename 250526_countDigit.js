// write a function that returns the count of digits in a number 

function countDigit(n){
  
  let count = 0;
  while(n>0){
    n=Math.floor(n/10);
    count++;
  }
 return count;
}


let n = 259;
let digits = countDigit(n);
console.log(digits);
