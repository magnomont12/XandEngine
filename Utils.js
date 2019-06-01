class Utils {
	
	static colorRect(topLeftX,topLeftY, boxWidth,boxHeight, fillColor) {
		World.canvasContext.fillStyle = fillColor;
		World.canvasContext.fillRect(topLeftX,topLeftY, boxWidth,boxHeight);
	}

	static colorCircle(centerX,centerY, radius, fillColor) {
		World.canvasContext.fillStyle = fillColor;
		World.canvasContext.beginPath();
		World.canvasContext.arc(centerX,centerY,radius, 0,Math.PI*2, true);
		World.canvasContext.fill();
	}

	static colorText(showWords, textX,textY, fillColor) {
		World.canvasContext.fillStyle = fillColor;
		World.canvasContext.font = "30px serif";
		World.canvasContext.fillText(showWords, textX, textY);
	}

	static textureImage(nameSprite, posx, posy, width, height){
	var imgTag = new Image();
	imgTag.src = nameSprite;
	World.canvasContext.drawImage(imgTag, posx, posy,width,height);
	}

	static clearScreen() {
		Utils.colorRect(0,0, World.canvas.width,World.canvas.height, 'black');
	}

}
