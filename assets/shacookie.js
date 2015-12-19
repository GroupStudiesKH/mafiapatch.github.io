$(document).ready(function() {

	$('.shacookie-info .back-btn').click(function() {
		$('.shacookie-info').transition({
		    animation : 'scale',
		    onComplete  : function() {
		      $('.project_main').transition('scale');
		      $('.project_main').addClass("stackable");
		    }
		  });
	});

	$('.card.shacookie').click(function() {
		$('.project_main').transition({
		    animation : 'scale',
		    onComplete  : function() {
		      $('.project_main').removeClass("stackable");
		      $('.shacookie-info').transition('scale');
		    }
		  });
	});

	// var $imgs = $('.shacookie-info .card .project-image img'), current = 0;
	    
 //    var nextImage = function() {
 //        if (current >= $imgs.length){current = 0;};
 //        $imgs.eq(current++).fadeIn(function() {
 //        $(this).delay(3000).fadeOut(nextImage);
	//     //console.log(current);
	//     })
	// };
	// nextImage();

});