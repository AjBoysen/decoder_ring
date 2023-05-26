// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if(shift === undefined || shift === 0 || shift > 25 || shift < -25){
      return false
    }
    let trueShift = shift
    if(!encode){
      trueShift = shift - shift*2
    }
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const alphabetArray = alphabet.split("")
    const strArray = input.toLowerCase().split("")
    let encodedWord = ""
    for(let i = 0; i < strArray.length; i++){
      const indexOfStrLetter = alphabetArray.indexOf(strArray[i])
      if(alphabetArray.includes(strArray[i])){
      let shiftedIndex = indexOfStrLetter + trueShift
      if(shiftedIndex > 25){
        shiftedIndex = shiftedIndex - 26
      } else if(shiftedIndex < 0){
        shiftedIndex = shiftedIndex + 26
      }
      encodedWord += alphabetArray[shiftedIndex]
    }else {encodedWord += strArray[i]}
    }
    return encodedWord
  }

   return {
    caesar,
  };
})();
module.exports = { caesar: caesarModule.caesar };
