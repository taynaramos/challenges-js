// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

function myFunction(object) {

  const newObject = {}

  for(let i=0; i< Object.keys(object).length; i++) {
    newObject[Object.values(object)[i]] = Object.keys(object)[i]
  }
   return newObject
}

myFunction({ bear: 'animal', sow: 'female', boar: 'male', cub: 'young' })