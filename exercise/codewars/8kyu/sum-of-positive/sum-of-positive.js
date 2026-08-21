/*================================8KYU===================================
Task : Sum of positive
You get an array of numbers, return the sum of all of the positives ones.

Example
[1, -4, 7, 12] => 1+7+12=20 1+7+12=20
Note
If there is nothing to sum, the sum is default to 0.

//=====================================================================*/

function positiveSum(arr) {
  let newArr = [];
  for (const item of arr) {
    if (item > 0) {
      newArr.push(item);
    }
  }
  return newArr.reduce((total, num) => total + num, 0);
}

console.log(positiveSum([1, -4, 7, 12]));
console.log(positiveSum([-78, -11, -61, 53, 47, -10, 66]));
