let gameScene = new Phaser.Scene('Game');

gameScene.preload = function(){
    this.load.image('background', 'assets/background.png');
    this.load.image('player', 'assets/player.png');
    
}

gameScene.create = function(){
    //background
    let bg = this.add.sprite(0, 0,'background');
    bg.setPosition(640/2,360/2);

    //player
    let player = this.add.sprite(50,180,'player');
    player.depth = 1;
    player.setScale(0);
};


let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 360,
    scene: gameScene
};

let game = new Phaser.Game(config);