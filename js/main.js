$('.carousel').slick({
	centerMode: true,
	centerPadding: '60px',
	prevArrow: '<img src="./assets/Arrow_left.svg" alt="">',
	nextArrow: '<img src="./assets/Arrow_right.svg" alt="">',
	slidesToShow: 3,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1,
			},
		},
	],
});
