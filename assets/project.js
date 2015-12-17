$(document).ready(function() {

	$('.list-item').click(function() {

		$('.list-item').transition({
			animation  : 'scale',
    		onComplete : function() {
		      $('.project_main').load("http://unnamed.taipei/badboss.html");
		    }
		});
		
	});

});