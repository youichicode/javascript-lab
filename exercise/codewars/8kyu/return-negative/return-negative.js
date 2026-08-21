/*================================8KYU===================================
Return Negative

In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
//=====================================================================*/

/*


*/
// solution 1
function makeNegative(num) {
  if (num < 0) {
    return num;
  } else if (num === 0) {
    return 0;
  } else {
    return num - num * 2;
  }
}
console.log(makeNegative(5));
console.log(makeNegative(-9));
console.log(makeNegative(0));

// solution 2

function newMakeNegative(num) {
  return -Math.abs(num);
}

// function newMakeNegative(num) {
//   return num < 0 ? num : -num;
// }

console.log(newMakeNegative(5));
console.log(newMakeNegative(-9));
console.log(newMakeNegative(0.12));
console.log(newMakeNegative(0));
// multiple by 2 a variable and then subtract the result in the variable

console.log(-0 === 0);
