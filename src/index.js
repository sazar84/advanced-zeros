module.exports = function getZerosCount(number, base) {
  // your implementation

  // factorial zerocount-----------
  let index = 1;
  let zerocount = 0;
  let round;

  while (number >= index) {
    index *= 5;
    console.log(index);
    round = Math.floor(number / index);
    console.log(round);
    zerocount += round;
  }

  // base ---> prime factors array-----------
  var ArrayIndex = 0;
  var PrimeFactor = 2;
  var PrimeFactorsArray = new Array();

  if (base == 1 || base == 2) {
    PrimeFactorsArray[ArrayIndex] = base;
  } else {
    do {
      if (base % PrimeFactor == 0) {
        PrimeFactorsArray[ArrayIndex] = PrimeFactor;
        ArrayIndex++;
        base /= PrimeFactor;
      } else {
        PrimeFactor++;
      }
    }
    while (PrimeFactor < base);
    PrimeFactorsArray[ArrayIndex] = base;
  }

  // compare------------
  var sum = 0;
  var all = [];
  var min;
  var arr = PrimeFactorsArray;
  var result = {};
  arr.forEach((a) => {
      result[a] = result[a] + 1 || 1;
  });

for (var key in result) {
  // console.log(key)
  var number1 = number;
    do{
      number1 = Math.floor(number1 / key);
        // console.log(number1)
      sum = Math.floor((sum + number1));
      // console.log(number)
   } while (number1 >= key);
        // console.log(result[key])
    sum = Math.floor(sum / result[key]);
  
    // console.log(sum);
    all.push(sum);
    sum = 0;
    min = Math.min(...all);
    // console.log(min)
  }
  return min;
}