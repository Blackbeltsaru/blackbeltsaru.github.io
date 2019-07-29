function makeChain(size, input) {
  var chain = {};
  //For each element given
  for(var element in input) {
    //ensure that nothing broke
    if(input.hasOwnProperty(element)) {
      var workingString = input[element]
      //for each character in the element
      for(var i = 0; i <= workingString.length; i++) {
       var lowerBound = i - size;
       if(lowerBound < 0) {
          lowerBound = 0; 
       }
       
       //Add the next to the markov chain
       var markovKey = workingString.substring(lowerBound, i);
       if(!chain[markovKey]) {
        chain[markovKey] = []; 
       }
       chain[markovKey].push(workingString[i]);
      }
    }
  }
  return chain;
}

function createText(markovChain, chainSize, originalInput) {
  var text = "";
  var nextChar = "";
  
  var possibilities = markovChain[""];
  if(!possibilities) {
    nextChar = possibilities;
  } else {
    var rand = getRandomInt(0, possibilities.length);
    nextChar = possibilities[rand];
  }
  text += nextChar;
    
  while(nextChar) {
    //Get the key
    var endIndex = text.length;
    var startIndex = endIndex - chainSize;
    if(startIndex < 0) {
     startIndex = 0; 
    }
    //Get possibliites
    var chainKey = text.substring(startIndex, endIndex);
    possibilities = markovChain[chainKey];
    //If there are no possibilities
    if(!possibilities) {
      nextChar = possibilities;
    } else {
      var rand = getRandomInt(0, possibilities.length);
      nextChar = possibilities[rand];
    }
    if(nextChar) {
      text += nextChar;
    }
  }
  
  //Don't let the input give something from the original input
  if(originalInput.indexOf(text) != -1) {
    console.log("retry");
   text = createText(markovChain, chainSize, originalInput); 
  }
  
  return text;
}