// Write a function that takes an array of strings as argument
// It should return the longest string

function myFunction(vetor) {
   let max = 0;
   let maior;
   for(let palavra of vetor) {
      if(palavra.length > max) {
         max = palavra.length;
         maior = palavra
      }
   }
   return maior;
}

myFunction(['I', 'need', 'candy'])

// suggested solution

function myFunction2(input) {
    return input.reduce((a,b) => a.length <= b.length ? a : b)
}