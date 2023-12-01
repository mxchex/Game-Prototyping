
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var ball;
document.addEventListener("keydown", press);
document.addEventListener("keyup", release);
timer = setInterval(animate, 1000/60);
var ball = new GameObject();

var p1Wins = 0;
var p2Wins = 0;

ball.vx = 6;
ball.vy = 0;
ball.width = 25;
ball.height = 25;
ball.color = `black`

//----------------------------------------------------

var player1 = new GameObject();
var player2 = new GameObject();
player1.width = 10
player1.height = 100
player1.x = player1.width/2
player2.width = 10
player2.height = 100
player2.x = canvas.width - player2.width/2
player2.y = canvas.height/2
player2.color = `blue`

//Ball img
var img=document.getElementById("ric");

function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	

    // Movement
    if (Lup)
    {
        console.log("Moving Up");
        player1.y += -8
    }
    if (Ldown)
    {
        console.log("Moving Down");
        player1.y += 8
    }

    if (Rup)
    {
        console.log("Moving Up");
        player2.y += -8
    }
     if (Rdown)
    {
        console.log("Moving Down");
        player2.y += 8
    }


    //Collision Top
    if (player1.y < 0 + player1.height /2)
    {
        player1.y = 0 + player1.height /2
    }

    if (player2.y < 0 + player2.height /2)
    {
        player2.y = 0 + player2.height /2
    }
    //Collission Bottom
    if (player1.y > canvas.height - player1.height /2)
    {
        player1.y = canvas.height - player1.height /2
    }

    if (player2.y > canvas.height - player2.height /2)
    {
        player2.y = canvas.height - player2.height /2
    }

    //----------------Ball hit Paddle------------

    if(ball.hitTestObject(player1))
    {
        ball.x = player1.x + ball.width/2 + player1.width/2
        ball.vx = -ball.vx
        //Bottom
        if(ball.y < player1.y - player1.height/6)
        {
            ball.vy = - ball.vy + 1
        }
        //Top
        if(ball.y > player1.y + player1.height/6)
        {
            ball.vy = ball.vy +1
        }
            
        if(ball.x < player1.x - player1.height/6)
        {
            ball.vx = - ball.vx -1
        }
        //Top
        if(ball.x > player1.x + player1.height/3)
        {
            ball.vx = ball.vx + 1
        }
    }


   

	//----Movement Using the ball's move() function----
	ball.move();
	//---------------------------------------------------
	
	//--------------Kill&Score Right----------------------
	if(ball.x > canvas.width)
	{
		ball.x = canvas.width /2;
        ball.y = canvas.height /2;
		ball.vx = ball.vx;
        //score
        p1Wins = p1Wins +1
	}

    //--------------Kill&Score Left----------------------
	if(ball.x < 0 + ball.width/2)
	{
		ball.x = canvas.width /2;
        ball.y = canvas.height /2;
		ball.vx = ball.vx
        //score
        p2Wins = p2Wins +1
	}

	//--------------Bounce off Top----------------------
	if(ball.y > canvas.height - ball.height/2)
	{
		ball.y = canvas.height - ball.height/2
		ball.vy = -ball.vy;
	}

	//--------------Bounce off Bottom---------------------
	if(ball.y < ball.width/2)
	{
		ball.y = ball.width/2
		ball.vy = -ball.vy;
	}

    //-----------------Line----------------------
    context.save();

    context.strokeStyle = "gray";
    context.lineWidth = 5;

    // Begin a Path
    context.beginPath();
    context.moveTo(canvas.width/2, 1);
    context.lineTo(canvas.width/2, canvas.height);
    context.closePath();

    // Draw the Path
    context.stroke();
    context.restore();

    //-----------------Write----------------------
    context.font = "25px Arial";
    context.fillText("Score", canvas.width/2 - ball.width, 40);
    context.fillText(p1Wins, canvas.width/2 -ball.width, 80);
    context.fillText(p2Wins, canvas.width/2 +ball.width/2, 80);

    context.font = "30px Verdana";

    //-----------------Draw----------------------
    player1.drawRect()
    player2.drawRect()
    context.drawImage(ric, ball.x-15, ball.y-15, ball.width+10, ball.height+10);

}
