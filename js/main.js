// ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ
const html = document.querySelector('html');










// Основное меню. |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
const logo = document.querySelector('.logo');
const login = document.querySelector('.login');
const messengers = document.querySelector('.messenger-group');
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const menuContent = document.querySelector('.menu .wrapper');



					// Основное меню. Кнопка-бургер меню. |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
if (burger) {
	burger.addEventListener('click', function (e) {
		burger.classList.toggle('menu-active');
		menu.classList.toggle('menu-active');

		if(burger.classList.contains('menu-active')) {
			lockPageScroll();
		} else {
			unlockPageScroll();
		}


	});
}



					// Основное меню. Перемещение мессенджеров и кнопок авторизации в зависимости от ширины страницы. |
function changeDeviceDOM() {
	if(window.innerWidth <= 600) {
		menuContent.prepend(messengers);
		menuContent.append(login);
	} else if ((window.innerWidth > 600) && (window.innerWidth <= 900)) {
		logo.after(messengers);
		menuContent.append(login);
	} else {
		logo.after(messengers);
		messengers.after(login);
	}
}

changeDeviceDOM();

window.addEventListener('resize', function() {
	changeDeviceDOM();
});





// Блокировка / разблокировка скрола на станице |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
const scrollSwingContent = document.querySelectorAll('html, .scroll-swing-content');
const scrollSwingEl = document.querySelectorAll('.scroll-swing-elem');
const widthScroll = window.innerWidth - html.offsetWidth;
let statusLockScroll = false;

function lockPageScroll() {
	if (statusLockScroll === false) {
		for (let index = 0; index < scrollSwingContent.length; index++) {
			const current = scrollSwingContent[index];
			current.style.paddingRight = (+(getComputedStyle(current).paddingRight.replace('px', '')) + widthScroll + 'px');
		}
		for (let index = 0; index < scrollSwingEl.length; index++) {
			const current = scrollSwingEl[index];
			current.style.marginRight = (+(getComputedStyle(current).marginRight.replace('px', '')) + widthScroll + 'px');
		}
		html.classList.add('lock-scroll');
		statusLockScroll = true;
	}
}

function unlockPageScroll() {
	if (statusLockScroll === true) {
		for (let index = 0; index < scrollSwingContent.length; index++) {
			const current = scrollSwingContent[index];
			current.style.paddingRight = (+(getComputedStyle(current).paddingRight.replace('px', '')) - widthScroll + 'px');
		}
		for (let index = 0; index < scrollSwingEl.length; index++) {
			const current = scrollSwingEl[index];
			current.style.marginRight = (+(getComputedStyle(current).marginRight.replace('px', '')) - widthScroll + 'px');
		}
		html.classList.remove('lock-scroll');
		statusLockScroll = false;
	}
}





// Слайдер SWIPER. ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
new Swiper('.intro-slider', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
}); 












													// let group = document.querySelectorAll('.burger, .login');
													// for (let index = 0; index < group.length; index++) {
													// 	const current = group[index];
													// 	current.classList.add('test');
													// }
