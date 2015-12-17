$(document).ready(function() {

	$('.card.badboss').click(function() {
		$('.project_main').transition({
		    animation : 'scale',
		    onComplete  : function() {
		      $(".project_main").load("http://unnamed.taipei/badboss.html");
		  	}
		});
	});

});