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
// Отложенное выполнение кода через setTimeout. |||||||||||||||||||||||||||||||
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Выполняются не чётные срабатывания resize.

// let resized;

// window.addEventListener('resize', function(e) {
// 	if(resized){
// 		resized = false;
// 	}
// 	else{
// 		resized = true;
// 		document.body.innerHTML += '<br> resize';
// 	}
// });



										// Исследование доказывающее, что последнее срабатывание resize выполняет нужный код.
										// Если потянуть мышью сторону окна, то можно увидеть, что срабатываний resize было много и что код выполнился на последнем срабатывании.

let resized;
let counter = 0; /* ИСЛЕДОВАНИЕ - счётчик срабатывания resize */

window.addEventListener('resize', function(e) {
	counter += 1; /* ИСЛЕДОВАНИЕ - увеличение счётчика на 1 */
	if(resized){
		resized = false;
	}
	else{
		resized = true;
		document.body.innerHTML += '<br> resize' + counter;
		// counter = 0; /* ИСЛЕДОВАНИЕ - обнуление счётчика */
	}
});
/*
0	false
1	vvv		true
2	xxx		false
3	vvv		true
4	xxx		false
5	
Выполняются не чётные срабатывания resize
*/















// const block = document.querySelector('.block');
// let counter = 0; /* иследование */

// let resizeTimer;

// const html = document.querySelector('html'); /* для не реагирования на вертикальный resize */
// let widthHtml = html.offsetWidth; /* для не реагирования на вертикальный resize */
// let newWidthHtml; // для не реагирования на вертикальный resize 








// window.addEventListener('resize', function(e) {
// 	newWidthHtml = html.offsetWidth; /* для не реагирования на вертикальный resize */
// 	if (widthHtml != newWidthHtml) { /* для не реагирования на вертикальный resize */
// 		widthHtml = newWidthHtml;  для не реагирования на вертикальный resize 
// 		counter += 1; /* иследование */
// 		if (resizeTimer){
// 			clearTimeout(resizeTimer);
// 		}
// 		resizeTimer = setTimeout(function() {

// 			block.innerHTML += '<br> resize';
// 			console.log(counter); /* иследование */

// 			}, 300);
// 	} /* для не реагирования на вертикальный resize */
// });





// var doc = document; //To access the dom only once
// var cWidth = doc.body.clientWidth;
// var newWidth = cWidth; //If you want a log to show at startup, change to: newWidth = 0
// window.onresize = function (){
// 	newWidth = doc.body.clientWidth;
// 	if(cWidth != newWidth){
// 		cWidth = newWidth;
// 		console.log("clientWidth:", cWidth); //instead of alert(cWidth);
// 	};
// };










// ----------------------------------------------------------------------------------------------------------------------------
// html.addEventListener('click', function() {alert(widthHtml)})
