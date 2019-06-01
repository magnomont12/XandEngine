class Text extends Entity{
	constructor(text, posX, posY, color){
		super(posX, posY);
		this.color = color
		this.text = text;
	}

	draw(){
		Utils.colorText(this.text, this.posX,this.posY, this.color);
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
	}

	collider(){	}


}