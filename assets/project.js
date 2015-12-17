$(document).ready(function() {

	$('.back-btn').click(function() {
		$('.project_main').load("http://unnamed.taipei/project_content.html");
	});

	$('.list-item').click(function() {
		
		$('.list-item').transition({
			animation  : 'scale',
    		onComplete : function() {
		      $('.project_main').load("http://unnamed.taipei/badboss.html");
		    }
		});
		
	});

});