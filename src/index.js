module.exports = function getZerosCount(number, base) {
  
function countSimpleNumbers(base) {
  var arr = []; 
  var delitel = 2; 
  while (base > 1) { 
    if (base % delitel == 0) { 
      arr.push(delitel); 
      base = base / delitel; 
    } 
    else { 
      delitel++; 
    } 
  } 
  if (base != 1)  arr.push(base); 
  return arr;
}
function countZerosofNumber(number, nmax, imax) {
  var result = 0;
  while (number > 1) { 
    number = Math.floor(number / nmax); 
    result = result + number; 
  } 
  return Math.floor(result/imax);
}

  var arr = countSimpleNumbers(base);
  var num = 0; 
  var nmax= 0, imax = 0;
  var arr2 = [];
  for (i = 0; i < arr.length; i++) {
    nmax = 0; 
    imax = 0;
    num = arr[i];
    while (arr[i] == num) {
     imax++; 
     nmax = arr[i];
     i++;
    }
  i--;
  arr2.push(countZerosofNumber(number,nmax,imax));  
  } 

  var minZero = arr2[0];
  for (i = 1; i < arr2.length; i++){
    if (arr2[i] < minZero) minZero = arr2[i];
  }
  return Math.floor(minZero); 
}