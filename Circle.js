class Circle extends Entity{
	constructor(posX, posY, radius, color){
		super(posX, posY);
		this.color = color
		this.radius = radius;
	}

	draw(){
		Utils.colorCircle(this.posX, this.posY, this.radius, this.color);
			}

	move(deltaTime){
		if(this.followMouse){
			this.posX = MouseInput.x;
			this.posY = MouseInput.y;
		}

		else{
			this.posX += this.velocityX * deltaTime;
			this.posY += this.velocityY * deltaTime;
		}
	}

	collision(AABB1){
		if(this.posY > 600 || this.posY < 0){
			this.collider();
			console.log("dsadsadas");
		}
		
	}

	collider(){
		this.velocityY = -this.velocityY
		this.velocityX = -this.velocityX
	}

}