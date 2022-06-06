$(document).ready(function(){
	const sliderAnons = new Swiper(".anons__slider", {
		scrollbar: {
			el: '.anons__slider_scrollbar',
			draggable: true,
			dragSize: '700',
		},
		navigation: {
			nextEl: '.anons__slider_next',
			prevEl: '.anons__slider_prev',
		},
		breakpoints: {
			0: {
				scrollbar: {
					dragSize: '200',
				},
			},
			768: {
				scrollbar: {
					dragSize: '400',
				},
			},
			992: {
				scrollbar: {
					dragSize: '700',
				},
			}
		}
	});
	const sliderExperts = new Swiper(".experts__slider", {
		slidesPerView: 4,
		spaceBetween: 60,
		scrollbar: {
			el: '.experts__slider_scrollbar',
			draggable: true,
			dragSize: '700',
		},
		navigation: {
			nextEl: '.experts__slider_next',
			prevEl: '.experts__slider_prev',
		},
		breakpoints: {
			0: {
				slidesPerView: 1.3,
				spaceBetween: 15,
				scrollbar: {
					dragSize: '200',
				},
			},
			700: {
				slidesPerView: 2.6,
				spaceBetween: 30,
				scrollbar: {
					dragSize: '400',
				},
			},
			992: {
				slidesPerView: 3.3,
				spaceBetween: 30,
				scrollbar: {
					dragSize: '700',
				},
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 60,
				scrollbar: {
					dragSize: '700',
				},
			}
		}
	});
	const sliderNumbers = new Swiper(".numbers__slider", {
		slidesPerView: 1,
		spaceBetween: 0,
		breakpoints: {
			480: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 60
			}
		}
	});
	const sliderServices = new Swiper(".services__slider", {
		slidesPerView: 3,
		spaceBetween: 30,
		grid: {
			fill: 'row',
			rows: 3,
		},
		scrollbar: {
			el: '.services__scrollbar',
			draggable: true,
			dragSize: '700',
		},
		navigation: {
			nextEl: '.services__slider_next',
			prevEl: '.services__slider_prev',
		},
		breakpoints: {
			0: {
				slidesPerView: 1.2,
				spaceBetween: 15,
				grid: {
					fill: 'column',
					rows: 1,
				},
				scrollbar: {
					dragSize: '200',
				},
			},
			768: {
				slidesPerView: 2.16,
				spaceBetween: 30,
				grid: {
					fill: 'column',
					rows: 1,
				},
				scrollbar: {
					dragSize: '400',
				},
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 30,
				grid: {
					fill: 'row',
					rows: 3,
				},
				scrollbar: {
					dragSize: '400',
				},
			}
		}
	});
	const sliderProjects = new Swiper(".projects__slider", {
		slidesPerView: 3,
		spaceBetween: 30,
		grid: {
			fill: 'row',
			rows: 2,
		},
		scrollbar: {
			el: '.projects__scrollbar',
			draggable: true,
			dragSize: '700',
		},
		navigation: {
			nextEl: '.projects__slider_next',
			prevEl: '.projects__slider_prev',
		},
		breakpoints: {
			0: {
				slidesPerView: 1.3,
				spaceBetween: 15,
				grid: {
					fill: 'column',
					rows: 1,
				},
				scrollbar: {
					dragSize: '200',
				},
			},
			768: {
				slidesPerView: 2.3,
				spaceBetween: 30,
				grid: {
					fill: 'column',
					rows: 1,
				},
				scrollbar: {
					dragSize: '400',
				},
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 30,
				grid: {
					fill: 'row',
					rows: 2,
				},
				scrollbar: {
					dragSize: '400',
				},
			}
		}
	});

	//About sliders
	const sliderAdvantages = new Swiper(".advantages__slider", {
		slidesPerView: 4,
		spaceBetween: 50,
		scrollbar: {
			el: '.advantages__slider_scrollbar',
			draggable: true,
			dragSize: '700',
		},
		navigation: {
			nextEl: '.advantages__slider_next',
			prevEl: '.advantages__slider_prev',
		},
		breakpoints: {
			0: {
				slidesPerView: 'auto',
				spaceBetween: 0,
				grid: {
					fill: 'row',
					rows: 10,
				},
				scrollbar: {
					hide: true,
				},
			},
			576: {
				slidesPerView: 2.5,
				spaceBetween: 30,
				scrollbar: {
					dragSize: '400',
				},
			},
			992: {
				slidesPerView: 3.3,
				spaceBetween: 30,
				scrollbar: {
					dragSize: '700',
				},
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 50,
				scrollbar: {
					dragSize: '700',
				},
			}
		}
	});
	const sliderHistory = new Swiper(".hostory__slider", {
		slidesPerView: 4,
		spaceBetween: 60,
		scrollbar: {
			el: '.hostory__slider_scrollbar',
			draggable: true,
			dragSize: '700',
		},
		navigation: {
			nextEl: '.hostory__slider_next',
			prevEl: '.hostory__slider_prev',
		},
		breakpoints: {
			0: {
				slidesPerView: 1.2,
				spaceBetween: 15,
				scrollbar: {
					dragSize: '200',
				},
			},
			600: {
				slidesPerView: 2.3,
				spaceBetween: 30,
				scrollbar: {
					dragSize: '400',
				},
			},
			992: {
				slidesPerView: 2.3,
				spaceBetween: 30,
				scrollbar: {
					dragSize: '700',
				},
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 50,
				scrollbar: {
					dragSize: '700',
				},
			}
		}
	});
	const sliderNews = new Swiper(".news__slider", {
		slidesPerView: 3,
		spaceBetween: 30,
		scrollbar: {
			el: '.news__slider_scrollbar',
			draggable: true,
			dragSize: '700',
		},
		navigation: {
			nextEl: '.news__slider_next',
			prevEl: '.news__slider_prev',
		},
		breakpoints: {
			0: {
				slidesPerView: 1.3,
				spaceBetween: 15,
				scrollbar: {
					dragSize: '200',
				},
			},
			700: {
				slidesPerView: 2.3,
				spaceBetween: 30,
				scrollbar: {
					dragSize: '400',
				},
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 30,
				scrollbar: {
					dragSize: '700',
				},
			}
		}
	});
	const sliderGallery = new Swiper(".gallery__slider", {
		effect: "coverflow",
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: "auto",
		loop: true,
		coverflowEffect: {
			rotate: 0,
			stretch: 160,
			depth: 100,
			modifier: 3,
			slideShadows: true,
		},
		navigation: {
			nextEl: '.gallery__slider_next',
			prevEl: '.gallery__slider_prev',
		},
	});

	const sliderVacansyFilters = new Swiper(".top-filters__filters-slider", {
		init: true,
		slidesPerView: "auto",
		spaceBetween: 15,
		freeMode: true,
	});
	const sliderBussinessCase = new Swiper(".bossiness-case__slider", {
		slidesPerView: 3,
		spaceBetween: 30,
		scrollbar: {
			el: '.bossiness-case__scrollbar',
			draggable: true,
			dragSize: '700',
		},
		navigation: {
			nextEl: '.bossiness-case__slider_next',
			prevEl: '.bossiness-case__slider_prev',
		},
		breakpoints: {
			0: {
				slidesPerView: 1.3,
				spaceBetween: 15,
				scrollbar: {
					dragSize: '200',
				},
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
				scrollbar: {
					dragSize: '400',
				},
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 30,
				scrollbar: {
					dragSize: '400',
				},
			}
		}
	});
	
	

	

	// Copy phone
	$('[data-copy]').on('click', function(){
		let pass = $(this).text()
    copytext(pass);
		$.notify("Текст скопирован: " + pass, 'success');
	})

	// Open event (change lang or region)
	$('.change-lang').on('click', function(){
		$('.overlay').fadeIn();
		$('.mm-slide[data-side="'+ $(this).attr('data-event') +'"]').addClass('open')
	})
	$('.change-city').on('click', function(){
		$('.overlay').fadeIn();
		$('.mm-slide[data-side="'+ $(this).attr('data-event') +'"]').addClass('open')
	})
	$('.mm-slide__close').on('click', function(){
		$('.overlay').fadeOut();
		$('.mm-slide').removeClass('open')
	})
	// Open filter
	$('.top-filters__btns-btn').on('click', function(e){
		e.preventDefault();
		$('.overlay').fadeIn();
		$('.mm-slide[data-side="'+ $(this).attr('data-event') +'"]').addClass('open')
	})
	// Menu hamburger
	$('.hamburger').on('click', function(){
		$('.overlay').fadeIn();
		$('body').addClass('overflow_hidden');
		$('.mmenu').addClass('open');
	})
	$('.mmenu__close').on('click', function(){
		$('.overlay').fadeOut();
		$('body').removeClass('overflow_hidden');
		$('.mmenu').removeClass('open');
	})

	// Overlay
	$('.overlay').on('click', function(){
		$('.overlay').fadeOut();

		$('.mmenu').removeClass('open');
		$('.mm-slide').removeClass('open')
	})

	// Dropdown menu
	$('.mmenu__content a[data-ddmenu]').on('click', function(e){
		e.preventDefault()

		let mmenu = $(this).attr('data-ddmenu');

		if ($(window).width() < 768){
			if(mmenu != 'main'){
				$('.mmenu .logo__link').hide()
			} else{
				$('.mmenu .logo__link').show()
			}
		}

		$('.mmenu__content .mmenu__content-menu').hide()
		$('.mmenu__content .mmenu-dd[data-mmenu="'+ mmenu +'"]').show()
	})
	$('.mmenu__content_arrow').on('click', function(e){
		e.preventDefault()

		let mmenu = $(this).attr('data-ddmenu');

		if ($(window).width() < 768){
			if(mmenu != 'main'){
				$('.mmenu .logo__link').hide()
			} else{
				$('.mmenu .logo__link').show()
			}
		}

		$('.mmenu__content .mmenu__content-menu').hide()
		$('.mmenu__content .mmenu__content-menu[data-mmenu="'+ $(this).attr('data-ddmenu') +'"]').show()
	})

	var scrollPos = 0;
	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop()
		if (scrollTop >= 30) {
			$(".hamburger").addClass("fixed")
		}
		else {
			$(".hamburger").removeClass("fixed")
		}

		if (scrollTop >= 10) {
			if (scrollTop > scrollPos){
				if(scrollPos > 200){
					console.log('Вниз')
					$('.main-line').removeClass('fixed');
				}
			} else {
				if(scrollPos > 200){
					console.log('Вверх')
					$('.main-line').addClass('fixed');
				}
			}
			scrollPos = scrollTop;
		}
		else{
			$('.main-line').removeClass('fixed');
		}
	})

	if ($(window).width() > 1400){
		$('.career__item-desc').equalHeights();
	}
	
	// setTimeout(function(){
	// 	$('.numbers__item-number-static').fadeIn('400', 'linear', function(){
	// 		$('.numbers__item-number-gif').hide()
	// 	})
		
	// }, 4000)


	$('.vacancy__item-main').on('click', function(e){
		e.preventDefault()

		if ($(window).width() > 992){
			$('.vacancy-more-item').css('top', 0).hide()
			$('.vacancy__item-main').css('margin-bottom', 0).removeClass('active')

			$(this).css('margin-bottom', $(this).siblings('.vacancy-more-item').outerHeight() + 30 + 'px').addClass('active')
			$(this).siblings('.vacancy-more-item').css('top', $(this).parent('.vacancy__item').position().top + 170 + 'px').show()
		} else{
			$(this).siblings('.vacancy-more-item').fadeIn()
		}

		
	})
	$('.vacancy-more-item__close').on('click', function(){
		if ($(window).width() > 992){
			$('.vacancy-more-item').hide()
			$('.vacancy__item-main').removeClass('active')
			$('.vacancy__item-main').css('margin-bottom', 0)
		} else{
			$('.vacancy-more-item').fadeOut()
		}
	})

	$('.vacancy-more-item-moving-prev').on('click', function(){
		$(this).parents('.vacancy__item').find('.vacancy-more-item__close').trigger('click')
		$(this).parents('.vacancy__item').prev().find('.vacancy__item-main').trigger('click')
	})
	$('.vacancy-more-item-moving-next').on('click', function(){
		$(this).parents('.vacancy__item').find('.vacancy-more-item__close').trigger('click')
		$(this).parents('.vacancy__item').next().find('.vacancy__item-main').trigger('click')
	})


	$('.mm-slide-tab__top').on('click', function(){
		$(this).toggleClass('active')
		$(this).siblings('.mm-slide-tab__content').slideToggle()
	})

	$('.open-pp').on('click', function(e){
		e.preventDefault()
		$('.order-pp').fadeIn()
		if ($(window).width() > 992){
			$('.top-line').addClass('open-pp')
			$('.main-line').addClass('open-pp')
			$('.hamburger').addClass('open-pp')
		}
		$('body').addClass('ofhidden')
	})
	$('.order-pp__close').on('click', function(e){
		e.preventDefault()
		$('.order-pp').fadeOut()
		if ($(window).width() > 992){
			$('.top-line').removeClass('open-pp')
			$('.main-line').removeClass('open-pp')
			$('.hamburger').removeClass('open-pp')
		}
		$('body').removeClass('ofhidden')
	})

	

})

function copytext(text) {
	var $tmp = $("<textarea>");
	$("body").append($tmp);
	$tmp.val(text).select();
	document.execCommand("copy");
	$tmp.remove();
}