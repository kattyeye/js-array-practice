// # 1
// Testing 1-2-3
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

var number=function(array){
    return array.map((line, index) => `${index + 1}: ${line}`);
  }


// # 2
// Filling an array (part 1)
// https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript

const arr = N => {
    const arr = [];
      
      for(let i = 0; i < N; i += 1){
        arr.push(i);
      }
      return arr;
    }


// # 3
// Drone Fly-By
// https://www.codewars.com/kata/58356a94f8358058f30004b5/train/javascript
//don't worry about character limit

function flyBy(lamps, drone){
    if (drone.length > lamps.length){
      return 'o'.repeat(lamps.length);
    }else {
      return 'o'.repeat(drone.length) + 'x'.repeat(lamps.length - drone.length);
    }
    }

// # 4
// Get the mean of an array
// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript




// #5
// THE SOUL OF WIT: REVERSE AN ARRAY
// https://www.codewars.com/kata/59b81886460387d8fc000043