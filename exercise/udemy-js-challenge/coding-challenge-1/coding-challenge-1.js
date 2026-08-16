const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];

const printForecast = (arr) => {
  let displayForecast = "...";
  //   for (let i = 0; i < arr.length; i++) {
  //     displayForecast += `...${arr[i]}c in ${i + 1} days `;
  //   }
  let days = 0;
  for (const temp of arr) {
    displayForecast += `${temp}c in ${++days} days... `;
  }
  return displayForecast.trim();
};

console.log(printForecast(testData1));
console.log(printForecast(testData2));

// Goal output:
// arr will display -> "...17c in 1 days ... 21c in 2 days ... 23c in 3 days"
