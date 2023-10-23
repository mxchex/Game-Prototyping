//Declare my variables

var canvas;
var context;
var interval = 1000/60;

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	var timer = setInterval(animate, 1000/60);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	time.move();
	
	time.drawCircle();
}
