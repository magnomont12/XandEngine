class CollisionAABB extends Observer{

	constructor(AABB1, AABB2){
		super()
		this.AABB1 = AABB1;
		this.AABB2 = AABB2;

	}

	notify(){

		if(this.AABB1.posX < this.AABB2.posX + this.AABB2.width &&
	       this.AABB1.posX + this.AABB1.width > this.AABB2.posX &&
	       this.AABB1.posY < this.AABB2.posY + this.AABB2.height &&
	       this.AABB1.posY + this.AABB1.height > this.AABB2.posY){
				
				return true;
	    }
	    else
	    	return false
	}

}