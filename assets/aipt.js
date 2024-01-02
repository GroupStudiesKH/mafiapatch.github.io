$(document).ready(function() {

	$('.aipt-info .back-btn').click(function() {
		$('.aipt-info').transition({
		    animation : 'scale',
		    onComplete  : function() {
		      $('.project_main').transition('scale');
		      $('.project_main').addClass("stackable");
		    }
		  });
	});

	$('.card.aipt').click(function() {
		$('.project_main').transition({
		    animation : 'scale',
		    onComplete  : function() {
		      $('.project_main').removeClass("stackable");
		      $('.aipt-info').transition('scale');
		    }
		  });
	});

	var $imgs = $('.aipt-info .card .project-image img'), current = 0;
	    
    var nextImage = function() {
        if (current >= $imgs.length){current = 0;};
        $imgs.eq(current++).fadeIn(function() {
        $(this).delay(3000).fadeOut(nextImage);
	    //console.log(current);
	    })
	};
	nextImage();

});