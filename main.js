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
