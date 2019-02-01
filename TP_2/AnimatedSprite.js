function AnimatedSprite(context, width, height, image, frames_count) {
	this.context = context;
	this.frames_count = frames_count;
	this.width = width;
	this.height = height;
	this.image = image;
	this.frame_index = 0;
	this.sprite_width = width / frames_count;
	this.tick_count = 0;
	this.ticks_per_frame = 1;

	this.draw = function() {
		this.context.drawImage(
			this.image,
			this.frame_index * this.sprite_width,
			0,
			this.sprite_width,
			this.height,
			0,
			0,
			this.sprite_width,
			this.height
		);
	}

	this.update = function() {
		this.tick_count += 1;
		if (this.tick_count >= this.ticks_per_frame) {
			this.frame_index = (this.frame_index + 1) % this.frames_count;
			this.tick_count = 0;
		}
	}
}
