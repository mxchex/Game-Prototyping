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
	var player2 = new GameObject();
	var top = canvas.height - player1.height;
	var top = canvas.height - player2.height;
	var bottom = canvas.height - player1.height;
	var bottom = canvas.height - player2.height;

	var p1Wins = 0;
	var p2Wins = 0;
	var img=document.getElementById("ric");
	
	
	player1.width = 20
	player1.height = 150
	player1.x = player1.width/2

	player2.width = 20
	player2.height = 150
	player2.x = canvas.width - player2.width/2
	player2.y = canvas.height/2

	ball.width = 40;
	ball.height = 40;
	
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
		player1.y += -6;
	}
	if(s)
	{
		console.log("Moving Down");
		player1.y += 6;
}
	if(up)
	{
		console.log("Moving Up");
		player2.y += -6;
	}
	if(down)
	{
		console.log("Moving Down");
		player2.y += 6;
}

	context.save();
	context.strokeStyle = "yellow";
	context.beginPath();
	context.moveTo(canvas.width/2, canvas.height);
	context.lineTo(canvas.width/2, canvas.height-canvas.height);
	context.closePath();
	context.lineWidth = 5; 
	context.stroke();
	context.restore();

	if(player1.y - player1.height/2 < 0)
	{
		player1.y = 0 + player1.height/2;
	}

	if(player1.y  > canvas.height - player1.height/2)
	{
		player1.y = canvas.height - player1.height/2;
	}

	if(ball.hitTestObject(player1))
    {
        ball.x = player1.x + ball.width/2 + player1.width/2
        ball.vx = -ball.vx
        //Bottom
        if(ball.y < player1.y - player1.height/6)
        {
            ball.vy = ball.vy;
        }
        //Top
        if(ball.y > player1.y + player1.height/6)
        {
            ball.vy = ball.vy;
        }
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

	  if(player2.y - player2.height/2 < 0)
	{
		player2.y = 0 + player2.height/2;
	}

	if(player2.y  > canvas.height - player2.height/2)
	{
		player2.y = canvas.height - player2.height/2;
	}

	if(ball.hitTestObject(player1))
    {
        ball.x = player2.x + ball.width/2 + player2.width/2
        ball.vx = -ball.vx
        //Bottom
        if(ball.y < player2.y - player2.height/6)
        {
            ball.vy = ball.vy -5;
        }
        //Top
        if(ball.y > player2.y + player2.height/6)
        {
            ball.vy = ball.vy +5;
        }
    }

	if (
		ball.x + ball.width / 2 > player2.x - player2.width / 2 &&
		ball.x - ball.width / 2 < player2.x + player2.width / 2 &&
		ball.y + ball.height / 2 > player2.y - player2.height / 2 &&
		ball.y - ball.height / 2 < player2.y + player2.height / 2
	  ) {
		// Collision detected with player1
		// Reverse the ball's horizontal direction
		ball.vx = -ball.vx;
	  }

	  //right collision
	if(ball.x > canvas.width - ball.width/2)
	{
		ball.x = canvas.width/2;
		ball.y = canvas.height/2;
		ball.vx = -ball.vx;	
		//score
		p1Wins = p1Wins +1

	}

	if(ball.x < ball.width/2)
	{
		ball.x = canvas.width/2;
		ball.y = canvas.height/2;
		ball.vx = -ball.vx;
		p2Wins = p2Wins +1;
	}

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
	//score hud
	context.font = "25px Arial";
    context.fillText("Score", canvas.width/2 - ball.width, 40);
    context.fillText(p1Wins, canvas.width/2 -ball.width, 80);
    context.fillText(p2Wins, canvas.width/2 +ball.width/2, 80);


	//Update the Screen
	//ball.drawCircle()
	player1.drawRect()
	player2.drawRect()
	context.drawImage(img, ball.x-25, ball.y-25, ball.width+5, ball.height+10);
}


