const min = 1;
const max = 10;

var date = new Date();
date = date.toLocaleDateString('en-GB').replaceAll('/', '');
console.log(date);

var myrng = new Math.seedrandom(date);

function getRandomNumberInRange(min, max) {
  return Math.floor(myrng() * (max - min + 1)) + min;
}

const randomNum = getRandomNumberInRange(1, 10);
console.log(randomNum);
