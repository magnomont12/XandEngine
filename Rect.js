class Rect extends Entity{
	constructor(posX, posY, width, height, color){
		super(posX, posY);
		this.color = color
		this.width = width;
		this.height = height;
	}

	draw(){
		Utils.colorRect(this.posX, this.posY, this.width, this.height, this.color);
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

	collision(AABB2){
		if(this.posX <= AABB2.posX + AABB2.width &&
			this.posX + this.width >= AABB2.posX &&
			this.posY <= AABB2.posY + AABB2.height &&
			this.posY + this.height >= AABB2.posY){
				 
				this.collider();
		}

		else if(this.posY > 500 || this.posY<0)
			this.collider()
	}

	collider(){
		this.velocityY = -this.velocityY
	}


}