import imagesLoaded from 'imagesloaded'
import { gsap } from 'gsap'
import * as myFunctions from './modules/functions.js'
import 'bootstrap/js/dist/modal.js'
import 'bootstrap/js/dist/tab.js'
import SmoothScroll from 'smoothscroll-for-websites'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";
import { CustomEase } from 'gsap/CustomEase.js'
import Swiper, { Navigation, Autoplay } from 'swiper'
import lightGallery from 'lightgallery'
import lgVideo from 'lightgallery/plugins/video/lg-video.min.js'
import lgThumbnail from 'lightgallery/plugins/thumbnail/lg-thumbnail.min.js'
import lgMediumZoom from 'lightgallery/plugins/mediumZoom/lg-medium-zoom.min.js'
import { Datepicker } from 'vanillajs-datepicker'

myFunctions.isWebp();
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, CustomEase);

ScrollTrigger.saveStyles(".main-banner__bg, .main-banner__bg-gradient, .main-banner__container, .main-banner__title, .main-banner__play, .main-about__title, .main-about__description, .main-about__num, .main-about__name, .about-brochure__item, .checked-list li .ico, .footer-request-a-call__top-line, .footer-request-a-call__left-line, .footer-request-a-call__right-line, .footer-request-a-call__bot-line-left, .footer-request-a-call__bot-line-right, .gs-anim, .excursion__bg, .pin-spacer, .main-banner__btn-play, .project-gallery, .excursion__form-box, .project__title .tx, .project__title .box, .app-header__menu, .btn-toggler__tx, .about-brochure__img")

// SmoothScroll
SmoothScroll({
	animationTime: 1200,
	stepSize: 80,
	keyboardSupport: true,
	arrowScroll: 100,
	touchpadSupport: true
})

// 

const elem = document.querySelector('input[name="datepicker"]');
const datepicker = new Datepicker(elem, {});

const images = gsap.utils.toArray("img");
const loader = document.querySelector(".loader__progress");
const updateProgress = (instance) =>
	(loader.setAttribute('style', `width: ${Math.round(
		(instance.progressedCount * 100) / images.length
		)}%`));
const showDemo = () => {

	document.body.style.overflow = "auto";
	document.scrollingElement.scrollTo(0, 0);
	gsap.to(document.querySelector(".loader"), { autoAlpha: 0 });


	let tlExcursion = gsap.timeline({
		scrollTrigger: {
			trigger: ".excursion",
			start: "top top",
			end: "bottom top",
			scrub: true,
			pin: ".excursion__bg"
		}
	})

	ScrollTrigger.matchMedia({

		"all": function() {
			
		},
		// > 992
		"(min-width: 992px)": function() {

			gsap.from(".about-brochure__img", { y: 400, x: 200, scrollTrigger: {
				trigger: ".about-brochure",
				start: "top 100%",
				end: "center 10%",
				scrub: 1,
			}})

			let tlInvestment = gsap.timeline({
				scrollTrigger: {
					trigger: ".investment",
					start: "top bottom",
					end: "bottom bottom",
					scrub: 1,
				}
			}).to(".investment__visa", { paddingTop: 200 }, 1)

		},
		// < 992
		"(max-width: 991px)": function() {

			
		},
		// < 992
		"(max-width: 991px) and (min-width: 576px)": function() {

			let tlInvestment = gsap.timeline({
				scrollTrigger: {
					trigger: ".investment",
					start: "top bottom",
					end: "bottom bottom",
					scrub: 1,
				}
			}).fromTo(".investment__visa", { y: 100 }, { y: 0 }, 1)

		},
		// > 768
		"(min-width: 768px)": function() {

		},
		// < 768
		"(max-width: 767px)": function() {

		},
		// > 576
		"(min-width: 576px)": function() {

			// main
			let tlmain = gsap.timeline();
			tlmain.from(".main-banner__bg", { duration: 1.5, backgroundPositionY: "0%"})
			.from(".app-header", { yPercent: -100})
			.from(".main-banner__title", { yPercent: 50}, 1.5)
			.from(".main-banner__btn-play", { scale: 0.5, autoAlpha: 0})
			.from(".main-banner__play-text", { autoAlpha: 0})
			.from(".section-line-left", { scaleY: 0 })
			.from(".section-line-center", { scaleY: 0 })
			.from(".section-line-right", { scaleY: 0 })

			tlmain.fromTo(".main-banner__bg", { backgroundPositionY: "50%"}, { backgroundPositionY: "100%", scrollTrigger: {
				scrub: true,
				trigger: '.main-banner',
				start: 'top top',
				end: 'bottom top',
				pin: ".main-banner__bg"
			}})
			tlmain.to(".main-banner__bg-gradient", { autoAlpha: 1, scrollTrigger: {
				scrub: true,
				trigger: '.main-banner',
				start: 'top top',
				end: 'bottom bottom'
			}})
			
			tlmain.to(".main-banner__container", { yPercent: 30, scrollTrigger: {
				scrub: true,
				trigger: '.main-banner',
				start: 'center 100%',
				end: 'center 50%'
			}})
			tlmain.to(".main-banner__title", { autoAlpha: 0, scrollTrigger: {
				scrub: true,
				trigger: '.main-banner',
				start: 'center 70%',
				end: 'center 60%'
			}})
			tlmain.to(".main-banner__play", { autoAlpha: 0, scrollTrigger: {
				scrub: true,
				trigger: '.main-banner',
				start: 'center 60%',
				end: 'center 50%'
			}})
			tlmain.from(".main-about__title", { yPercent: 100, autoAlpha: 0, scrollTrigger: {
				scrub: true,
				trigger: '.main-banner',
				start: 'center 50%',
				end: 'bottom bottom'
			}})
			tlmain.from(".main-about__description", { yPercent: 100, autoAlpha: 0, scrollTrigger: {
				scrub: true,
				trigger: '.main-banner',
				start: 'center 30%',
				end: 'bottom bottom'
			}})
			tlmain.from(".main-about__num", { yPercent: 100, autoAlpha: 0, stagger: 0.1, scrollTrigger: {
				scrub: true,
				trigger: '.main-banner',
				start: 'center 20%',
				end: 'bottom bottom'
			}})
			tlmain.from(".main-about__name", { yPercent: 100, autoAlpha: 0, stagger: 0.1, scrollTrigger: {
				scrub: true,
				trigger: '.main-banner',
				start: 'center 10%',
				end: 'bottom bottom'
			}})
			
			function animateFrom(elem, direction) {
				direction = direction || 1;
				var x = 0,
					y = direction * 300;
				elem.style.transform = "translate(" + x + "px, " + y + "px)";
				elem.style.opacity = "0";
				gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
					duration: 2, 
					x: 0,
					y: 0, 
					autoAlpha: 1, 
					ease: "expo", 
					overwrite: "auto"
				});
			}
			
			function hide(elem) {
				gsap.set(elem, {autoAlpha: 0});
			}
			
			gsap.utils.toArray(".gs-anim").forEach(function(elem) {
				hide(elem);
				
				ScrollTrigger.create({
					trigger: elem,
					onEnter: function() { animateFrom(elem) }, 
					onEnterBack: function() { animateFrom(elem, -1) },
					onLeave: function() { hide(elem) }
				});
			});

			let tlbr = gsap.timeline({
				scrollTrigger: {
					trigger: ".about-brochure__list",
					start: "center 80%",
					end: "center 40%"
				}
			})
			tlbr.from(".about-brochure__item", { autoAlpha: 0, stagger: 0.1 })
			.from(".about-brochure__item .ico", { autoAlpha: 0, stagger: 0.1 })

			gsap.utils.toArray(".project__title .box").forEach(function(elem) {
				gsap.timeline({
					scrollTrigger: {
						trigger: elem,
						start: "center 100%",
						end: "center 40%",
						scrub: 1,
					}
				}).from(elem, {right: 999})
			})
			gsap.utils.toArray(".project__title .tx").forEach(function(elem) {
				gsap.timeline({
					scrollTrigger: {
						trigger: elem,
						start: "center 80%",
						end: "center 40%",
						scrub: 1,
					}
				}).from(elem, { autoAlpha: 0, x: 100 })
			})
			gsap.utils.toArray(".project-gallery").forEach(function(elem) {
				gsap.timeline({
					scrollTrigger: {
						trigger: elem,
						start: "top 99%",
						end: "center 99%"
					}
				}).from(elem, { scale: 2, yPercent: 50 })
			})

			tlExcursion.fromTo(".excursion-form", { yPercent: 100 }, { yPercent: 0, scrollTrigger: {
				trigger: ".excursion",
				start: "top top",
				end: "bottom bottom",
				scrub: true,
			} }, 0.5)

		},
		// < 575
		"(max-width: 575px)": function() {

			// main
			let tlmain = gsap.timeline();
			tlmain.from(".main-banner__bg", { duration: 1.5, backgroundPositionY: "0%"})
			.from(".app-header", { yPercent: -100})
			.from(".main-banner__title", { yPercent: 50}, 1.5)
			.from(".main-banner__btn-play", { scale: 0.5, autoAlpha: 0})
			.from(".main-banner__play-text", { autoAlpha: 0})

			tlmain.fromTo(".main-banner__bg", { backgroundPositionY: "50%"}, { backgroundPositionY: "100%", scrollTrigger: {
				scrub: true,
				trigger: '.main-banner',
				start: 'top top',
				end: 'bottom top',
				pin: ".main-banner__bg"
			}})
			tlmain.to(".main-banner__bg-gradient", { autoAlpha: 1, scrollTrigger: {
				scrub: true,
				trigger: '.main-banner',
				start: 'top top',
				end: 'bottom bottom'
			}})
			
			tlmain.to(".main-banner__title", { autoAlpha: 0, scrollTrigger: {
				scrub: true,
				trigger: '.main-banner',
				start: 'center 70%',
				end: 'center 60%'
			}})
			tlmain.to(".main-banner__play", { autoAlpha: 0, scrollTrigger: {
				scrub: true,
				trigger: '.main-banner',
				start: 'center 60%',
				end: 'center 50%'
			}})
			tlmain.from(".main-about__title", { autoAlpha: 0, scrollTrigger: {
				scrub: true,
				trigger: '.main-banner',
				start: 'center 50%',
				end: 'bottom bottom'
			}})
			tlmain.from(".main-about__description", { autoAlpha: 0, scrollTrigger: {
				scrub: true,
				trigger: '.main-banner',
				start: 'center 30%',
				end: 'bottom bottom'
			}})
			tlmain.from(".main-about__num", { autoAlpha: 0, stagger: 0.1, scrollTrigger: {
				scrub: true,
				trigger: '.main-banner',
				start: 'center 20%',
				end: 'bottom bottom'
			}})
			tlmain.from(".main-about__name", { autoAlpha: 0, stagger: 0.1, scrollTrigger: {
				scrub: true,
				trigger: '.main-banner',
				start: 'center 10%',
				end: 'bottom bottom'
			}})

		},

	})

	gsap.utils.toArray(".gallery__list").forEach((section, index) => {
		const w = section.querySelector(".gallery__list-wrapper");
		const [x, xEnd] =
			index % 2
				? ["0%", ((w.scrollWidth / 1.3) - section.offsetWidth) * -1]
				: [(w.scrollWidth / 6) * -1, 0];
		gsap.fromTo( w,
			{
				x,
			}, {
				x: xEnd,
				scrollTrigger: {
					trigger: section,
					scrub: 1.5
				}
			}
		);
	});
	// gsap
	
	// main menu
	
	let bodyOverlay = document.createElement('div');
	bodyOverlay.classList.add('body-overlay')
	document.body.append(bodyOverlay);
	
	const tlMenu = gsap.timeline({ paused: true });
	
	tlMenu.to(".app-header__menu", { yPercent: 100 })
	.to(".body-overlay", { visibility: "visible", autoAlpha: 1 }, 0)
	.to(".btn-toggler__line_mid", { width: 0 }, 0)
	// .to(".btn-toggler__tx_open", { yPercent: 100 }, 0)
	// .to(".btn-toggler__tx_close", { yPercent: 100 }, 0)
	.to(".btn-toggler__line_top", { y: 8 }, 0)
	.to(".btn-toggler__line_bot", { y: -8 }, 0)
	.to(".btn-toggler__line_top", { rotate: 45 }, 0.5)
	.to(".btn-toggler__line_bot", { rotate: -45 }, 0.5)
	.from(".menu__item", { autoAlpha: 0, stagger: 0.05 }, 0.6)
	
	const btnToggler = document.querySelector(".btn-toggler");
	btnToggler.addEventListener("click", toggleMenu);
	document.querySelector(".body-overlay").addEventListener("click", toggleMenu);
	function toggleMenu() {
		tlMenu.reversed() ? tlMenu.timeScale(1).play() : tlMenu.timeScale(2).reverse();
		btnToggler.classList.toggle('open')
	}
	tlMenu.reverse();

	function getSamePageAnchor (link) {
		if (
			link.protocol !== window.location.protocol ||
			link.host !== window.location.host ||
			link.pathname !== window.location.pathname ||
			link.search !== window.location.search
		) {
			return false;
		}
	
		return link.hash;
	}
	function scrollToHash(hash, e) {
		const elem = hash ? document.querySelector(hash) : false;
		if(elem) {
			if(e) e.preventDefault();
			gsap.to(window, { duration: 0, scrollTo: elem, ease: "power2"});
		}
	}
	document.querySelectorAll('a[href]').forEach(a => {
		a.addEventListener('click', e => {
			scrollToHash(getSamePageAnchor(a), e);
		});
	});
	scrollToHash(window.location.hash);

	let tlForm = gsap.timeline({
		scrollTrigger: {
			trigger: ".footer-request-a-call__body",
			start: "top 50%",
			end: "bottom 75%",
			scrub: true
		}
	}).from(".footer-request-a-call__top-line", { width: 160 })
	.from(".footer-request-a-call__left-line, .footer-request-a-call__right-line", { height: 0 })
	.from(".footer-request-a-call__bot-line-left, .footer-request-a-call__bot-line-right", { width: 0 })

	gsap.utils.toArray(".key-features__item_odd .box").forEach(function(elem) {
		gsap.timeline({
			scrollTrigger: {
				trigger: elem,
				start: "center 80%",
				end: "center 40%",
				scrub: 1,
			}
		}).fromTo(elem, {x: 20, y: -20}, {x: 0, y: 0})
	})

	gsap.utils.toArray(".key-features__img img").forEach(function(elem) {
		gsap.timeline({
			scrollTrigger: {
				trigger: elem,
				start: "top 100%",
				end: "bottom 0%",
				scrub: 2,
			}
		}).to(elem, { scale: 1.2 })
	})
	gsap.utils.toArray(".developer-card__img img").forEach(function(elem) {
		gsap.timeline({
			scrollTrigger: {
				trigger: elem,
				start: "top 100%",
				end: "bottom 0%",
				scrub: 2,
			}
		}).to(elem, { scale: 1.2 })
	})
	gsap.utils.toArray(".key-features__item_even .box").forEach(function(elem) {
		gsap.timeline({
			scrollTrigger: {
				trigger: elem,
				start: "center 80%",
				end: "center 40%",
				scrub: 1,
			}
		}).fromTo(elem, {x: -20, y: -20}, {x: 0, y: 0})
	})

	CustomEase.create("lines", "M0,0 C0,0 0.06,0.09 0.1,0.13 0.146,0.176 0.194,0.168 0.236,0.216 0.271,0.256 0.326,0.346 0.374,0.4 0.42,0.452 0.529,0.51 0.574,0.552 0.614,0.59 0.67,0.692 0.704,0.726 0.738,0.76 0.838,0.806 0.864,0.84 0.884,0.866 1,1 1,1 ")

	gsap.utils.toArray(".main-banner .section-line-left").forEach(function(elem) {
		gsap.to(elem, {
			height: "100%",
			ease: "lines",
			scrollTrigger: { 
				trigger: ".main-banner .container-lines",
				scrub: 0.1,
				start: "top 75%",
				end: "bottom 75%"
			}
		});
	})
	gsap.utils.toArray(".main-banner .section-line-center").forEach(function(elem) {
		gsap.to(elem, {
			height: "100%",
			ease: "lines",
			scrollTrigger: { 
				trigger: ".main-banner .container-lines",
				scrub: 0.1,
				start: "top 50%",
				end: "bottom 50%"
			}
		});
	})
	gsap.utils.toArray(".main-banner .section-line-right").forEach(function(elem) {
		gsap.to(elem, {
			height: "100%",
			ease: "lines",
			scrollTrigger: { 
				trigger: ".main-banner .container-lines",
				scrub: 0.1,
				start: "top 25%",
				end: "bottom 25%"
			}
		});
	})

	gsap.utils.toArray(".key-features .section-line-left").forEach(function(elem) {
		gsap.to(elem, {
			height: "100%",
			ease: "lines",
			scrollTrigger: { 
				trigger: ".key-features .container-lines",
				scrub: 0.1,
				start: "top 75%",
				end: "bottom 75%"
			}
		});
	})
	gsap.utils.toArray(".key-features .section-line-center").forEach(function(elem) {
		gsap.to(elem, {
			height: "100%",
			ease: "lines",
			scrollTrigger: { 
				trigger: ".key-features .container-lines",
				scrub: 0.1,
				start: "top 50%",
				end: "bottom 50%"
			}
		});
	})
	gsap.utils.toArray(".key-features .section-line-right").forEach(function(elem) {
		gsap.to(elem, {
			height: "100%",
			ease: "lines",
			scrollTrigger: { 
				trigger: ".key-features .container-lines",
				scrub: 0.1,
				start: "top 25%",
				end: "bottom 25%"
			}
		});
	})

	gsap.utils.toArray(".about-brochure .section-line-left").forEach(function(elem) {
		gsap.to(elem, {
			height: "100%",
			ease: "lines",
			scrollTrigger: { 
				trigger: ".about-brochure .container-lines",
				scrub: 0.1,
				start: "top 75%",
				end: "bottom 75%"
			}
		});
	})
	gsap.utils.toArray(".about-brochure .section-line-center").forEach(function(elem) {
		gsap.to(elem, {
			height: "100%",
			ease: "lines",
			scrollTrigger: { 
				trigger: ".about-brochure .container-lines",
				scrub: 0.1,
				start: "top 50%",
				end: "bottom 50%"
			}
		});
	})
	gsap.utils.toArray(".about-brochure .section-line-right").forEach(function(elem) {
		gsap.to(elem, {
			height: "100%",
			ease: "lines",
			scrollTrigger: { 
				trigger: ".about-brochure .container-lines",
				scrub: 0.1,
				start: "top 25%",
				end: "bottom 25%"
			}
		});
	})

	gsap.utils.toArray(".projects .section-line-left").forEach(function(elem) {
		gsap.to(elem, {
			height: "100%",
			ease: "lines",
			scrollTrigger: { 
				trigger: ".projects .container-lines",
				scrub: 0.1,
				start: "top 75%",
				end: "bottom 75%"
			}
		});
	})
	gsap.utils.toArray(".projects .section-line-center").forEach(function(elem) {
		gsap.to(elem, {
			height: "100%",
			ease: "lines",
			scrollTrigger: { 
				trigger: ".projects .container-lines",
				scrub: 0.1,
				start: "top 50%",
				end: "bottom 50%"
			}
		});
	})
	gsap.utils.toArray(".projects .section-line-right").forEach(function(elem) {
		gsap.to(elem, {
			height: "100%",
			ease: "lines",
			scrollTrigger: { 
				trigger: ".projects .container-lines",
				scrub: 0.1,
				start: "top 25%",
				end: "bottom 25%"
			}
		});
	})
	gsap.utils.toArray(".gallery .section-line-left").forEach(function(elem) {
		gsap.to(elem, {
			height: "100%",
			ease: "lines",
			scrollTrigger: { 
				trigger: ".gallery .container-lines",
				scrub: 0.1,
				start: "top 75%",
				end: "bottom 75%"
			}
		});
	})
	gsap.utils.toArray(".gallery .section-line-center").forEach(function(elem) {
		gsap.to(elem, {
			height: "100%",
			ease: "lines",
			scrollTrigger: { 
				trigger: ".gallery .container-lines",
				scrub: 0.1,
				start: "top 50%",
				end: "bottom 50%"
			}
		});
	})
	gsap.utils.toArray(".gallery .section-line-right").forEach(function(elem) {
		gsap.to(elem, {
			height: "100%",
			ease: "lines",
			scrollTrigger: { 
				trigger: ".gallery .container-lines",
				scrub: 0.1,
				start: "top 25%",
				end: "bottom 25%"
			}
		});
	})
	gsap.utils.toArray(".location .section-line-left").forEach(function(elem) {
		gsap.to(elem, {
			height: "100%",
			ease: "lines",
			scrollTrigger: { 
				trigger: ".location .container-lines",
				scrub: 0.1,
				start: "top 75%",
				end: "bottom 75%"
			}
		});
	})
	gsap.utils.toArray(".location .section-line-center").forEach(function(elem) {
		gsap.to(elem, {
			height: "100%",
			ease: "lines",
			scrollTrigger: { 
				trigger: ".location .container-lines",
				scrub: 0.1,
				start: "top 50%",
				end: "bottom 50%"
			}
		});
	})
	gsap.utils.toArray(".location .section-line-right").forEach(function(elem) {
		gsap.to(elem, {
			height: "100%",
			ease: "lines",
			scrollTrigger: { 
				trigger: ".location .container-lines",
				scrub: 0.1,
				start: "top 25%",
				end: "bottom 25%"
			}
		});
	})
	gsap.utils.toArray(".virtual-tour .section-line-left").forEach(function(elem) {
		gsap.to(elem, {
			height: "100%",
			ease: "lines",
			scrollTrigger: { 
				trigger: ".virtual-tour .container-lines",
				scrub: 0.1,
				start: "top 75%",
				end: "bottom 75%"
			}
		});
	})
	gsap.utils.toArray(".virtual-tour .section-line-center").forEach(function(elem) {
		gsap.to(elem, {
			height: "100%",
			ease: "lines",
			scrollTrigger: { 
				trigger: ".virtual-tour .container-lines",
				scrub: 0.1,
				start: "top 50%",
				end: "bottom 50%"
			}
		});
	})
	gsap.utils.toArray(".virtual-tour .section-line-right").forEach(function(elem) {
		gsap.to(elem, {
			height: "100%",
			ease: "lines",
			scrollTrigger: { 
				trigger: ".virtual-tour .container-lines",
				scrub: 0.1,
				start: "top 25%",
				end: "bottom 25%"
			}
		});
	})
	gsap.utils.toArray(".excursion-lines .section-line-left").forEach(function(elem) {
		gsap.to(elem, {
			height: "100%",
			ease: "lines",
			scrollTrigger: { 
				trigger: ".excursion-lines.container-lines",
				scrub: 0.1,
				start: "top 75%",
				end: "bottom 75%"
			}
		});
	})
	gsap.utils.toArray(".excursion-lines .section-line-center").forEach(function(elem) {
		gsap.to(elem, {
			height: "100%",
			ease: "lines",
			scrollTrigger: { 
				trigger: ".excursion-lines.container-lines",
				scrub: 0.1,
				start: "top 50%",
				end: "bottom 50%"
			}
		});
	})
	gsap.utils.toArray(".excursion-lines .section-line-right").forEach(function(elem) {
		gsap.to(elem, {
			height: "100%",
			ease: "lines",
			scrollTrigger: { 
				trigger: ".excursion-lines.container-lines",
				scrub: 0.1,
				start: "top 25%",
				end: "bottom 25%"
			}
		});
	})
	gsap.utils.toArray(".excursion__body .section-line-left").forEach(function(elem) {
		gsap.to(elem, {
			height: "100%",
			ease: "lines",
			scrollTrigger: { 
				trigger: ".excursion__body .container-lines",
				scrub: 0.1,
				start: "top 75%",
				end: "bottom 75%"
			}
		});
	})
	gsap.utils.toArray(".excursion__body .section-line-center").forEach(function(elem) {
		gsap.to(elem, {
			height: "100%",
			ease: "lines",
			scrollTrigger: { 
				trigger: ".excursion__body .container-lines",
				scrub: 0.1,
				start: "top 50%",
				end: "bottom 50%"
			}
		});
	})
	gsap.utils.toArray(".excursion__body .section-line-right").forEach(function(elem) {
		gsap.to(elem, {
			height: "100%",
			ease: "lines",
			scrollTrigger: { 
				trigger: ".excursion__body .container-lines",
				scrub: 0.1,
				start: "top 25%",
				end: "bottom 25%"
			}
		});
	})
	gsap.utils.toArray(".investment .section-line-left").forEach(function(elem) {
		gsap.to(elem, {
			height: "100%",
			ease: "lines",
			scrollTrigger: { 
				trigger: ".investment .container-lines",
				scrub: 0.1,
				start: "top 75%",
				end: "bottom 75%"
			}
		});
	})
	gsap.utils.toArray(".investment .section-line-center").forEach(function(elem) {
		gsap.to(elem, {
			height: "100%",
			ease: "lines",
			scrollTrigger: { 
				trigger: ".investment .container-lines",
				scrub: 0.1,
				start: "top 50%",
				end: "bottom 50%"
			}
		});
	})
	gsap.utils.toArray(".investment .section-line-right").forEach(function(elem) {
		gsap.to(elem, {
			height: "100%",
			ease: "lines",
			scrollTrigger: { 
				trigger: ".investment .container-lines",
				scrub: 0.1,
				start: "top 25%",
				end: "bottom 25%"
			}
		});
	})
	gsap.utils.toArray(".dark-cantainer .section-line-left").forEach(function(elem) {
		gsap.to(elem, {
			height: "100%",
			ease: "lines",
			scrollTrigger: { 
				trigger: ".dark-cantainer .container-lines",
				scrub: 0.1,
				start: "top 75%",
				end: "bottom 100%"
			}
		});
	})
	gsap.utils.toArray(".dark-cantainer .section-line-center").forEach(function(elem) {
		gsap.to(elem, {
			height: "100%",
			ease: "lines",
			scrollTrigger: { 
				trigger: ".dark-cantainer .container-lines",
				scrub: 0.1,
				start: "top 50%",
				end: "bottom 100%"
			}
		});
	})
	gsap.utils.toArray(".dark-cantainer .section-line-right").forEach(function(elem) {
		gsap.to(elem, {
			height: "100%",
			ease: "lines",
			scrollTrigger: { 
				trigger: ".dark-cantainer .container-lines",
				scrub: 0.1,
				start: "top 25%",
				end: "bottom 100%"
			}
		});
	})

	// projects gallery
	const projectGallery = ()=>{
		let projectGallerys = document.querySelectorAll('.projects-gallery')
		let projectGalleryPrev = document.querySelectorAll('.projects-gallery__nav_prev')
		let projectGalleryNext = document.querySelectorAll('.projects-gallery__nav_next')
		projectGallerys.forEach((slider, index)=>{
			let sliderLength = slider.children[0].children.length
			let result = (sliderLength > 1) ? true : false
			const swiper = new Swiper(slider, {
				modules: [Navigation, Autoplay],
				slidesPerView: 1,
				spaceBetween: 30,
				navigation: {
					nextEl: projectGalleryPrev[index],
					prevEl: projectGalleryNext[index]
				}
			});
		})
	}
	projectGallery();
	
	// projects foorplans
	const floorplan = ()=>{
		let floorplans = document.querySelectorAll('.project-floorpans-swiper')
		let floorplanPrev = document.querySelectorAll('.project-floorpans__nav_prev')
		let floorplanNext = document.querySelectorAll('.project-floorpans__nav_next')
		floorplans.forEach((slider, index)=>{
			let sliderLength = slider.children[0].children.length
			let result = (sliderLength > 1) ? true : false
			const swiper = new Swiper(slider, {
				modules: [Navigation],
				slidesPerView: 1,
				spaceBetween: 30,
				watchSlidesProgress: true,
				navigation: {
					nextEl: floorplanPrev[index],
					prevEl: floorplanNext[index]
				}
			});
		})
	}
	floorplan();


	// lightGallery
	const lg = document.querySelectorAll( '.lg-list')
	lg.forEach(item => {
		lightGallery( item, {
			plugins: [lgVideo, lgThumbnail],
			videojs: true,
			licenseKey: 'your_license_key',
			selector: '.lg-item',
			mode: 'lg-slide',
			speed: 800,
			loop: false,
			counter: false,
			download: false,
			thumbnail: true,
			mobileSettings: {
				showCloseIcon: true
			}
		})
	})
	

	// lightGallery images
	const lgimg = document.querySelectorAll( '.lg-images')
	lgimg.forEach(item => {
		lightGallery( item, {
			licenseKey: 'your_license_key',
			selector: '.lg-image',
			speed: 500,
			loop: false,
			counter: false,
			download: false,
			mobileSettings: {
				showCloseIcon: true
			}
		})
	})
	
	// lightGallery videos
	const lgvid = document.querySelectorAll( '.lg-videos')
	lgvid.forEach(item => {
		lightGallery( item, {
			plugins: [lgVideo],
			videojs: true,
			licenseKey: 'your_license_key',
			selector: '.lg-video',
			download: false,
			counter: false,
			iframeWidth: "1320",
			mobileSettings: {
				showCloseIcon: true
			}
		})
	})

	// lightGallery iframe
	const lgIframe = document.querySelectorAll( '.lg-iframe')
	lgIframe.forEach(item => {
		lightGallery( item, {
			licenseKey: 'your_license_key',
			selector: 'this',
			iframeWidth: "1320px",
			download: false,
			counter: false,
			mobileSettings: {
				showCloseIcon: true
			}
		})
	})

	// lightGallery zoom
	const lgZoom = document.querySelectorAll( '.lg-zoom')
	lgZoom.forEach(item => {
		lightGallery( item, {
			licenseKey: 'your_license_key',
			selector: 'this',
			plugins: [lgMediumZoom]
		})
	})

};
setTimeout(() => imagesLoaded(images).on("progress", updateProgress).on("always", showDemo), 1000 )
// imagesLoaded(images).on("progress", updateProgress).on("always", showDemo);


