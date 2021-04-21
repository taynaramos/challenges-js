// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the words 'Javascript', 'Countryside', and 'Downtown'!
// You might want to apply basic JS string methods such as replace(), split(), slice() etc

function myFunction(wordOne, wordTwo) {

    function filterWord(word) {
        let newWord = ""
        if (word.includes("%")) {
            for (let letter of word) {
                if (letter !== "%") {
                    newWord = newWord + letter
                }
            }
            return newWord
        }
        return word
    }

    const first = filterWord(wordOne)
    const second = filterWord(wordTwo)
    let newSecond = ""
    for (let i = second.length - 1; i >= 0; i--) {
        newSecond = newSecond + second[i]
    }

    let result = first + newSecond
    result = result.charAt(0).toUpperCase() + result.slice(1)

    return result
}

myFunction('java', 'tpi%rcs')

// suggested solution 

function myFunction2(a, b) {
    const first = a.split('').map(part => part.replace('%', '')).join('');
    const second = b.split('').reverse().map(part => part.replace('%', '')).join('');
    return first.charAt(0).toUpperCase() + first.slice(1) + second
}