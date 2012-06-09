#pragma strict

var frontTires : WheelCollider[];
var rearTires : WheelCollider[];

function Start () {

}

function Update () 
{
	//Debug.Log(frontTires[0].rpm);
	
	for(var tire in frontTires)
	{
		var accy = Input.acceleration.y;
		accy = Mathf.Clamp(accy, -0.2, 0.2);
		
		tire.steerAngle = accy * -50.0;
	}
	
	if(Input.GetMouseButton(0))
	{
		for(var tire in rearTires)
		{
			if(tire.rpm < 100.0) tire.motorTorque = 10;
			else tire.motorTorque = 0;
			
			tire.brakeTorque = 0;
		}
	}
	else
	{
		for(var tire in rearTires)
		{
			tire.motorTorque = 0;
			tire.brakeTorque = 50;
		}
	}

}