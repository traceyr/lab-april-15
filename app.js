function sum(a, b) {
  var y = a + b;
  var prob1 = document.getElementById('prob1');
  prob1.textContent = '"The sum of ' + a + ' and ' + b + ' is ' + y + '."';
  return y;
}
//sweet
function multiply(a, b) {
  var z = a * b;
  var prob2 = document.getElementById('prob2');
  prob2.textContent = '"The product of ' + a + ' and ' + b + ' is ' + z + '."';
  return z;
}
//great job
function sumAndMultiply(d, e, f) {
  var newAry = [];
  var z = sum(sum(d, e), f);
  var prob3_1 = document.getElementById('prob3_1');
  prob3_1.textContent = '"' + d + ' and ' + e + ' and ' + f + ' sum to ' + z + '."';
  newAry.push(z);

  var y = multiply(multiply(d, e),f);
  newAry.push(y);
  var prob3_2 = document.getElementById('prob3_2');
  prob3_2.textContent = '"The numbers ' + d + ' and ' + e + ' and ' + f + ' have a product of ' + y + '."';
}
// i like the way you pushed your output of the function into the array.

function sumArray(ary) {
  var result = 0;
  for(var i = 0; i < ary.length; i++) {
    result += ary[i];
  }
  console.table(ary);
  var prob4 = document.getElementById('prob4');
  prob4.textContent = '"' + ary + ' was passed as an array of numbers, and ' + result + ' is their sum."';
  return result;
}
//very clean
function multiplyArray(arry) {
  var total = 1;
  for(var i = 0; i < arry.length; i++) {
    total *= arry[i];
  }
  console.table(arry);
  var prob5 = document.getElementById('prob5');
  prob5.textContent = '"The numbers ' + arry + ' have a product of ' + total + '."';
}
//code is easy to read
//great job
