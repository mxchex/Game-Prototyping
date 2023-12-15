//Declare my variables

var canvas;
var context;
var timer;
var interval;
var player;
var box1;
var box2;
var select;

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new GameObject();
	player.force = 1;

	box1 = new GameObject();
	box1.x = canvas.width/3;
	box2 = new GameObject();
	box2.x = canvas.width/6;
	
	select = new GameObject();

	follower = new GameObject();
	follower.x = 0;
	follower.y = 0;
	
	//friction
	var fX = .80;
	var fY = .80;
	
	var angle = 0;
	
	//gravity gets added to the vy
	var gravity = 0;

	interval = 1000/60;
	timer = setInterval(animate, interval);
	

function animate()
{
	
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	/*-----------This function move the player-----------*/
	//w and s move forward and backward
	//a and d rotate the triangle
	//angularMovement();
	
	/*-----------These move the follower-----------------*/
	//magnet(); //- eases the follower towards the player - 
	//point(); //- points at the player
	//follow(); //- follows the player
	//orbit(); //- orbits the player using physics
	//revolve(); //- orbits the player without physics.
	//sinWave(); //- moves the follower in a sin wave pattern from left to right

	if(select.x <= canvas.width/6 + 10)
	{
		a = false;
	}
	if(select.x + select.width >= canvas.width/2 +10)
	{
		d = false;
	}
	
	if(E == true)
	{
		if(select.x == canvas.width/2)
		{
			player.angle = player.angle + 45;
			E = false;
		}
		else if(select.x = canvas.width/3)
		{
			box1.angle = box1.angle + 45;
			E = false;
		}
		else if(select.x = canvas.width/6)
		{
			box2.angle = box2.angle + 45;
			E = false;
		}
	}
	if(q == true)
	{
		if(select.x == canvas.width/2)
		{
			player.angle = player.angle - 45;
			q = false;
		}
		else if(select.x = canvas.width/3)
		{
			box1.angle = box1.angle - 45;
			q = false;
		}
		else if(select.x = canvas.width/6)
		{
			box2.angle = box2.angle - 45;
			q = false;
		}
	}
	
	if(a == true)
	{
		select.x = select.x - (canvas.width/6);
		a = false;
	}
	if(d == true)
	{
		select.x = select.x + (canvas.width/6);
		d = false;
	}
	
	
	select.drawSelect();
	player.drawRect();
	box1.drawRect();
	box2.drawRect();
}

