$(document).ready(function() {
	$('.person').click(function() {
		$('.person .gray_mask').transition('fade left');
		window.location.href = 'bird.html';
	});

	$('#person_list .mafia').click(function() {
		window.location.href = 'mafia.html';
	});

	$('#person_list .bird').click(function() {
		window.location.href = 'bird.html';
	});

	$('.choose_person').popup();
});