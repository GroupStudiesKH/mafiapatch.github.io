$(document).ready(function() {

	$('.badboss-info .back-btn').click(function() {
		$('.badboss-info').transition({
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

	var $imgs = $('.badboss-info .card .project-image img'), current = 0;
	    
    var nextImage = function() {
        if (current >= $imgs.length){current = 0;};
        $imgs.eq(current++).fadeIn(function() {
        $(this).delay(3000).fadeOut(nextImage);
	    //console.log(current);
	    })
	};
	nextImage();

});