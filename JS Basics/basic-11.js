// Write a function that takes an object with the properties number and percentage as argument
// Return the given percentage of the number

function myFunction(obj) {

    return (obj.number * obj.percentage) / 100
}

myFunction({ number: 100, percentage: 50 })

// suggested solution 

function myFunction2({ number, percentage }) {
    return number / 100 * percentage
}