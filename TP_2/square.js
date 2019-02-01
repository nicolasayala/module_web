function Square(ctx, width, height, color, x, y, dx, dy) {
	this.context = context
	this.width = width;
	this.height = height;
	this.dx = dx;
	this.dy = dy;
	this.x = x;
	this.y = y;

	this.move = function(dx, dy) {
		this.x += dx;
		this.y += dy;
	}

	this.draw = function() {
		this.context.fillStyle = color;
		this.context.fillRect(this.x, this.y, this.width, this.height);
	}

	this.setSpeed = function(dx, dy) {
		this.dx = dx;
		this.dy = dy;
	}
}
