/*================================8KYU===================================
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string

//=====================================================================*/

function fakeBin(x) {
  if (typeof x !== "string") {
    return "Invalid Value, String Data type is not entered";
  }

  let numberDigits = "";

  for (let i = 0; i < x.length; i++) {
    // this if statement only accepts strings that are around numerical value of zero(0) to nine(9)
    // it based its comparison on the unicode value behind the string characters
    // and the unicode behind this numerical string are actually formed in order and that's why this is valid
    // for only accepting numerical value of zero(0) to nine(9)
    if (x[i] < "0" || x[i] > "9") {
      return "non-numerical values are invalid";
    }
    if (Number(x[i]) < 5) {
      numberDigits += 0;
    } else {
      numberDigits += 1;
    }
  }
  return numberDigits;
}

console.log(fakeBin("45395"));
console.log(fakeBin("10293"));
console.log(fakeBin("abcde"));
console.log(fakeBin("123_4"));
console.log(fakeBin(321312));
console.log(fakeBin(true));
