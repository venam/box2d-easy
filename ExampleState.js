function ExampleState(game) {
	State.call(this,game);
	this.bodiesState  = null;

	this.world = new Array(); //the world contains all the objects
	this.initialState = [
		{ //that's how to declare a circle
			id:0,
			x:10.5,
			y:4.4,
			radius: 0.3,
			dynamic: false,
			type: "circle",
			color: "#9187af"
		},
		{
			id:1,
			x:9.2,
			y:10.4,
			angle: 0.1,
			halfWidth:4.8,
			halfHeight:0.2,
			dynamic: true,
			type: "rectangle",
			color: "#9187af"
		}
	];
	this.init();
}

ExampleState.prototype = new State();
ExampleState.prototype.constructor = ExampleState;

ExampleState.prototype.draw = function() {
	this.game.ctx.clearRect(0, 0, this.game.canvasWidth, this.game.canvasHeight);
	this.game.ctx.fillStyle = "#424242";
	this.game.ctx.fillRect(0,0,600,680);
	this.game.ctx.textAlign = "center";
	this.game.ctx.fillStyle = "#FFF";
	this.game.ctx.font = "20px Helvetica";
	this.game.ctx.fillText("Bean Machine", 90, 20);
	this.game.ctx.fillRect(30,28, 200, 3);
	for (var id in this.world) {
		var entity = this.world[id];
		entity.draw(this.game.ctx);
	}
}

//update all that is happening (called 60/s)
ExampleState.prototype.update = function(animStart) {
	this.box.update();
	this.bodiesState = this.box.getState();
	for (var id in this.bodiesState) {
		var entity = this.world[id];
		if (entity) {
			entity.update(this.bodiesState[id]);
		}
	}
};

//handles events recorded in this.keysDown
ExampleState.prototype.eventsCallbacks = function() {
};

//Handle pointer events
ExampleState.prototype.pDown = function(e) {
	//console.log(e);
}

ExampleState.prototype.pUp = function(e) {
}

ExampleState.prototype.pMove = function(e) {
}

ExampleState.prototype.init = function() {
	//fill the world with all the objects
	for (var i in this.initialState) {
		this.world[i] = Entity.build(this.initialState[i]);
	}
	this.box = new bTest(90, false, this.game.canvasWidth, this.game.canvasHeight, SCALE);

	this.box.setBodies(this.world);

	this.box.addContactListener({
		BeginContact: function(idA, idB) {
			//console.log('b');
		},
		PostSolve: function (idA, idB, impulse) {
			//console.log('ljkl');
		}
	});

}
