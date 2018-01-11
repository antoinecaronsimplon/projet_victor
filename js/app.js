main (){

// =======  ANTOINE =====================


// =======  VANESSA =====================


// =======  RUUD  ========================


// #######  declaration variables  ###### 

var noGroupe=2;
var x_null;
var nom = "";
var present = "";
var photo = "";
var names = [[nom, present, photo]];


// #######  functions  ################## 

// localStorage only supports strings. Use JSON.stringify() and JSON.parse().

function saveNames(){
names[0] = prompt("New member name?");
localStorage.setItem("names", JSON.stringify(names));
}

function getNames(){
var storedNames = JSON.parse(localStorage.getItem("names"));
}



// #######  deroulement  ################ 



}();  // FIN
