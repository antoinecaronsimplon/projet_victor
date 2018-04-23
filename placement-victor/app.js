

/*
	Cette liste devrait être tirée du localStorage,
	pour pouvoir la changer sans avoir à modifier le code source.
*/

var annuaire = [
	{prenom:"Corentin", nom:"Berlana", photo:"" },
	{prenom:"Grégory", nom:"Bouloc", photo:"" },
	{prenom:"Joris", nom:"Bringer", photo:"" },
	{prenom:"Céline", nom:"Calmels", photo:"" },
	{prenom:"Antoine", nom:"Caron", photo:"" },
	{prenom:"Vanessa", nom:"Chaillou Delouvrier", photo:"" },
	{prenom:"David", nom:"Da Silva", photo:"" },
	{prenom:"Rudolphus", nom:"De Korte", photo:"" },
	{prenom:"Florian", nom:"Javanet", photo:"photo.png"},
	{prenom:"Ana", nom:"Jimenez", photo:"" },
	{prenom:"Fabrice", nom:"Laroche", photo:"" },
	{prenom:"Ilham", nom:"Parfait", photo:"" },
	{prenom:"Frédéric", nom:"Salm", photo:"" },
	{prenom:"Christelle", nom:"Talbot", photo:"" },
	{prenom:"Mathéo", nom:"Zeller", photo:"" }
];



/*
	Générer la liste des apprenants Simplon
*/

for( var i=0 ; i<annuaire.length ; i++ ){

	var name = annuaire[i]['prenom'];

	$('ul').append(
		  '<li>'
		+ '    <input type="checkbox" id="'+name+'" checked="checked"/> '  
		+ '    <label for="'+name+'">'+name+'</label>'
		+ '</li>'
	);	
}


/*
	Lancer le brassage

	1/ On fait d'abord la liste des présents, en listant les balides INPUT cochées.

	2/ Pour chaque élément de la liste, on "nettoie" la valeur, 
		en la remplaçant simplement ce qu'elle contient (l'input DOM) 
		par l'élément de la liste "annuaire" déclarée en début de 
		script ( fonction find() )

	3/ On mélange la liste ainsi obtenue en utilisant une fonction shuffle() 
		péchée sur le net. Note : on ne fera PAS de tirage au sort !

	4/ On disperse les apprenants de manière équilibrée par groupes (apprenant 1 
		dans groupe 1, apprenant 2 dans groupe 2, etc...).
		Note : la variable groupes est un tableau à 2 dimensions (chaque élément
		de la liste est un groupe d'apprenant, donc une nouvelle liste).
*/

function shuffle(a){
	// https://stackoverflow.com/a/6274381
	var j, x, i;
	for (i = a.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		x = a[i];
		a[i] = a[j];
		a[j] = x;
	}
}

function find( name ){
	for( var i=0 ; i<annuaire.length ; i++ ){
		if( name == annuaire[i].prenom ){
			return annuaire[i];
		}
	}
	return false;	// rien trouvé :/
}


var doMix = function(){
	var presents = $('input:checked').toArray();
	var nombre_groupes = $('input[name="ngroup"]').val();
	var groupes = [];
	var id_groupe = 0;

	console.log(presents);

	for( var i=0 ; i<presents.length ; i++ ){
		presents[i] = find( presents[i].id );
	}

	shuffle(presents);

	console.log(presents);

	for( var i=0 ; i<presents.length ; i++ ){

		// D'abord, pour la première personne qui entre dans un groupe 
		// il faut initialiser ce groupe (définir que c'est une liste)

		if( ! Array.isArray(groupes[id_groupe]) ){
			groupes[id_groupe] = [];
		}

		// Ensuite, on ajoute l'apprenant au groupe

		groupes[id_groupe].push( presents[i] );

		// Et on incrémente le groupe, pour qu'au prochain tour, la
		// personne suivante soit ajoutée au groupe suivant.
		// Petite exception : si le numéro de groupe correspond au
		// dernier groupe, on remet à zéro plutôt que d'incrémenter.

		if( id_groupe < nombre_groupes-1 )
			id_groupe++;
			else
			id_groupe = 0;
	}

	console.log( groupes );

	// Les groupes sont maintenant créés. On a défini ensemble une petite
	// exception : si un groupe est constitué d'une seule personne, alors
	// on la place dans le groupe précédent !

	for( var i=0 ; i<presents.length ; i++ ){
		// TODO
	}	

}

$('button').on('click', doMix);





