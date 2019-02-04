function Player(context, x, y) {
  this.context = context;
  var sprite_sheet = new Image();
  sprite_sheet.src = "./hero_walk_cycle.png";
  this.sprite = new AnimatedSprite(context, 512, 512, sprite_sheet, 4, 4);
  this.x = x;
  this.y = y;
  this.dx = 0;
  this.dy = 0;

  this.draw = function() {
    this.sprite.draw();
  }

  this.update = function() {
    if (this.dx != 0 || this.dy != 0) {
        if (this.dx > 0) this.sprite.animation_index = 1
        else if (this.dx < 0) this.sprite.animation_index = 0
        else if (this.dy > 0) this.sprite.animation_index = 2
        else if (this.dy < 0) this.sprite.animation_index = 3
        this.sprite.update();
    }
    this.x += this.dx;
    this.y += this.dy;
    this.sprite.x = this.x - 64;
    this.sprite.y = this.y - 128;
  }

  this.setSpeed = function(dx, dy) {
    this.dx = dx;
    this.dy = dy;
  }
}
