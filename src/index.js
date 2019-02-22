module.exports = function getZerosCount(number, base) {
  const prime = getPrime(base);
  let powerPrime = 0;
  let qtZeros = 0;
  let cpyBase = base;
  for(let i = 1; number >= Math.pow(prime, i); i++)  {
    qtZeros += Math.floor(number/Math.pow(prime, i));
  }
  while(cpyBase%prime === 0) {
    cpyBase /= prime;
    powerPrime++;
  }

  function getPrime(base) {
    for(let i = base-1; i >= 2; i--) {
      if (base/i === Math.floor(base/i)) {
        if(i === 2 && base/i === Math.floor(base/i)) 
          return 2;
        for(let j = i-1; j > 1; j--) {
          if(i/j === Math.floor(i/j))
            break;
          if(i/j !== Math.floor(i/j) && j === 2)
            return i;
        }
      } 
    }
    return base;
  }
  return Math.floor(qtZeros/powerPrime);
}