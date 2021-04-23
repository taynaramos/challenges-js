// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order

function myFunction(array) {

    return array.sort((a,b) => a<b ? 1 : -1)
}

 myFunction([1,3,2])

// suggested solution

 function myFunction2( input ) {
    return input.sort((a, b) => b - a)
}