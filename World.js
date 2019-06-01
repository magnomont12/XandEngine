class World{

	constructor(){
		this.delta = 0;
		this.lastFrameTimeMs = 0;
		this.timeStep = 1000/60;
		this.entities = [];
		this.achievements = new Achievements();
	}

	init() {
		World.canvas = document.getElementById('gameCanvas');
		World.canvasContext = World.canvas.getContext('2d');
		requestAnimationFrame(this.mainLoop.bind(this));
		World.canvas.addEventListener('mousemove', MouseInput.updateMousePos);

	}

	mainLoop(timeStamp) {
		if(timeStamp < this.lastFrameTimeMs + this.timeStep) {
			requestAnimationFrame(this.mainLoop.bind(this));
			return;
		}
		this.delta += timeStamp - this.lastFrameTimeMs;
		this.lastFrameTimeMs = timeStamp;
		while(this.delta >= this.timeStep) { 
			this.moveEverything(this.timeStep);
			this.collisionEverything();
			this.delta -= this.timeStep;
		}
		this.drawEverything();
		this.achievements.notifyObservers();
		requestAnimationFrame(this.mainLoop.bind(this));
	}

	moveEverything(deltaTime) {	
		for (var i=0; i < this.entities.length; i++){
			this.entities[i].move(deltaTime);
		}
	}

	collisionEverything() {	
		for (var i=0; i < this.entities.length-1; i++){
			for(var j= i+1;j<this.entities.length; j++ ){
				this.entities[i].collision(this.entities[j]);
			}
		}
	}

	drawEverything() {
		Utils.clearScreen();

		for (var i=0; i < this.entities.length; i++)
			this.entities[i].draw();
	}

	addObject(Entity){
		this.entities.push(Entity)
	}

	addAchievement(Observer){
		this.achievements.addObserver(Observer)
	}

}