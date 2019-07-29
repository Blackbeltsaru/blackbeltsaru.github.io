function createPantheon(markovChain, chainSize, originalInput, realms, numGods) {

  var realmsClone = _.clone(realms);

  var godList = [];

  while (realmsClone.length > 0 && godList.length < numGods) {
    //First create a name for the god
    var name = createText(markovChain, chainSize, originalInput);

    //Next decide how many realms the god represents
    //Can be either 1 or 2
    var realmCount = getRandomInt(1, 3);
    //Make sure there are enough realms
    if (realmCount > realmsClone.length) {
      realmCount = realmsClone.length;
    }

    //Pick the realms the god represents
    var godRealms = [];
    for (var i = 0; i < realmCount; i++) {
      var randRealm = getRandomInt(0, realmsClone.length);
      godRealms = _.union(godRealms, realmsClone.splice(randRealm, 1));
    }

    godList.push(new God(name, godRealms));
  }

  return godList;
}