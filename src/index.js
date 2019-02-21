module.exports = function getZerosCount(number, base) {
  let prime = getPrime();
  let powerPrime = 1;
  let NumZero = 0;
  if(Math.sqrt(base) === Math.floor(Math.sqrt(base)))
    powerPrime++;
  for(let i = 1; number > Math.pow(prime, i);i++){
    NumZero += Math.floor(number/Math.pow(prime, i));
  }

  function getPrime() {
    for(let i = Math.floor(base/2); i > 2; i--) {
     if (base/i === Math.floor(base/i)) {
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
  return Math.floor(NumZero/powerPrime);
}