// ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ
const html = document.querySelector('html');





// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// pcOrTouch.js Определение устройства - тачскрин или с мышью. ||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||



/*
1) Код определяет на каком устройстве (точнее в каком браузере) открыта страница: на тачскрине или на устройстве с мышью.
2) Далее, если тачскрин, то для <html> добавляется класс _touch, а если устройство с мышью, то <html> добавляется класс _pc.
*/



const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};

if (isMobile.any()) {
	html.classList.add('_touch');
} else {
	html.classList.add('_pc');
}