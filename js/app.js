let burger = document.querySelector('.burger');
let menuBlockBurger = document.querySelector('.menu__block-burger');
let menuLinks = document.querySelectorAll('.menu__item-link');
let layout = document.querySelector('.layout');
let header = document.querySelector('.header')
const iconMenu = document.querySelector('.menu__icon');

burger.addEventListener("click", function (e) {
	menuBlockBurger.classList.toggle('open');	
	iconMenu.classList.toggle('_active');
	layout.classList.toggle('active')
	header.classList.toggle('active')
})


menuLinks.forEach(menuLink => {
	menuLink.addEventListener('click', (e) => {		
		menuBlockBurger.classList.remove('open');
		iconMenu.classList.remove('_active');
		layout.classList.remove('active')
		header.classList.remove('active')
	})
})

layout.addEventListener('click', () => {
	layout.classList.remove('active')
	header.classList.remove('active')
	menuBlockBurger.classList.remove('open')
	iconMenu.classList.remove('_active');
})




