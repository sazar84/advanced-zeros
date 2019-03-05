module.exports = function getZerosCount(number, base) {
  // your implementation

  // factorial zerocount-----------
  let index = 1;
  let zerocount = 0;
  let round;

  while (number >= index) {
    index *= 5;
    //console.log(index);
    round = Math.floor(number / index);
    //console.log(round);
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
  var count;
  var sum = 0;

  do {
    PrimeFactorsArray.forEach((ArrayIndex, count) => {
    number /= ArrayIndex;
      // console.log(number);
      count++;
      // console.log(count);
      sum += number;
    });
} while (number >= ArrayIndex);
// ---end--------
var endOFzero;
endOFzero = sum / count;

  return endOFzero;
}