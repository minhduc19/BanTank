class Tank{
  constructor(x, y,group){
    this.sprite = group.create(x,y,'tankDown');
    TankOnline.game.physics.arcade.enable(this.sprite);
    this.sprite.anchor.set(0.5,0.5);
    this.direction = new Phaser.Point(0,1);
    this.lastShortTime = TankOnline.game.time.now;
    this.sprite.body.collideWorldBounds = true; //không cho tank chạy ra ngoài màn hình 
    this.sprite.health = 5;

  }

  update(direction){
    if(direction.x < 0){
      this.sprite.body.velocity.x = -250;
      this.sprite.loadTexture('tankLeft');
      this.direction = new Phaser.Point(-1,0);
    }
    else if (direction.x > 0){
      this.sprite.body.velocity.x = 250;
      this.sprite.loadTexture('tankRight');
      this.direction = new Phaser.Point(1,0);
    }
    else{
      this.sprite.body.velocity.x = 0;
    }

    if(direction.y < 0){
      this.sprite.body.velocity.y = -250;
      this.sprite.loadTexture('tankUp');
      this.direction = new Phaser.Point(0,-1);
    }
    else if (direction.y > 0){
      this.sprite.body.velocity.y = 250;
      this.sprite.loadTexture('tankDown');
      this.direction = new Phaser.Point(0,1);
    }
    else{
      this.sprite.body.velocity.y = 0;
    }
  }

  fire(){
    if(TankOnline.game.time.now - this.lastShortTime > 200){
      this.lastShortTime = TankOnline.game.time.now;
      new Bullet(this);
    }
    
  }
}
