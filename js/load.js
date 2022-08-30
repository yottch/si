class Load{
    preload(){

        //load all assets

        //animation for player sprite
        this.load.spritesheet('player', 'assets/player2.png', {
            frameWidth: 20,
            frameHeight: 20
        });

        this.load.image('coin', 'assets/coin.png');
        this.load.image('wallV', 'assets/wallVertical.png');
        this.load.image('wallH', 'assets/wallHorizontal.png');
        this.load.image('background', 'assets/background.png');
        this.load.image('enemy', 'assets/enemy.png');
        this.load.image('pixel', 'assets/pixel.png');

        //load all audio
        this.load.audio('jump',['assets/jump.ogg', 'assets/jump.mp3']);
        this.load.audio('coin',['assets/coin.ogg', 'assets/coin.mp3']);
        this.load.audio('dead',['assets/dead.ogg', 'assets/dead.mp3']);
        
        //display a loading label
        let loadLabel = this.add.text(250, 170, 'loading\n0%', {font: '30px Arial', fill: '#fff', align: 'center'});

        //change the point of origin of the text
        //to make sure the text will be centered on the screen
        loadLabel.setOrigin(0.5, 0.5);
    }

    create(){

        this.load.on('progress', this.progress, this);

        this.scene.start('menu');
    }

    progress(value){
        let percentage = Math.round(value * 100) + '%';
        this.loadLabel.setText('loading\n' + percentage);
    }
};
