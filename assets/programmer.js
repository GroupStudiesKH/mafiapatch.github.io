$(document).ready(function() {

	$('.programmer-info .back-btn').click(function() {
		$('.programmer-info').transition({
		    animation : 'scale',
		    onComplete  : function() {
		      $('.project_main').transition('scale');
		      $('.project_main').addClass("stackable");
		    }
		  });
	});

	$('.card.programmer').click(function() {
		$('.project_main').transition({
		    animation : 'scale',
		    onComplete  : function() {
		      $('.project_main').removeClass("stackable");
		      $('.programmer-info').transition('scale');
		    }
		  });
	});

	var $imgs = $('.programmer-info .card .project-image img'), current = 0;
	    
    var nextImage = function() {
        if (current >= $imgs.length){current = 0;};
        $imgs.eq(current++).fadeIn(function() {
        $(this).delay(3000).fadeOut(nextImage);
	    //console.log(current);
	    })
	};
	nextImage();

});