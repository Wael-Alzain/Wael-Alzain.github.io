/* Start website loader */
const body = document.querySelector('body');
body.onload = () => {
	setTimeout(showPage, 2000);
};

const showPage = () => {
	document.getElementById('loader').style.display = 'none';
	document.getElementById('root-container').style.display = 'block';
};
/* End website loader */

/* Start Go To Top Button */
const goToTop = document.querySelector('.fixed-btn');

document.addEventListener('scroll', () => {
	if (window.scrollY > 200) {
		goToTop.style.display = 'block';
	} else {
		goToTop.style.display = 'none';
	}
});

goToTop.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
});

/* End Go To Top Button */

/* Start toggle menu button */
const toggleMenuBTN = document.querySelector('header nav .toggle-menu');
const menu = document.querySelector('header nav ul');
toggleMenuBTN.onclick = () => {
	menu.classList = 'show-menu';
}
/* End toggle menu button */

/* Start close menu button */
const closeMenuBTN = document.querySelector('header nav ul .close-menu')
closeMenuBTN.onclick = () => {
	menu.style.display = 'none';
	menu.classList = ' '
}
/* End close menu button */


/* Start search input */
const searchBTN = document.querySelector('header .form');
const searchContainer = document.querySelector('header .search-container');
const searchCloseBTN = document.querySelector('header .search-container i');

searchBTN.onclick = () => {
	searchContainer.style.opacity = 1;
	searchContainer.style.pointerEvents = 'initial';
	menu.classList = ' '
	menu.style.display = 'none'
};

searchCloseBTN.onclick = () => {
	searchContainer.style.opacity = 0;
	searchContainer.style.pointerEvents = 'none';
};

/* End search input */

/* Start Landing section carousel slider */

const imagesPaths = [
	'https://wael-alzain.github.io/Kasper/images/landing1.jpg',
	'https://wael-alzain.github.io/Kasper/images/landing2.jpg',
	'https://wael-alzain.github.io/Kasper/images/landing3.jpg'
];
const landingElm = document.querySelector('.landing');
const landingBullets = document.querySelectorAll('.landing .bullets li');

let counter = 0;
setInterval(function() {
	landingElm.style.backgroundImage = `url(${imagesPaths[counter]})`;
	for (let i = 0; i < landingBullets.length; i++) {
		landingBullets[i].classList = '';
	}
	landingBullets[counter].classList = 'active';
	counter++;
	if (counter > 2) {
		counter = 0;
	}
}, 2500);

for (let i = 0; i < landingBullets.length; i++) {
	landingBullets[i].onclick = () => {
		landingElm.style.backgroundImage = `url(${imagesPaths[i]})`;
		document.querySelector('.landing .bullets li.active').classList = '';
		landingBullets[i].classList = 'active';
		counter = i;
	};
}

/* End Landing section carousel slider */

/* Start portfolio section shuffling */

const listItems = document.querySelectorAll('.shuffle li');

const shuffleEffect = (category) => {
	if (category === 'All') {
		const imageBoxes = document.querySelectorAll('.imgs-container .box');
		imageBoxes.forEach((imageBox) => {
			imageBox.style.opacity = 1;
			imageBox.style.pointerEvents = 'initial';
		});
		return;
	}

	const imageBoxes = document.querySelectorAll(`.imgs-container .box:not([data-cat='${category}'])`);

	imageBoxes.forEach((imageBox) => {
		imageBox.style.opacity = 0.2;
		imageBox.style.pointerEvents = 'none';
	});

	const imageBoxesRequired = document.querySelectorAll(`.imgs-container .box[data-cat='${category}']`);

	imageBoxesRequired.forEach((imageBox) => {
		imageBox.style.opacity = 1;
		imageBox.style.pointerEvents = 'initial';
	});
};

for (let i = 0; i < listItems.length; i++) {
	listItems[i].onclick = () => {
		for (let j = 0; j < listItems.length; j++) {
			listItems[j].classList = '';
		}
		listItems[i].classList = 'active';
		shuffleEffect(listItems[i].textContent);
	};
}
/* End portfolio section shuffling */

/* Start Testimonials section carousel slider */
const slides = document.querySelectorAll('.testimonials .testimonials-slider');
const dots = document.querySelectorAll('.testimonials .dots a');
let index = 0;
setInterval(function() {
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
		slides[i].classList = 'testimonials testimonials-slider';
		dots[i].classList = '';
	}
	slides[index].style.display = 'block';
	slides[index].classList = 'testimonials testimonials-slider active';
	dots[index].classList = 'active';
	index++;
	if (index > 2) {
		index = 0;
	}
}, 2000);

for (let i = 0; i < dots.length; i++) {
	dots[i].onclick = () => {
		document.querySelector('.testimonials .dots a.active').classList = '';
		dots[i].classList = 'active';
		let activeSlide = document.querySelector('.testimonials .testimonials-slider.active');
		activeSlide.style.display = 'none';
		activeSlide.classList = 'testimonials testimonials-slider';
		slides[i].style.display = 'block';
		slides[i].classList = 'testimonials testimonials-slider.active';

		index = i;
	};
}
/* End Testimonials section carousel slider */
