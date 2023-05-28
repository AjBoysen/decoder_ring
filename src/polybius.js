// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const numbers = '123456789'
    const polybiusTable = [
      ['a', 'b', 'c', 'd', 'e'],
      ['f', 'g', 'h', '(i/j)', 'k'],
      ['l', 'm', 'n', 'o', 'p'],
      ['q', 'r', 's', 't', 'u'],
      ['v', 'w', 'x', 'y', 'z']
    ]
    inputWithoutSpaces = input.replace(' ', '')
    //if()
    const inputArray = input.toLowerCase().split("")
    let output = ""
    if(encode){
  for(let i = 0; i < input.length; i ++){
    const currentCharacter = inputArray[i]
    if(currentCharacter === 'i' || currentCharacter === 'j'){
      output += `42`
    }else if(!alphabet.includes(currentCharacter)){
      output += currentCharacter
    }else{
    for(let j = 0; j < polybiusTable.length; j++){
      const location1 = j + 1
      for(let e = 0; e < polybiusTable[j].length; e++){
        const location2 = e + 1
        if(polybiusTable[j][e] === currentCharacter){
          output += `${location2}${location1}`
        }
      }
    }
  }
  }
}else{
  if(inputWithoutSpaces.length%2 != 0){
    return false
  }
  for(let i = 0, j = 1; i < input.length; i += 2, j += 2){
  if(numbers.includes(inputArray[i])){
   const location1 = inputArray[j] - 1 
   const location2 = inputArray[i] - 1
   output += polybiusTable[location1][location2]
  }else{
    output += inputArray[i]
    i -= 1
    j -= 1
  }
  }
}
  return output
  }
   return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
