/* Start website loader */
const body = document.querySelector('body');
body.onload = () => {
	setTimeout(showPage, 9000);
};

const showPage = () => {
	document.getElementById('loader').style.display = 'none';
	document.getElementById('root-container').style.display = 'block';
};
/* End website loader */