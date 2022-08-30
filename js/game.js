let game = new Phaser.Game({
    width: 500,     //dimensions of the game
    height: 340,
    backgroundColor: '#3498db', //blue
    physics: {default : 'arcade'},  //physics engine
    parent: 'game',   //id of the div in index.html
});

game.scene.add('load', Load);
game.scene.add('menu', Menu);
game.scene.add('play', Play);

game.scene.start('load');