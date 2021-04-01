// Write a function that takes a number as argument
// If the number is a whole number (has no decimal place), return true
// Otherwise, return false

function myFunction(num) {
    const trunc = Math.trunc(num) === num
     return trunc
  }
  
  myFunction(4)
  myFunction(1.123)

  // suggested solution

  function myFunction2(input) {
    return input - Math.floor(input) === 0
  }