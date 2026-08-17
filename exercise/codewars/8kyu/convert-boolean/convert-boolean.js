/*================================8KYU===================================
Convert boolean values to strings 'Yes' or 'No'.
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
//=====================================================================*/

function boolToWord(bool) {
  if (typeof bool !== "boolean") return "error";
  return bool === true ? "Yes" : "No";
}

console.log(boolToWord(true));
console.log(boolToWord(false));
console.log(boolToWord(1));
console.log(boolToWord("true"));
console.log(boolToWord("test"));
console.log(boolToWord(null));
console.log(boolToWord());
