$(document).ready(function() {

	$('.call_ly-info .back-btn').click(function() {
		$('.call_ly-info').transition({
		    animation : 'scale',
		    onComplete  : function() {
		      $('.project_main').transition('scale');
		      $('.project_main').addClass("stackable");
		    }
		  });
	});

	$('.card.call_ly').click(function() {
		$('.project_main').transition({
		    animation : 'scale',
		    onComplete  : function() {
		      $('.project_main').removeClass("stackable");
		      $('.call_ly-info').transition('scale');
		    }
		  });
	});


});