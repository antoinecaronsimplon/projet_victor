(function main(){		// function MAIN = AUTOSTART !

	// =======  ANTOINE =====================


	// =======  VANESSA =====================
	/* Générer la liste des apprenants*/
//*	var presetNames = [];
	//for( var = i; i< annuaire.length; i++){
	//	console.log(presetNames[i]);
	//	$('ul').append('<li>' + presetNames[i]+'</li>');
	//}
	//var newStudent = "";
//
	//$('#valider').on('click', function(){
	//	$('#new_student').value(newStudent);
	//	$(names).append(student, true , [9]);
	//})
			
		
	

	// =======  RUUD  ========================


	// ########################################
	// #######  declaration variables  ######## 
	// ########################################

	var names = [["", true, ""]];
	var storedNames = [["", true, ""]];
	var iStudents=0;
	var iGroups=0;  
	var iGroupMembers=[["",0]];  // contains membername / assigned group


	// #############################################
	// ######## variables for creation HTML ########
	// #############################################

	var nom = "";
	var present = "";
	var photo = "";


	// ######################################
	// #######  functions  ################## 
	// ######################################

	// localStorage only supports strings. Use JSON.stringify() and JSON.parse().
	// names[1][0] = prompt("New member name?");

	function getNames(){
		// if names are in localstorage, fil names from local storage
		// else use names from variable presetNames from names.js file 
		
		storedNames = JSON.parse(localStorage.getItem("names"));
		
		console.log("presetNames "+presetNames);
		console.log("storedNames "+storedNames);
		
		// reset names to zero
		names.length = 0;

		if (storedNames==null){
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


	function numGen(max){
	  		// number Generator from 1 to number given by variable MAX
	  		if (max>1){
		  		return Math.floor((Math.random() * max) + 1);
	  		} // endif
	  	} // endfunction


	function getGroupMembers(){
		// recup n° groups set in page - store in iGroups variable
		iGroups=$('#groupe option:selected').val();
		if (iGroups<2){
			iGroups=2;
		}
		
		iStudents= names.length;  // recup number of students from names - store in iStudents variable

		mixTableau(names);

		iGroupMembers.length = 0;	// reset iMembersPerGroup to zero
		iGroupMembers=names;	// contains groupnumber / available places

		var j = iGroups;

		for (var i = 0; i < iStudents; i++) {

			iGroupMembers[i][3]=j;

			j--;
			if (j==0){
				j=iGroups;
			}
		}
		console.log("iGroupMembers"+iGroupMembers);

	}


	function mixTableau( tab_){
		//-------------------------------
		// entree : le tableau a randommer
		// sortie : le tableau randomme
		//-------------------------------
		// EXEMPLE d'appel
		//   //-- Random du tableau
		//   Tab = Rand_Tableau( Tab);
	  var i;
	  var Num;
	  var Nbr = tab_.length;
	  var Tab = tab_;
	  //-- Lance la boucle
	  while( Nbr> 0){
	    //-- Recup nombre aleatoire
	    Num = Math.floor(Math.random() * Nbr);
	    //-- 1 de moins a traiter
	    Nbr--;
	    //-- Stock element tire
	    szTmp = Tab[Num];
	    //-- Decalage des valeurs du tableau
	    for( i= Num; i < Nbr; i++)
	      Tab[i] = Tab[i+1]
	    //-- Stock l'element tire en fin
	    Tab[ Nbr] = szTmp;
	  }
	  //-- On peut remettre dans l'ordre du tirage
	  Tab.reverse();
	  //-- Retourne resultat
	  return( Tab);
	}


	function htmlResult(){
		// construct i
		var result=""
		for (var i = 1; i <= iGroups; i++) {
			result += "<div id='student_box'>GROUP ";
			result += i;
			result += "<br /><hr /><br>";
			for (var j = 0; j < iGroupMembers.length; j++) {
				if (iGroupMembers[j][3]==i){
					result += iGroupMembers[j][0];
					result += "<br />";
				}
				console.log(result);
			}
			result += "</div>"
		}
		$("#student_list").html(result);
	}

	// ######################################
	// #######  deroulement  ################ 
	// ######################################

	// START execution program

	getNames();	// read students list from local storage
				// always start with getnames; fill variable names.

	// OPTION : 
	// 		on change students present / absent
	//  		open students list
	// 				change presence
	//				opt : delete student
	//				opt : add student
	//		save students list (localstorage names)


	// onclick bouton lancement --> START 
	$('#lancement').click(function(){
		console.log("click lancement");
		getGroupMembers();	//	mix students and place per group
		htmlResult();
	});

	// htmlResult(); 	// 	create resultlist
	//  save resultlist to localstorage
	//
	// when open result page
	//   load resultlist
	//   show resultlist
	//


	// END program
	// $( window ).unload(function() {
	//   saveNames();		 // when exit the page, save member names
	// });




	// ######################################
	// ###############  FIN  ################ 
	// ######################################

})();  // FIN MAIN







// ############################################
// ############ COIN BROUILLON  ############### 
// ############################################



// code JS pour verifier etat chkbox
// function checkAddress()
// {
//     var chkBox = document.getElementById('checkAddress');
//     if (chkBox.checked)
//     {
//         // ..
//     }
// }
//
// code JQUERY pour verifier etat chkbox
// Use is() with :checked to get the result as boolean that is true if checkbox is checked.
// 		ckb = $("#ickb").is(':checked');
// Or, you can use length, if it is zero then it is not checked.
// 		ckb = $("#ickb::checked").length
//
//
// function getFileName(){
//     var pagePathName= window.location.pathname;
//     return pagePathName.substring(pagePathName.lastIndexOf("/") + 1);
// }
// var iPage=getFileName();
// if (iPage="settings.html"){
// 		// do your thing
// 	}
