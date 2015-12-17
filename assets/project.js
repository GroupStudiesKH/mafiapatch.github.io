$(document).ready(function() {

	$('.back-btn').click(function() {
		$('.project_main').load("http://unnamed.taipei/project_content.html");
	});

	$('.list-item').click(function() {
		$('.list-item').transition('scale');
		$('.project_main').load("http://unnamed.taipei/badboss.html");
	});

});