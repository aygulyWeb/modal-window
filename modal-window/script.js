const modalOpen = document.querySelector('.modal-link');
const modalWrap = document.querySelector('.modal-wrap');
const modalClose = document.querySelector('.modal-close');


modalOpen.addEventListener('click', () => {
	modalWrap.style.display = 'block';

})

modalClose.addEventListener('click', () => {
	modalWrap.style.display = 'none';
})