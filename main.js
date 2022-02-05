x = 0;
y = 0;

circle = '';
rect = '';
tri = '';
sq = '';
flower = '';

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function setup() {
	canvas = createCanvas(900, 600);
}

function draw() {
	if(circle = 'set'){
		radius = Math.floor(Math.random() * 100);
		circle(x, y, radius);
		document.getElementById('status').innerHTML = 'Circle is drawn.';
		circle = '';
	}

	if(rec = 'set'){
		rect(x, y, 90, 70);
		document.getElementById('status').innerHTML = 'Rectangle is drawn.';
		rec = '';
	}
}

function start() {
	document.getElementById('status').innerHTML = 'System is listening, please speak.';
	recognition.start();
}

recognition.onresult = function(event) {
	console.log(event);
	
	content = event.results[0][0].transcript;

	document.getElementById('status').innerHTML = 'The speech has been recognised as: ' + content;

	if((content == 'circle') || (content == 'draw a circle')){
		x = Math.floor(Math.random() * 900);
		y = Math.floor(Math.random() * 600);
		document.getElementById('status').innerHTML = 'Started drawing circle.';
		circle = 'set';
	}

	if((content == 'rectangle') || (content == 'draw a rectangle')){
		x = Math.floor(Math.random() * 900);
		y = Math.floor(Math.random() * 600);
		document.getElementById('status').innerHTML = 'Started drawing rectangle.';
		rec = 'set';
	}

	if((content == 'triangle') || (content == 'draw a triangle')){
		x = Math.floor(Math.random() * 900);
		y = Math.floor(Math.random() * 600);
		document.getElementById('status').innerHTML = 'Started drawing triangle.';
		tri = 'set';
	}

	if((content == 'square') || (content == 'draw a square')){
		x = Math.floor(Math.random() * 900);
		y = Math.floor(Math.random() * 600);
		document.getElementById('status').innerHTML = 'Started drawing square.';
		sq = 'set';
	}

	if((content == 'flower') || (content == 'draw a flower')){
		x = Math.floor(Math.random() * 900);
		y = Math.floor(Math.random() * 600);
		document.getElementById('status').innerHTML = 'Started drawing flower.';
		flower = 'set';
	}

}