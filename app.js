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
  var z = sum(d, e) + f;
  console.log('"' + d + ' and ' + e + ' and ' + f + ' sum to ' + z + '."');
  var y = multiply(d, e) * f;
  console.log('"The numbers ' + d + ' and ' + e + ' and ' + f + ' have a product of ' + y + '."');
}
