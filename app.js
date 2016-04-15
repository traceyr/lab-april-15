function sum(a, b) {
  var y = a + b;
  // console.log('"The sum of ' + a + ' and ' + b + ' is ' + y + '."');
  return y;
}

function multiply(a, b) {
  var z = a * b;
  // console.log('"The product of ' + a + ' and ' + b + ' is ' + z + '."');
  return z;
}

function sumAndMultiply(d, e, f) {
  var newAry = [];
  var z = sum(sum(d, e), f);
  console.log('"' + d + ' and ' + e + ' and ' + f + ' sum to ' + z + '."');
  newAry.push(z);
  var y = multiply(multiply(d, e),f);
  newAry.push(y);
  console.log(emptyArray);
  console.log('"The numbers ' + d + ' and ' + e + ' and ' + f + ' have a product of ' + y + '."');
}

function sumArray(ary) {
  var result = 0;
  for(var i = 0; i < ary.length; i++) {
    result += ary[i];
  }
  console.log('"' + ary + ' was passed as an array of numbers, and ' + result + ' is their sum."');
}

function multiplyArray(arry) {
  var total = 1;
  for(var i = 0; i < arry.length; i++) {
    total *= arry[i];
  }
  console.log('"The numbers ' + arry + ' have a product of ' + total + '."');
}
