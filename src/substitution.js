// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
 // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if(!alphabet || alphabet.length !== 26 || new Set(alphabet).size != alphabet.length){
      return false
    }
    const trueAlphabet = "abcdefghijklmnopqrstuvwxyz"
    const trueAlphabetArray = trueAlphabet.split("")
    const alphabetArray = alphabet.split("")
    const inputArray = input.toLowerCase().split("")
    let output = ""
    if(encode){
    for(let i = 0; i < input.length; i++){
      if(trueAlphabetArray.includes(inputArray[i])){
        const letterIndex = trueAlphabetArray.indexOf(inputArray[i])
        output += alphabetArray[letterIndex]
      }else {
        output += inputArray[i]
      }
    }
  }else{
    for(let i = 0; i < input.length; i++){
      if(alphabetArray.includes(inputArray[i])){
        const letterIndex = alphabetArray.indexOf(inputArray[i])
        output += trueAlphabetArray[letterIndex]
      }else {
        output += inputArray[i]
      }
    }
  }
    return output
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
