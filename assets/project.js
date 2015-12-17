$(document).ready(function() {

	$('.back-btn').click(function() {
		$('.project-data').transition({
		    animation : 'scale',
		    onComplete  : function() {
		      $('.project_main').transition('scale');
		      $('.project_main').addClass("stackable");
		    }
		  });
	});

	$('.card.badboss').click(function() {
		$('.project_main').transition({
		    animation : 'scale',
		    onComplete  : function() {
		      $('.project_main').removeClass("stackable");
		      $('.badboss-info').transition('scale');
		    }
		  });
	});

});