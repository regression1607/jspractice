//selection sort 
let arr=[4,1,45,14,41,24,5,0];
let n=arr.length;
for(let i =0;i<n-1;i++){
  let min = i;
  for(let j =i+1;j<n;j++){
    if(arr[j]<arr[min]){
      min=j;
    }
  }
  let temp = arr[i];
  arr[i]=arr[min];
  arr[min]=temp;
}

console.log(arr);
