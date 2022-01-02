$(document).ready(function(){
	$('#boutton').on('click', function(){
		$('.un').clone().appendTo($('#tout'));
		document.getElementsByClassName('un')[0].className = "deux";
	})
});
