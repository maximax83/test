// ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ
const html = document.querySelector('html');




// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// lockPageScroll.js Блокировка / разблокировка скрола на станице |||||||||||||||||||||||||||||||||||||||||||||||||||||
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

const scrollSwingContent = document.querySelectorAll('html, .scroll-swing-content');
const scrollSwingEl = document.querySelectorAll('.scroll-swing-elem');
const widthScroll = window.innerWidth - html.offsetWidth;
let statusLockScroll = false;

// Функция блокировки скрола на странице и предотвращающая смещения элементов из-за появления/исчезновения скрол-бара.
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
// Функция разблокировки скрола на странице и предотвращающая смещения элементов из-за появления/исчезновения скрол-области.
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





// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Автоматический треугольник у многоуровневых пунктов и добавление/удаление класса при клике в мобильном меню. |||||||
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

const subList = document.querySelectorAll('.menu__sub-list');

for (let index = 0; index < subList.length; index++) {
	const current = subList[index];
	const currentParent = current.closest('.menu__item');
	currentParent.classList.add('multilevel');
	currentParent.addEventListener('click', function(e) {
		currentParent.classList.toggle('menu__item_active');
	});
}





// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Мобильное меню-бюргер. |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// Поведение при нажатии на бургер
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

if (burger) {
	burger.addEventListener('click', function (e) {
		if (burger.classList.contains('burger_active')) {
			unlockPageScroll();
		} else {lockPageScroll()}
		burger.classList.toggle('burger_active');
		menu.classList.toggle('menu_active');
	});
}
// Поведение при нажатии на ссылку в мобильном меню
const linkMenu = document.querySelectorAll('.menu .link');

linkMenu.addEventListener('click', function(e) {
	if (burger.classList.contains('burger_active')) {
		burger.classList.remove('burger_active');
		menu.classList.remove('menu_active');
		unlockPageScroll();
	}
});