Example Of a Box2d Easy Render
------------------------------

This is the engine I wrote for gravityguy.

You can easily add shape to the world:
```
{
	x:19.8,
	y:1.2,
	angle:0,
	halfWidth:0.64,
	halfHeight:0.2,
	dynamic:false,
	type: "rectangle",
	color: "#9187af"
},
{ //that's how to declare a polygon
	id:6,
	x:13.5,
	y:4.4,
	polys: [
		[{x: -2.5, y: 0.3}, {x: 0.0, y: 0.3}, {x: 0, y:4}], // triangle
	],
	dynamic:false,
	type: "polygon",
	color: "#9187af"
},
{ //that's how to declare a circle
	id:7,
	x:10.5,
	y:4.4,
	radius: 0.3,
	dynamic:true,
	type: "circle",
	color: "#9187af"
}
```
