// # 1
// Testing 1-2-3
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

var number = function (array) {
  return array.map((line, index) => `${index + 1}: ${line}`);
};

// # 2
// Filling an array (part 1)
// https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript

const arr = (N) => {
  const arr = [];

  for (let i = 0; i < N; i += 1) {
    arr.push(i);
  }
  return arr;
};

// # 3
// Drone Fly-By
// https://www.codewars.com/kata/58356a94f8358058f30004b5/train/javascript

function flyBy(lamps, drone) {
  if (drone.length > lamps.length) {
    return "o".repeat(lamps.length);
  } else {
    return "o".repeat(drone.length) + "x".repeat(lamps.length - drone.length);
  }
}

// # 4
// Get the mean of an array
// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

function getAverage(marks) {
  let total = 0;

  for (i = 0; i < marks.length; i++) {
    total = total + marks[i];
  }
  return Math.floor(total / marks.length);
}

// #5
// THE SOUL OF WIT: REVERSE AN ARRAY
// https://www.codewars.com/kata/59b81886460387d8fc000043
//don't worry about character limit

function reverseArrayInPlace(arr) {
    for (var i = 0; i <= Math.floor((arr.length - 1) / 2); i++) {
        let el = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = el;
    }
    return arr;
  }