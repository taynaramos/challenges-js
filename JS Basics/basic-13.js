// This challenge is a little bit more complex
// Write a function that takes a number as argument
// If the number is prime, return the number
// If not, return the next higher prime number

function myFunction(num) {

    
    let soma = 0

    for(let i=0; i<=num; i++){
      if(num%i==0){
        soma++
      }
    }

    if(soma === 2) {
      return num
    }
    else{
      do {
          num++
          var soma2 = 0
          for(let j=0; j<=num; j++){
            if(num%j==0){
              soma2++
            }
          }
      } while(soma2 !== 2)
      return num
    }
}

myFunction(2000)
myFunction(115)
myFunction(7)

// suggested solution 

function myFunction2( input ) {
    function isPrime(num) {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return num > 1;
    }
   let n = input;
   while (!isPrime(n)) n++;
  return n
  }