module.exports = function getZerosCount(number, base) {
  // your implementation
  let index = 1;
  let zerocount = 0;
  let round;

  while (number >= index) {
    index *= 5;
    //console.log(index);
    round = Math.floor(number/index);
    //console.log(round);
    zerocount += round;
    }
  return zerocount;
}