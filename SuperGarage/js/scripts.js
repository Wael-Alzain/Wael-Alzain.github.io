/* Start skitter */
$(document).ready(function() {
	$('.skitter-large').skitter({
		dots: false,
		label: false,
		navigation: true,
		stop_over: false
	});
});
/* End skitter */

/* Start website loader */
const body = document.querySelector('body');
body.onload = () => {
	setTimeout(showPage, 4000);
};

const showPage = () => {
	document.getElementById('loader-container').style.display = 'none';
};
/* End website loader */

/* Start Go to top */
//Get the button
var mybutton = document.getElementById('myBtn');

// When the user scrolls down 450px from the top of the document, show the button
window.onscroll = function() {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
		mybutton.style.display = 'block';
	} else {
		mybutton.style.display = 'none';
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

/* End Go to top */

/* Start Drop down menu */
// Add active class to the current button (highlight it)
var header = document.getElementById('nav-ul');
var btns = header.getElementsByClassName('nav-li');
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', function() {
		var current = document.getElementsByClassName('active');
		current[0].className = current[0].className.replace(' active', '');
		this.className += ' active';
	});
}

function showServices() {
	var x = document.getElementById('dropdown-id');
	var y = document.getElementById('services-menu-id');
	var z = document.getElementById('galleries-menu-id');

	if (x.style.display === 'none') {
		x.style.display = 'block';
		x.style.animation = 'opa 1s 1 linear';
		y.style.display = 'block';
		z.style.display = 'none';
	} else {
		x.style.display = 'none';
	}
}

function showGalleries() {
	var x = document.getElementById('dropdown-id');
	var y = document.getElementById('services-menu-id');
	var z = document.getElementById('galleries-menu-id');

	if (x.style.display === 'none') {
		x.style.display = 'block';
		x.style.animation = 'opa 1s 1 linear';
		z.style.display = 'block';
		y.style.display = 'none';
	} else {
		x.style.display = 'none';
	}
}

function myFunction(imgs) {
	var expandImg = document.getElementById('expandedImg');
	var imgText = document.getElementById('imgtext');
	expandImg.src = imgs.src;
	expandImg.parentElement.style.display = 'block';
}

function showSearchList() {
	var searchList = document.getElementById('searchUl');
	searchList.style.display = 'block';
}

function disapperSearchList() {
	var searchList = document.getElementById('searchUl');
	searchList.style.display = 'none';
}

function serviceSearch() {
	var input, filter, ul, li, a, i, txtValue;
	input = document.getElementById('myInput');
	filter = input.value.toUpperCase();
	ul = document.getElementById('searchUl');
	li = ul.getElementsByTagName('li');
	for (i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName('a')[0];
		txtValue = a.textContent || a.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = '';
		} else {
			li[i].style.display = 'none';
		}
	}
}
/* End Drop down menu */
