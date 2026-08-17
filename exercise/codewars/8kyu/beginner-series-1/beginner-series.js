/*================================8KYU===================================
Beginner Series #1 School Paperwork
Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

Example:
n= 5, m=5: 25
n=-5, m=5:  0

//=====================================================================*/

// 1. n * m? based on example
// 2. if any of variable is less than 0, return 0

function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0;
  } else {
    return n * m;
  }
}
// or
// function paperwork(n, m) {
//   return n < 0 || m < 0 ? 0 : n * m;
// }
