module.exports = function getZerosCount(number, base) {
  // your implementation
  let index = 5;
  let zerocount = 0;

  while (number >= 0) {
    number /= 5;
    zerocount += number;
  }
  return zerocount;
}