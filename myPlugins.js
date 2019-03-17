
$(function(){

	'use strict' ;

	// slider Window size 

	$('.slider').height($(window).height());

	$(window).resize(function (){

		$('.slider').height($(window).height());

	});

	// Typed.js 

	var typed = new Typed(".type", {
	  strings: [
	  "Designer",
	  "Developer",
	  "Abdallah Muhammed.",
	  "Hope To You Like My Portfolio"
	  ],
	  typeSpeed: 90,
	  backSpeed: 90,
	  loop: true
	});


	// Scroll Navbar Stike navbar 

	$(window).scroll(function(){

		if ($(window).scrollTop()) {

			$('.navbar').addClass('bg-dark');

		} else {

			$('.navbar').removeClass('bg-dark');
		}

	});

	// Smooth Scroll Navbar

	 $('.navbar-light .navbar-nav .nav-link').click(function(a){
	 	a.preventDefault();

	 	$('html, body').animate({

	 		scrollTop: $('#' + $(this).data('scroll')).offset().top -10

	 	}, 500);


	 });


	// Navbar Active Link

	$('.navbar-light .navbar-nav .nav-link').click(function(){

		$('.navbar-light .nav-link').removeClass('active');
		$(this).addClass('active');

	});


	// Sync Navbar With Sections

	$(window).scroll(function(){

		$('.block').each(function(){
			if ($(window).scrollTop() > $(this).offset().top -75) {

				var blockID = $(this).attr('id');

				$('.navbar-light .navbar-nav .nav-link').removeClass('active');

				$('.navbar-light .navbar-nav .nav-link[data-scroll="' + blockID + '"]').addClass('active');

			}
		});
	});
	// CountTo Plagin 

	$('.count').countTo();

	//Start Our Dynamic Tabs

	$('.dynamic-tabs .work-menu li a ').on('click', function(){

		$('.dynamic-tabs .work-menu li a').removeClass('active');
		$(this).addClass('active');

		// Link with content list 
		$('.content-list .content-work').hide();

		$($(this).data('content')).fadeIn(800);

	});

});