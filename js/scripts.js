/* Start Go To Top Button */
const goToTop = document.querySelector('.fixed-btn');

// to show or hide go to top button at specific height
document.addEventListener('scroll', () => {
	if (window.scrollY > 200) {
		// goToTop.classList.add('fixed-btn-visible');
		goToTop.style.display = 'block';
	} else {
		// goToTop.classList.remove('fixed-btn-visible');
		goToTop.style.display = 'none';
	}
});

// scroll to top when click the button
goToTop.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
});

/* End Go To Top Button */
