// Write a function that takes an array of strings as argument
// It should return the array with its values sorted alphabetically

function myFunction(array) {
    return array.sort((a, b) => a < b ? -1 : 1)
}

myFunction(['b', 'c', 'd', 'a'])

// suggested solution

function myFunction2( input ) {
    return input.sort()
}