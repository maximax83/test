// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Отложенное выполнение кода через setTimeout. |||||||||||||||||||||||||||||||
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// let resizeTimer;

// window.addEventListener('resize', function(e) {
// 	if (resizeTimer){
// 		clearTimeout(resizeTimer); // Вызов clearTimeout() отменяет ранее установленный вызов функции setTimeout(), если она ещё не была выполнена. Чтобы иметь возможность использовать функцию clearTimeout(), нужно использовать переменную для хранения значения, возвращаемого setTimeout().
// 	}
// 	resizeTimer = setTimeout(function() {
// 		document.body.innerHTML += '<br> resize'; /* Желаемый код при resize - изменении размера окна браузера/смены ориентации экрана девайса */
// 		}, 300);
// });



										// Исследование доказывающее, что последнее срабатывание resize выполняет нужный код.
										// Если потянуть мышью сторону окна, то можно увидеть, что срабатываний resize было много и что код выполнился на последнем срабатывании.

										// let resizeTimer;
										// let counter = 0; /* ИСЛЕДОВАНИЕ - счётчик срабатывания resize */

										// window.addEventListener('resize', function(e) {
										// 	counter += 1; /* ИСЛЕДОВАНИЕ - увеличение счётчика на 1 */
										// 	if (resizeTimer){
										// 		clearTimeout(resizeTimer);
										// 	}
										// 	resizeTimer = setTimeout(function() {
										// 		document.body.innerHTML += '<br> resize' + counter; /* В желаемый код при resize добавляется значение счётчика, показывающее на каком срабатывании resize произошло выполнение данного кода */
										// 		// counter = 0; /* ИСЛЕДОВАНИЕ - обнуление счётчика */
										// 		}, 300);
										// });





// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Отложенное выполнение кода через setTimeout с игнорированием вертикального (или горизонтального) resize. |||||||||||
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// let widthHtml = document.documentElement.offsetWidth;
// let newWidthHtml;
// let resizeTimer;



// window.addEventListener('resize', function(e) {
// 	newWidthHtml = document.documentElement.offsetWidth;;
// 	if (widthHtml != newWidthHtml) {
// 		widthHtml = newWidthHtml;
// 		if (resizeTimer){
// 			clearTimeout(resizeTimer);
// 		}
// 		resizeTimer = setTimeout(function() {
// 			document.body.innerHTML += '<br> resize';
// 			}, 300);
// 	}
// });












let widthHtml = document.documentElement.offsetWidth;
let newWidthHtml;
let resizeTimer;



let counter = 0; /* иследование */



window.addEventListener('resize', function(e) {
	newWidthHtml = document.documentElement.offsetWidth;;
	if (widthHtml != newWidthHtml) {
		widthHtml = newWidthHtml;
		counter += 1; /* иследование */
		if (resizeTimer){
			clearTimeout(resizeTimer);
		}
		resizeTimer = setTimeout(function() {
			document.body.innerHTML += '<br> resize' + counter; /* иследование */
			}, 300);
	}
});










// ----------------------------------------------------------------------------------------------------------------------------
// html.addEventListener('click', function() {alert(widthHtml)})
