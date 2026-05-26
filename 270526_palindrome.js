// Palindrome 
// note 
// last digit => n%10
// remove last =>n/10

function palindrome(n){
  let rev =0;
  while(n>0){
    let rem = n%10
    rev=(10*rev)+rem;
    n=Math.floor(n/10);
  }
  return rev;
}
let n = 121;
if(palindrome(n)==n){
  console.log("it is palindrome");
} else {
  console.log(" it is not a plaindrome");
}


