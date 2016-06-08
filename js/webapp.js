var animationBox = $('.animation-box');
var i = 0;

setInterval(
	function(){

	animationBox.css('margin-left', i);

	i = i + 1;

	if(i == 100)
	{
		i = 0;
	}

}, 100)


// 1 secunda = 1000 milisecunde
// 1 data in 100 milisecunde

// intr-o secunda functia se va executa 10 ori (1000 / 100)

