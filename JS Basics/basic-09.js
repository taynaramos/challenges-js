// Write a function that takes a number as argument
// The function should split the number into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting

function myFunction(num) {
    const strNum = num.toString();
    const arrayNum = [];
    for (let item of strNum) {
        arrayNum.push(Number(item));
    }
    return arrayNum;
}

myFunction(10)

// suggested solution 

function myFunction2(num) {
    const string = num + '';
    const strings = string.split('');
    return strings.map(digit => Number(digit))
}