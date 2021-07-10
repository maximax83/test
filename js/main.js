const block = document.querySelector('.block');
// block.innerHTML += '<br> resize';

let resizeTimer;

window.addEventListener('resize', function(e) {
	if (resizeTimer){
		clearTimeout(resizeTimer);
	}
	resizeTimer = setTimeout(function(){
		block.innerHTML += '<br> resize';
		}, 300);
});
