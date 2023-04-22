(function ($) {
    "use strict";

/* ----------------------------
    preloader
    ------------------------------ */

$(window).on('load', function(){        
	$('#preloader').delay(300).fadeOut('slow',function(){
	$(this).remove();
	});
});

/* ----------------------------
	@module       Copyright
	@description  Evaluates the copyright year
    ------------------------------ */
	
var currentYear = (new Date).getFullYear();
	$(document).ready(function () {
		$(".current-year").text((new Date).getFullYear());
});

/* ----------------------------
    counter up
    ------------------------------ */

$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

/* ----------------------------
    venobox
    ------------------------------ */

$('.venobox').venobox();

/* ----------------------------
    Top Scroll
    ------------------------------ */

var offset = 220;
var duration = 500;
jQuery(window).on('scroll', function() {
	if (jQuery(this).scrollTop() > offset) {
		jQuery('.topscroll').fadeIn(duration);
	} else {
		jQuery('.topscroll').fadeOut(duration);
	}
});
jQuery('.topscroll').on('click', function() {
	event.preventDefault();
	jQuery('html, body').animate({scrollTop: 0}, duration);
	return false;
})

/* ----------------------------
    portfolio
    ------------------------------ */

var filterList = {
	init: function () {
	// MixItUp plugin
	// http://mixitup.io
	$('#portfoliolist').mixItUp({
  		selectors: {
    	target: '.portfolio',
    	filter: '.filter'	
    		},
				load: {
				filter: '.bedroom, .furniture, .office, .interior, .living'  
			}     
		});								
	}
};

// Run the show!
filterList.init();

/* ----------------------------
    about img carousel
    ------------------------------ */
	
$('.about-img-carousel').owlCarousel({
	loop: true,
	margin: 0,
	dots:false,
	nav: true,
	items: 1,
	autoplay:true
})

/* ----------------------------
    testimonial
    ------------------------------ */
	
$('.testimonial-carousel').owlCarousel({
	loop: true,
	margin: 10,
	dots:false,
	nav: true,
	autoplay:true,
	navText : ['<i class="fas fa-caret-left"></i>','<i class="fas fa-caret-right"></i>'],
	responsiveClass: true,
	responsive: {
	  0: {
		items: 1
	  },
	  767: {
		items: 1
	  },
	  768: {
		items: 2
	  },
	  1000: {
		items: 3,
		loop: true,
		margin: 20
	  }
	}
})

/* ----------------------------
    partner
    ------------------------------ */
	
$('.partner-carousel').owlCarousel({
	loop: true,
	margin: 10,
	dots:false,
	nav: false,
	autoplay:true,
	responsiveClass: true,
	responsive: {
	  0: {
		items: 2
	  },
	  767: {
		items: 3
	  },
	  768: {
		items: 3
	  },
	  1000: {
		items: 5,
		loop: true
	  }
	}
})

/* ----------------------------
    Portfolio Single Carousel
    ------------------------------ */
	
$('.portfolio-single-carousel').owlCarousel({
	loop: true,
	margin: 0,
	dots:false,
	nav: true,
	items: 1,
	autoplay:true,
	navText : ['<i class="fas fa-caret-left"></i>','<i class="fas fa-caret-right"></i>'],
	responsiveClass: true
})

})(jQuery);
