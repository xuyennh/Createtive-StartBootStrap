// Sticky Menu //
window.onscroll = function() {
	scrollFunction();
};

//scroll show nav
function scrollFunction() {
	const headerScrolledTextEls = document.querySelectorAll('#header-scrollText');
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		document.getElementById('mainHead').style.backgroundColor = '#fff';
		document.getElementById('mainHead').style.boxShadow = '0 0.5rem 1rem rgba(0, 0, 0, 0.15)';
		document.getElementById('logo-text').style.color = '#f4623a';
		headerScrolledTextEls.forEach((El) => {
			El.style.color = '#000';
		});
	} else {
		document.getElementById('mainHead').style.backgroundColor = 'transparent';
		document.getElementById('mainHead').style.boxShadow = 'none';
		document.getElementById('logo-text').style.color = 'rgba(255, 255, 255, 0.7)';
		headerScrolledTextEls.forEach((El) => {
			El.style.color = 'rgba(255, 255, 255, 0.7)';
		});
	}
}

//burger click show menu
function navMenu() {
	const burger = document.querySelector('.burger');
	const headerNav = document.querySelector('.header__nav');
	const headerScrolledTextEls = document.querySelectorAll('#header-scrollText');
	burger.addEventListener('click', () => {
		burger.classList.toggle('toggle');
		headerNav.classList.toggle('header__nav-actives');
	});
	headerScrolledTextEls.forEach((el) => {
		el.addEventListener('click', () => {
			burger.classList.toggle('toggle');
			headerNav.classList.toggle('header__nav-actives');
		});
	});
}
navMenu();

//vanila menu
$(document).ready(function() {
	$('a[href*=#]').bind('click', function(e) {
		e.preventDefault(); // prevent hard jump, the default behavior

		var target = $(this).attr('href'); // Set the target as variable

		// perform animated scrolling by getting top-position of target-element and set it as scroll target
		$('html, body').stop().animate({
			scrollTop: $(target).offset().top
		}, 600, function() {
			location.hash = target; //attach the hash (#jumptarget) to the pageurl
		});

		return false;
	});
});

$(window)
	.scroll(function() {
		var scrollDistance = $(window).scrollTop();
		// Assign active class to nav links while scolling
		$('.section').each(function(i) {
			if ($(this).position().top <= scrollDistance + 72) {
				$('#mainHead .navbar__link.active').removeClass('active');
				$('#mainHead .navbar__link').eq(i).addClass('active');
			}
		});
	})
	.scroll();

function myFunction() {
	var x = document.getElementById('Topnav');
	if (x.className === 'header__menu-list') {
		x.className += ' responsive';
	} else {
		x.className = 'header__menu-list';
	}
}
//

var menu_close = document.querySelector('.header__menu-logo__link');
menu_close.onclick = function() {
	var x = document.getElementById('Topnav');
	if (x.className === 'header__menu-list responsive') {
		x.className = 'header__menu-list';
	}
};
