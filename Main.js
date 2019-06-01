
window.onload = function() {
	var gameWorld = new World();

	var player = new GameObject(300,300,50,50,'teste.png');


	var rect = new Rect(20,20,20,100,'red');
	rect.velocityY = 0.2

	var circle = new Circle(200,200,20,'red');
	circle.velocityX = 0.2
	circle.velocityY = 0.2

	var text = new Text("Esse é um pequeno exemplo", 500,500,'green')
	
	text.followMouse = true;

	gameWorld.addObject(rect);
	gameWorld.addObject(text);
	gameWorld.addObject(circle);
	gameWorld.addObject(player);
	
	
	gameWorld.init();
}



