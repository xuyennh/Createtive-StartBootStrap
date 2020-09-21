// Sticky Menu //
window.onscroll = function() {
	scrollFunction();
};

//scroll show nav
function scrollFunction() {
	const headerScrolledTextEls = document.querySelectorAll('#header-scrollText');
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		document.getElementById('header-scrolled').style.backgroundColor = '#fff';
		document.getElementById('header-scrolled').style.boxShadow = '0 0.5rem 1rem rgba(0, 0, 0, 0.15)';
		headerScrolledTextEls.forEach((El) => {
			El.style.color = '#000';
		});
	} else {
		document.getElementById('header-scrolled').style.backgroundColor = 'transparent';
		document.getElementById('header-scrolled').style.boxShadow = 'none';
		headerScrolledTextEls.forEach((El) => {
			El.style.color = 'rgba(255, 255, 255, 0.7)';
		});
	}
}

//burger click show menu
function navMenu() {
	const burger = document.querySelector('.burger');
	const headerNav = document.querySelector('.header__nav');
	burger.addEventListener('click', () => {
		burger.classList.toggle('toggle');
		headerNav.classList.toggle('header__nav-actives');
	});
}
navMenu();
