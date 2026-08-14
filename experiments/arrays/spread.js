// ... Spread Syntax
// Note: Spread expands/unpacks the elements of an iterable into individual values.

const grades = [75, 89, 93, 92, 97, 100, 86];
console.log(...grades); // 75, 89, 93, 92, 97, 100, 86

// Useful when a function expects individual arguments,
// such as Math.min() and Math.max().

console.log(Math.min(...grades)); // 75

// Same as:
console.log(Math.min(75, 89, 93, 92, 97, 100, 86)); // 75

//spread creates a copy of the elements and placed inside of a new variable
//in this case, if compared then they are not equal
const testArr = [75, 89, 93, 92, 97, 100, 86];

const gradesCopy = [...grades];

console.log(gradesCopy == grades);
console.log(gradesCopy == testArr);

// ... Spread Syntax used with merging multiple arrays as 1

const box1 = ["coffee bean", "coffee maker", "spoon"];
const box2 = ["sugar", "cream", "mug"];
const box3 = ["water", "heater"];

const box4 = [...box1, ...box2, ...box3];

console.log(box4);
