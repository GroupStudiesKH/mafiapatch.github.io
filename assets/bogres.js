$(document).ready(function() {

	$('.bogres-info .back-btn').click(function() {
		$('.bogres-info').transition({
		    animation : 'scale',
		    onComplete  : function() {
		      $('.project_main').transition('scale');
		      $('.project_main').addClass("stackable");
		    }
		  });
	});

	$('.card.bogres').click(function() {
		$('.project_main').transition({
		    animation : 'scale',
		    onComplete  : function() {
		      $('.project_main').removeClass("stackable");
		      $('.bogres-info').transition('scale');
		    }
		  });
	});

	var $imgs = $('.bogres-info .card .project-image img'), current = 0;
	    
    var nextImage = function() {
        if (current >= $imgs.length){current = 0;};
        $imgs.eq(current++).fadeIn(function() {
        $(this).delay(3000).fadeOut(nextImage);
	    //console.log(current);
	    })
	};
	nextImage();

});