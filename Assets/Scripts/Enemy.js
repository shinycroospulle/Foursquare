#pragma strict

var speed: int = 10;
var ball: GameObject;

function Update () 
{

	if (ball.transform.position.y > transform.position.y)
	{
		transform.Translate(Vector3(0,speed,0) * Time.deltaTime);
	}
	
	if (ball.transform.position.y < transform.position.y)
	{
		transform.Translate(Vector3(0,-speed,0) * Time.deltaTime);
	}
	
	if (transform.position.y > 14)
	{
		transform.position.y = 14;
	}
	
	if (transform.position.y < - 12)
	{
		transform.position.y = - 12;
	}
}