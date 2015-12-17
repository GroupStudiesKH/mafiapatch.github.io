$(document).ready(function() {

	$('.back-btn').click(function() {
		$('.project-data').transition({
		    animation : 'scale',
		    onComplete  : function() {
		      $(".project_main").load("http://unnamed.taipei/project_main.html");
		  	}
		});
	});

	$('.card.badboss').click(function() {
		$('.list-item').transition({
		    animation : 'scale',
		    onComplete  : function() {
		      $(".project_main").load("http://unnamed.taipei/badboss.html");
		  	}
		});
	});


});