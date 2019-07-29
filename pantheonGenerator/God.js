function generateRandomAllignment() {
  var first = getRandomInt(0,3);
  var second = getRandomInt(0, 3);
  var allignment = "";
  switch(first) {
    case 0:
      allignment += "L";
      break;
    case 1:
      allignment += "N";
      break;
    case 2:
      allignment += "C";
      break;
  }
  switch(second) {
     case 0:
       allignment += "G";
       break;
     case 1:
       allignment += "N";
       break;
     case 2:
       allignment += "E";
       break;
  }
  return allignment
}

function God(name, realms) {
 var gend = getRandomInt(0, 2);
 if(gend == 0) {
  this.gender = "god"; 
 } else {
  this.gender = "goddess"; 
 }
 this.name = name;
 this.realms = []
 this.domains = [];
 for(var realm in realms) {
   if(realms.hasOwnProperty(realm)) {
     this.domains = _.union(this.domains, realms[realm].domains);
     this.allignment = realms[realm].getAllignment();
     this.realms.push(realms[realm].realm);
   }
 }
 if(!this.allignment) {
   this.allignment = generateRandomAllignment(); 
 }
}