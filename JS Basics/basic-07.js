
// Write a function that takes a number as argument
// Round the number to the 2nd digit after the comma
// Return the rounded number

function myFunction(num) {

  return num.toFixed(2) // it didn't work
}

//or 

function myFunction2(num) {
  const rounded = Math.round(num * 100) / 100;
  return rounded;
}

myFunction(2.12397)
myFunction(3.136)
myFunction(1.12397)
myFunction(26.1379)

// suggested solution 
function myFunction3(num) {
  return Number(num.toFixed(2));
}