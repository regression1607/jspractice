// FInd second largest number in an array 

// Solution 1 : 
// function largestnumber(arr){
//   let largest = -Infinity;
//   for(let i =0 ; i<arr.length;i++){
//     if(arr[i]>largest){
//       largest = arr[i];
//     }
//   }
//   return largest;
// }

// function secondlargestnumber(arr){
//   let secondlargestnumber = -Infinity;
//   let largest = largestnumber(arr);
//   console.log("largest : ",largest);
//   for(let i=0;i<arr.length;i++){
//     console.log("loop iteration : ",i,"arr[i]",arr[i]);
//     if(secondlargestnumber<arr[i] && arr[i]<largest){
//       secondlargestnumber = arr[i];
//       console.log(secondlargestnumber);
//     }
//   }
//   return secondlargestnumber;
// }


// let arr =[1,2,3,4,0,9,1,8,12];
// let result = secondlargestnumber(arr);
// console.log("result :",result);


//solution 2 
function secondlargestnumber(arr){
  if(arr.length < 2){
    return null;
  }
  let firstlargest = -Infinity;
  let secondlargest = -Infinity;
  for(let i =0;i<arr.length;i++){
    if(firstlargest<arr[i]){
      secondlargest = firstlargest;
      firstlargest = arr[i];
    } else if (arr[i]>secondlargest){
      secondlargest = arr[i];
    }
  }
  return secondlargest;
}
let arr =[1,2,3,4,0,9,1,8,12,2,14,13];
let result = secondlargestnumber(arr);
console.log("result :",result);
