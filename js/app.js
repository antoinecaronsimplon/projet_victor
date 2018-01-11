main (){

// =======  ANTOINE =====================


// =======  VANESSA =====================


// =======  RUUD  ========================


// #######  declaration variables  ###### 

var noGroupe=2;
var nom = "";
var present = "";
var photo = "";
var names = [["", true, ""]];
var storedNames = [["", true, ""]];


// #######  functions  ################## 

// localStorage only supports strings. Use JSON.stringify() and JSON.parse().
// names[1][0] = prompt("New member name?");

function getGroupes(){
	// recup groupes set in page
	noGroupes=$('#groupe option:selected').val();
	if (noGroupes<2){
		noGroupes=2;
	}
}

 		

function getNames(){
	// if names are in localstorage, fil names from local storage
	// else use names from variable presetNames from names.js file 
	
	storedNames = JSON.parse(localStorage.getItem("names"));
	
	console.log("storedNames.length : "+storedNames.length);
	
	if (storedNames.length<1){
		names = presetNames;
	} else {
		names = storedNames;
	}
}


function saveNames(){
	console.log("names.length : "+names.length);
	
	if (names.length>1){
		localStorage.setItem("names", JSON.stringify(names));
 	} else {
 		alert("pas de noms a sauvegarder");
 	}
}




// #######  deroulement  ################ 

getNames();  // always start with getnames; fill variable names.


$( window ).unload(function() { // when exit the page, save member names
  saveNames();
});


}();  // FIN
