/* 
#1 Problem: We work for a company building a smart smart home. Our most recent task is this: 
        "Given an array of temperatures of one day, Calculate the temperature amplitude. Keep in mind that sometimes
        there might be a sensor errror"
*/

//1. find min
//2. find max
//3. calculate amplitude

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const getTempAmplitude = (tempArr) => {
  let min = tempArr[0];
  let max = tempArr[0];

  for (let i = 0; i < tempArr.length; i++) {
    let currTemp = tempArr[i];
    if (isNaN(currTemp)) continue;

    if (currTemp < min) {
      min = currTemp;
    }

    if (currTemp > max) {
      max = currTemp;
    }
  }

  return max - min;
};

console.log(getTempAmplitude(temperatures));

// #2 Problem: Should accept 2 arrays to get amplitude

const temperatures1 = [7, -4, 12, "error", 2, 18, 21, 16, 11, 5, -1, 9];
const temperatures2 = [-3, 8, 14, 6, 19, "error", 22, 17, 10, 4, -5, 13];

const getTempAmplitudeNew = (tempArr1, tempArr2) => {
  const temperatures = [...tempArr1, ...tempArr2];
  let min = temperatures[0];
  let max = temperatures[0];

  for (let i = 0; i < temperatures.length; i++) {
    let currTemp = temperatures[i];
  }
  console.log(temperatures);
};

console.log(getTempAmplitudeNew(temperatures1, temperatures2));

//3 Temperature Amplitude Refactored

const getAmplitude = (temp1, temp2) => {
  const temps = [...temp1, ...temp2];

  let min = Infinity;
  let max = -Infinity;

  //   for (let i = 0; i < temps.length; i++) {
  //     let currentTemp = temps[i];
  //     if (isNaN(currentTemp)) continue;

  //     if (currentTemp < min) min = currentTemp;
  //     if (currentTemp > max) max = currentTemp;
  //   }
  //   console.log(`Min: ${min} Max: ${max}`);
  //   return max - min;
  // };

  for (const currentTemp of temps) {
    if (isNaN(currentTemp)) continue;

    if (currentTemp < min) min = currentTemp;
    if (currentTemp > max) max = currentTemp;
  }

  console.log(`Min: ${min} Max: ${max}`);
  return max - min;
};

//Tests
// 1
const temp1 = ["error", 9, 8, 2, 3, "error"];
const temp2 = ["error", -2, "error", 10, 6, 4];
// 2
const temp3 = [9, 5, 3, 2, 12, "error"];
const temp4 = [2, 15, 0, 9, "error", 6];
console.log(getAmplitude(temp1, temp2));
console.log(getAmplitude(temp3, temp4));
