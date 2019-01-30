function Square(ctx, width, height, color, x, y, dx, dy) {
	this.context = context
	this.width = width;
	this.height = height;
	this.dx = dx;
	this.dy = dy;
	this.x = x;
	this.y = y;

	this.update = function() {
		this.context.fillStyle = color;
		this.context.fillRect(this.x, this.y, this.width, this.height)
		this.x += this.dx;
		this.y += this.dy;
	}

	this.setSpeed = function(dx, dy) {
		this.dx = dx;
		this.dy = dy;
	}
}
