class Tank{

	constructor(x,y){
		this.sprite = TankOnLine.game.add.sprite(x,y,'tankDown');
		TankOnLine.game.physics.arcade.enable(this.sprite);
	}

	update(directionX, directionY){
		if(directionX < 0){
			this.sprite.body.velocity.x = -150;
			this.sprite.loadTexture('tankLeft');
		}
		else if(directionX > 0){
			this.sprite.body.velocity.x = 150;
			this.sprite.loadTexture('tankRight');
		}
		else{
			this.sprite.body.velocity.x = 0;
		}

		if(directionY < 0){
			this.sprite.body.velocity.y = -150;
			this.sprite.loadTexture('tankUp');
		}
		else if(directionY > 0){
			this.sprite.body.velocity.y = 150;
			this.sprite.loadTexture('tankDown');
		}
		else{
			this.sprite.body.velocity.y = 0;
		}

		
	}
}

class Bullet{
	constructor(x,y){
		this.sprite = TankOnLine.game.add.sprite(x,y,'bulletRight');
		TankOnLine.game.physics.arcade.enable(this.sprite);
	}

	update(directionX, directionY){
		if(directionX == 1){
			this.sprite.body.velocity.x = 5000;
		}
	}
}