// Write a function that takes a two strings as arguments
// Return the number of times the first string occurs in the second string

function myFunction(str, phrase) {

    let occurency = 0

    for (let word of phrase.toLowerCase()) {
        if (word == str) {
            occurency++
        }
    }

    return occurency
}

myFunction('m', 'How many times does the character occur in this sentence?')
myFunction('z', 'How many times does the character occur in this sentence?')
myFunction('?', 'How many times does the character occur in this sentence?')
myFunction('h', 'How many times does the character occur in this sentence?')

// suggested solution 

function myFunction2(char, string) {
    return string.toLowerCase().split(char).length - 1
}