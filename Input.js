class MouseInput {
	
	static updateMousePos(evt) {
		var rect = World.canvas.getBoundingClientRect();
		var root = document.documentElement;
		
		MouseInput.x = evt.clientX - rect.left - root.scrollLeft;
		MouseInput.y = evt.clientY - rect.top - root.scrollTop;
		
	}
}
MouseInput.x = 0
MouseInput.y = 0