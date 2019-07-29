var _INPUT = getInput();
var _CHAIN_SIZE = 3;
var _NUM_GODS = 10;
var _MARKOV_CHAIN = makeChain(_CHAIN_SIZE, input);
var _REALMS = getRealms();
var _PANTHEON = [];


//TODO filter the possible input
//TODO filter possible realms
//TODO add tabu list to markov chain
//TOOD restrict realms to like realms
//TODO control allignmnet by realm more accurately

function writePantheon() {
  _PANTHEON = createPantheon(_MARKOV_CHAIN, _CHAIN_SIZE, _INPUT, _REALMS, _NUM_GODS);

  var holder = document.getElementById("pantheonHolder");
  holder.innerHTML = '';

  for (var i = 0; i < _PANTHEON.length; i++) {

    var currGod = _PANTHEON[i];

    var displayText = currGod.name + " ";
    displayText += currGod.gender + " of ";
    for (var j = 0; j < currGod.realms.length; j++) {
      displayText += currGod.realms[j];
      if (j < currGod.realms.length - 1) {
        displayText += " and ";
      }
    }

    displayText += " :: " + currGod.allignment;

    var indexOfStuff = _INPUT.indexOf(currGod.name);
    if (indexOfStuff != -1) {
      //TODO: do something here to warn about duplicates
    }

    var parHolder = document.createTextNode(displayText);
    var br = document.createElement('br');
    holder.appendChild(parHolder);
    holder.appendChild(br);
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function setChainLength(length) {
  _CHAIN_SIZE = length;
}

function setGodCount(count) {
  _NUM_GODS = count;
}