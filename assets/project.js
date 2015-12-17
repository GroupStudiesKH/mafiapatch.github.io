$(document).ready(function() {
	
	$('.list-item').click(function() {
		$('.list-item').transition('scale');
		$('.project_main').load("http://unnamed.taipei/badboss.html");
	});

});