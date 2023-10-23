//Declare my variables

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
//var timer;
//1000 ms or 1 second / FPS
//var interval = 1000/60;
//var player;

	//Set Up the Canvas
	//canvas = document.getElementById("canvas");
	//context = canvas.getContext("2d");	
	
	//Instantiate the Player
	//player = new GameObject();

	//Set the Animation Timer
	timer = setInterval(animate, 1000/60);

	var player1 = new GameObject();
	player1.width = 10
	player1.height = 30
	player1.x = player1/2

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	
	//Move the Player to the right
	/*if(d)
	{
		console.log("Moving Right");
		player.x += 2;
	}
	if(a)
	{
		console.log("Moving Left");
		player.x += -2;
	} */
	
	//Update the Screen
	player.drawRect();
}

