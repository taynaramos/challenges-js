// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

function myFunction(array) {

    let sum = 0

    for (let num of array) {
        sum = sum + num
    }

    return sum / array.length
}

myFunction([10, 100, 40])

// suggested solution

function myFunction2(input) {
    return input.reduce((acc, cur) => acc + cur, 0) / input.length
}