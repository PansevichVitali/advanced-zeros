module.exports = function getZerosCount(number, base) {
  let prime = getPrime();
  let powerPrime = 0;
  let NumZero = 0;
  for(let i = 1; number >= Math.pow(prime, i); i++)  {
    NumZero += Math.floor(number/Math.pow(prime, i));
  }
  while(base%prime === 0) {
    base /= prime;
    powerPrime++;
  }

  function getPrime() {
    for(let i = base-1; i >= 2; i--) {
      if (base/i === Math.floor(base/i)) {
        if(i == 2 && base/i === Math.floor(base/i)) 
          return 2;
        for(let j = i-1; j > 1; j--) {
          if(i/j === Math.floor(i/j))
            break;
          if(i/j !== Math.floor(i/j) && j === 2 && i !== 2)
            return i;
        }
      } 
    }
    return base;
  }
  return Math.floor(NumZero/powerPrime);
}