//best time to buy and sell stock 

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min = prices[0] ;//7,1
  let profit =0;//4,
    for(let i =0;i<prices.length;i++){
      if(prices[i]<min){
        min=prices[i];
        console.log("min:",min);
      }
      if(prices[i]-min>profit){
        profit=prices[i]-min;
        console.log("Profit :",profit);
      }
    }
    return profit;
};

let arr = [7,1,5,3,6,4];
console.log("Result :",maxProfit(arr));
