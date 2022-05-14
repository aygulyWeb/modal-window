const modalOpen = document.querySelector('.modal-link');
const modalWrap = document.querySelector('.modal-wrap');
const modalClose = document.querySelector('.modal-close');


modalOpen.addEventListener('click', () => {
	modalWrap.style.opacity = '1';
	modalWrap.style.visibility = 'visible';
})

modalClose.addEventListener('click', () => {
	modalWrap.style.opacity = '0';
	modalWrap.style.visibility = 'hidden';
})