$(document).ready(function() {

	$('.card.badboss').click(function() {
		$('.project_main').transition({
		    animation : 'scale',
		    complete  : function() {
		      $('.badboss-info').transition('scale');
		    }
		  });
	});

});