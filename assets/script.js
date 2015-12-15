$(document).ready(function() {
	$('.person').click(function() {
		$('.person .gray_mask').transition('fade left');
		window.location.href = 'bird.html';
	});
});