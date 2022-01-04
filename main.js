let maxTab = 4;
let counter = 1

$(document).ready(function(){
	$('#boutton').on('click', function(){
		if(counter < 4) {
			$('.un').clone().appendTo($('#tout'));
		    document.getElementsByClassName('un')[0].className = "deux";
                    counter++;
		}
	})
});

function jour(x){
    if (x == 1) {return 'Lundi';}
    else if (x == 2) {return 'Mardi';}
    else if (x == 3) {return 'Mercredi';}
    else if (x == 4) {return 'Jeudi';}
    else if (x == 5) {return 'Vendredi';}
    else if (x == 6) {return 'Samedi';}
    else {return 'Dimanche';}
}

date1 = new Date();

document.getElementById('date').value = jour(date1.getDay()) + " " + date1.getDate() + " " + mois(date1.getMonth()) + " " + date1.getFullYear();

let moisListe = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];

function mois(x){
    return moisListe[x];
}
