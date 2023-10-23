//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	var timer = setInterval(animate, 1000/60);
	
	//Instantiate the Player
	player = new Player()
	timer.width = 200
	timer.vx = 2
	time.vy = -2;

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	time.move();
	
	time.draw();
}
