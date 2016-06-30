var TankOnLine = {};
var BulletOnLine = {};
var tank;

window.onload = function () {
	TankOnLine.game = new Phaser.Game(window.innerWidth,
									  window.innerHeight,
									  Phaser.AUTO,
									  '',
									  {preload: preload, create: create, update: update});
	}

var preload = function (argument) {
	TankOnLine.game.load.image('tankDown', './images/tank_player1_down_c0_t1_s1.png');
	TankOnLine.game.load.image('tankUp', './images/tank_player1_up_c0_t1_s1.png');
	TankOnLine.game.load.image('tankLeft', './images/tank_player1_left_c0_t1_s1.png');
	TankOnLine.game.load.image('tankRight', './images/tank_player1_right_c0_t1_s1.png');
	TankOnLine.game.load.image('bulletRight', './images/bullet_right.png');
}

var create = function (argument) {
    tank = new Tank(window.innerWidth/2, window.innerHeight/2);
	TankOnLine.game.physics.startSystem(Phaser.Physics.ARCADE); //khởi động hệ thống vật lý 
	//TankOnLine.game.physics.arcade.enable(tank);
	TankOnLine.keyboard = TankOnLine.game.input.keyboard;
}



var update = function (argument) {
	var directionX, directionY;
	if(TankOnLine.keyboard.isDown(Phaser.KeyCode.LEFT)){
		directionX = -1;
	}
	else if (TankOnLine.keyboard.isDown(Phaser.KeyCode.RIGHT)){
		directionX = 1;
	}
	else{
		directionX = 0;
	}

	if(TankOnLine.keyboard.isDown(Phaser.KeyCode.UP)){
		directionY = -1;
	}
	else if (TankOnLine.keyboard.isDown(Phaser.KeyCode.DOWN)){
		directionY = 1;
	}
	else{
		directionY = 0;
	}

	tank.update(directionX,directionY); //class update
	if(TankOnLine.keyboard.isDown(Phaser.KeyCode.SPACEBAR)){
		bullet = new Bullet(window.innerWidth/2, window.innerHeight/2);
		directionX = 1;	
		bullet.update(directionX,directionY);
	}


}
	//btvn: đạn bắn ra, từ trung tâm màn hình : 