module.exports = function getZerosCount(number, base) {
  // your implementation
  let index = 1;
  let zerocount = 0;
  let round;

  while (number >= index) {
    index *= 5;
    round = Math.round(number/index);
    zerocount += round;
      }
  return zerocount;
}