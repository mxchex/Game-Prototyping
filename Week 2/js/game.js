//Declare my variables
var ball;
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
timer = setInterval(animate, 1000/60);
var ball = new GameObject();

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
	var top = canvas.height - player1.height;
	var bottom = canvas.height - player1.height;
	
	player1.width = 25
	player1.height = 150
	player1.x = player1.width/2
	
	ball.vx = 5;
	ball.vy = 5;
	timer = setInterval(animate, interval);


function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//----Movement Using the Player's move() function----
	ball.move();

	//Move the ball to the right
	if(w)
	{
		console.log("Moving Up");
		player1.y += -4;
	}
	if(s)
	{
		console.log("Moving Down");
		player1.y += 4;
}
	if(player1.y - player1.height/2 < 0)
	{
		player1.y = 0 + player1.height/2;
	}

	if(player1.y  > canvas.height - player1.height/2)
	{
		player1.y = canvas.height - player1.height/2;
	}

	if (
		ball.x + ball.width / 2 > player1.x - player1.width / 2 &&
		ball.x - ball.width / 2 < player1.x + player1.width / 2 &&
		ball.y + ball.height / 2 > player1.y - player1.height / 2 &&
		ball.y - ball.height / 2 < player1.y + player1.height / 2
	  ) {
		// Collision detected with player1
		// Reverse the ball's horizontal direction
		ball.vx = -ball.vx;
	  }

	if(ball.x > canvas.width - ball.width/2)
	{
		ball.x = canvas.width - ball.width/2
		ball.vx = -ball.vx;	
	}

	/*if(ball.x < ball.width/2)
	{
		ball.x = ball.width/2;
		ball.vx = -ball.vx;
	}*/

	if(ball.y > canvas.height - ball.height/2)
	{
		ball.y = canvas.height - ball.height/2
		ball.vy = -ball.vy;	
	}

	if(ball.y < ball.height/2)
	{
		ball.y = ball.height/2;
		ball.vy = -ball.vy;	
	}
	//---------------------------------------------------
	
	//Update the Screen
	ball.drawCircle()
	player1.drawRect()
}


