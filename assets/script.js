$(document).ready(function() {

    var host = "unnamed.taipei";
    if ((host == window.location.host) && (window.location.protocol != "https:"))
        window.location.protocol = "https";

	$('.person').click(function() {
		$('.person .gray_mask').transition('fade left');
		window.location.href = 'bird.html';
	});

	$('.profolio').click(function() {
		$('.person .gray_mask').transition('fade left');
		window.location.href = 'project.html';
	});

	$('.contact').click(function() {
		$('.person .gray_mask').transition('fade left');
		window.location.href = 'contact.html';
	});

	$('#person_list .mafia').click(function() {
		window.location.href = 'mafia.html';
	});

	$('#person_list .bird').click(function() {
		window.location.href = 'bird.html';
	});

	$('.choose_person').popup();


	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-62760692-2', 'auto');
	  ga('send', 'pageview');

});