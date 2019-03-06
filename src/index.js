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
  var endOFzero = 0;
     
  var arr = PrimeFactorsArray;
  var result = {};
  arr.forEach((a) => {
      result[a] = result[a] + 1 || 1;
  });
  for (var key in result) {
      // console.log(key);
    // console.log(result[key]);
        do{
    number = Math.floor(number / key);
    // console.log(number);
      sum = Math.floor((sum + number));
      // console.log(sum);
   } while (number >= key);
     sum = sum / result[key];
    endOFzero = sum;
  }

  return endOFzero;
}