
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var ball;
var score = 0
timer = setInterval(animate, 1000/60);

var ball = new GameObject();
var paddle = new GameObject();

var gravity = 1
var frictionX = .85;	
var frictionY = .97;

ball.height = 80
ball.width = 80
ball.color = `magenta`
ball.vx = 1;
ball.vy = 0;
ball.x=canvas.width/2
ball.y=canvas.height/2
ball.force = 5;

paddle.height=40
paddle.width=250
paddle.color=`cyan`
paddle.x=canvas.width/2
paddle.y=canvas.height - 50
paddle.force = 2;



//----------------------------------------------------

function animate()
{
    context.clearRect(0,0,canvas.width, canvas.height);	

     // Movement
     

     if (a)
     {
         console.log("Left");
         paddle.vx += -2
     }
     if (d)
     {
         console.log("Right");
         paddle.vx += 2
     }

     paddle.vx *= frictionX;
     paddle.x += paddle.vx;

    //----------------Ball Move------------------
    //ball.vx *= frictionX;
    ball.vy *= frictionY;
	ball.vy += gravity;
    ball.move();

    //---------------Ball hit paddle-------------

    if(ball.hitTestObject(paddle))
    {
    ball.vy = paddle.y - ball.y/2 - paddle.y/2
    ball.vy = -35
    score = score +1

    //Collision--------------------------------------------------------------------------------------
    //inner
    if(ball.x < paddle.x - paddle.width/6)
    {
    ball.vx = -ball.force
    }

    if(ball.x < paddle.x + paddle.width /6)
    {
    ball.vx = -ball.force
    }

    //outter
    if(ball.x > paddle.x - paddle.width/3)
    {
    ball.vx = -ball.force
    }

    if(ball.x > paddle.x + paddle.width /3)
    {
    ball.vx = ball.force
    }

    //-------------------------------------------------------------------------------------------------
	
	//--------------Apply friction to the Velocity X-----------------------------------------
    context.clearRect(0,0,canvas.width, canvas.height);	
    
    }
    
    //-------------Bounce off Bottom---------------
	if(ball.y >= canvas.height -ball.height/2)
	{
		ball.y = canvas.height - ball.height
		ball.vy = -ball.vy
        ball.vy += gravity;
        ball.y += ball.vy;
        score = 0
	}

    //--------------Bounce off Top------------------
	if(ball.y <= 0 + ball.height/2)
	{
		ball.vy = -ball.vy;
	}

    //--------------Bounce Right---------------------
	if(ball.x > canvas.width - ball.width/2)
	{
		ball.x = canvas.width - ball.width/2
		ball.vx = -ball.vx;
	}

    //--------------Bounce Left----------------------
	if(ball.x < 0 +ball.width/2)
	{
		ball.x = 0 + ball.width/2
		ball.vx = -ball.vx;
	}

    //--------------Paddle Collision Left--------------
    if (paddle.x < 0 + paddle.width /2)
    {
        paddle.x = 0 + paddle.width /2
    }

    //--------------Paddle Collision Right--------------
    if (paddle.x > canvas.width - paddle.width /2)
    {
        paddle.x = canvas.width - paddle.width /2
    }

    //-----------------Line----------------------
    context.save();

    context.strokeStyle = "gray";
    context.lineWidth = 5;

    // Begin a Path
    context.beginPath();
    context.moveTo(ball.x, ball.y);
    context.lineTo(paddle.x, paddle.y);
    context.closePath();

    // Draw the Path
    context.stroke();
    context.restore();
    
    //-----------------Write----------------------
    context.font = "16px Arial";
    context.fillText("Score", 0 + ball.width/2, ball.width/2);
    context.fillText(score, 0 + ball.width + ball.width/2, ball.width/2);
    //-----------------Draw----------------------
    ball.drawCircle()
    paddle.drawRect()
}
