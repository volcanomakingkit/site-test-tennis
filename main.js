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
    if (x == 2) {return 'Mardi';}
    if (x == 3) {return 'Mercredi';}
    if (x == 4) {return 'Jeudi';}
    if (x == 5) {return 'Vendredi';}
    if (x == 6) {return 'Samedi';}
    return 'Dimanche';
}

date1 = new Date();

document.getElementById('date').value = jour(date1.getDay()) + " " + date1.getDate() + " " + mois(date1.getMonth()) + " " + date1.getFullYear();

function mois(x){
    if (x == 0){return "Janvier";}
}
