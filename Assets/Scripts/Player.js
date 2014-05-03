#pragma strict

var speed: int = 10;

function Update () {

	if (Input.GetButton("UP"))
	{
		transform.Translate(Vector3(0,speed,0) * Time.deltaTime);
	}
	
	if (Input.GetButton("DOWN"))
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
	