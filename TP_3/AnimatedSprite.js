function AnimatedSprite(context, width, height, image, frames_count, animations_count) {
	this.context = context;
	this.frames_count = frames_count;
	this.animations_count = animations_count;
	this.width = width;
	this.height = height;
	this.x = 0;
	this.y = 0;
	this.image = image;
	this.frame_index = 0;
	this.animation_index = 0;
	this.sprite_width = width / frames_count;
	this.sprite_height = height / animations_count;
	this.tick_count = 0;
	this.ticks_per_frame = 5;

	this.draw = function() {
		this.context.drawImage(
			this.image,
			this.frame_index * this.sprite_width,
			this.animation_index * this.sprite_height,
			this.sprite_width,
			this.sprite_height,
			this.x,
			this.y,
			this.sprite_width,
			this.sprite_height
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
