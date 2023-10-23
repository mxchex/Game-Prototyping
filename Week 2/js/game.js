//Declare my variables

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
timer = setInterval(animate, 1000/60);

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
	
	var player1 = new GameObject();
	
	player1.width = 25
	player1.height = 150
	player1.x = player1.width/2
	

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	
	//Move the Player to the right
	if(w)
	{
		console.log("Moving Up");
		player1.y += -2;
	}
	if(s)
	{
		console.log("Moving Down");
		player1.y += 2;
	} 
	
	//Update the Screen
	player1.drawRect()
}

