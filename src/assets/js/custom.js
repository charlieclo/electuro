$(document).ready(function() {
	initBannerSlider();
	initCategorySlider();
	initDealsSlider();
	initTimer();
	initBrandSlider();

	function initBannerSlider()
	{
		if($('.banner-slider').length)
		{
			var bannerSlider = $('.banner-slider');
			bannerSlider.owlCarousel(
			{
				items:1,
				loop:false,
				nav:false,
				dots:true,
				dotsContainer: '.banner-dots',
				smartSpeed:1800
			});
		}
	}

	function initCategorySlider()
	{
		if($('.category-slider').length)
		{
			var categorySlider = $('.category-slider');

			categorySlider.owlCarousel(
			{
				loop:true,
				autoplay:false,
				nav:false,
				dots:false,
				responsive:
				{
					0:{items:1},
					575:{items:2},
					640:{items:3},
					768:{items:4},
					991:{items:5}
				}
			});

			if($('.category-previous-btn').length)
			{
				var prev = $('.category-previous-btn');
				prev.on('click', function()
				{
					categorySlider.trigger('prev.owl.carousel');
				});
			}

			if($('.category-next-btn').length)
			{
				var next = $('.category-next-btn');
				next.on('click', function()
				{
					categorySlider.trigger('next.owl.carousel');
				});
			}
		}
	}

	function initDealsSlider() {
		if($('.deals-slider').length)
		{
			var dealsSlider = $('.deals-slider');
			dealsSlider.owlCarousel(
			{
				items:2,
				loop:true,
				nav:false,
				dots:false,
				smartSpeed:1200,
				margin:180,
				autoplay:false,
				autoplayTimeout:5000
			});
		}
	}

	function initTimer() {
    	if($('.deals-timer-box').length)
    	{
    		var timers = $('.deals-timer-box');
    		timers.each(function()
    		{
    			var timer = $(this);

    			var targetTime;
    			var target_date;

    			// Add a date to data-target-time of the .deals_timer_box
    			// Format: "Feb 17, 2018"
    			if(timer.data('target-time') !== "")
    			{
    				targetTime = timer.data('target-time');
					target_date = new Date(targetTime).getTime();
    			}
    			else
    			{
    				var date = new Date();
			    	date.setDate(date.getDate() + 2);
			    	target_date = date.getTime();
    			}

				// variables for time units
				var days, hours, minutes, seconds;

				var h = timer.find('.deals-timer-hour');
				var m = timer.find('.deals-timer-minute');
				var s = timer.find('.deals-timer-second');

				setInterval(function ()
				{
				    // find the amount of "seconds" between now and target
				    var current_date = new Date().getTime();
				    var seconds_left = (target_date - current_date) / 1000;
				    console.log(seconds_left);
				 
				    // do some time calculations
				    days = parseInt(seconds_left / 86400);
				    seconds_left = seconds_left % 86400;
				    
				    hours = parseInt(seconds_left / 3600);
				    hours = hours + days * 24;
				    seconds_left = seconds_left % 3600;
				    
				     
				    minutes = parseInt(seconds_left / 60);
				    seconds = parseInt(seconds_left % 60);

				    if(hours.toString().length < 2)
				    {
				    	hours = "0" + hours;
				    }
				    if(minutes.toString().length < 2)
				    {
				    	minutes = "0" + minutes;
				    }
				    if(seconds.toString().length < 2)
				    {
				    	seconds = "0" + seconds;
				    }

				    // display results
				    h.text(hours);
				    m.text(minutes);
				    s.text(seconds); 
				 
				}, 1000);
    		});	
    	}	
    }

	function initBrandSlider() {
		if($('.brand-slider').length) {
			var brandSlider = $('.brand-slider');

			brandSlider.owlCarousel(
			{
				loop:true,
				autoplay:true,
				autoplayTimeout:5000,
				nav:false,
				dots:false,
				autoWidth:true,
				items:8,
				margin:42
			});
		}

		if($('.brand-previous-btn').length) {
			var prev = $('.brand-previous-btn');
			prev.on('click', function()
			{
				brandSlider.trigger('prev.owl.carousel');
			});
		}

		if($('.brand-next-btn').length) {
			var next = $('.brand-next-btn');
			next.on('click', function()
			{
				brandSlider.trigger('next.owl.carousel');
			});
		}
	}
});

