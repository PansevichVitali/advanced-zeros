module.exports = function getZerosCount(number, base) {
  let prime = getPrime(base);
  let powerPrime = 0;
  let qttZeros = 0;
  let cpyBase = base;
  let cpyBaseFinal = base;
  while(cpyBase%prime === 0) {
    cpyBase /= prime;
    powerPrime++;
  }
  if(Math.pow(prime,2) < cpyBase) {
    cpyBase = base/prime;
    prime = getPrime(cpyBase);
    powerPrime = 0;
    while(cpyBaseFinal%prime === 0) {
      cpyBaseFinal /= prime;
      powerPrime++;
    }
  }
  for(let i = 1; number > Math.pow(prime, i); i++) {
    qttZeros += Math.floor(number/Math.pow(prime, i));
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
  return Math.floor(qttZeros/powerPrime);
}