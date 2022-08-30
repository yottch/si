class Menu{

    //data is an object coming from the play scene
    create(data){

        //get the score if it exists
        let score = data.score ? data.score : 0;

        //background image
        this.add.image(250, 170, 'background');
        
        //game name display
        let nameLabel = this.add.text(250, -50, 'Super Coin Box', { font: '70px Geo', fill: '#fff' }); 
        nameLabel.setOrigin(0.5, 0.5);

        this.tweens.add({
            targets: nameLabel,
            y: 80,
            duration: 1000,
            ease: 'bounce.out',
        });

        //display score
        let scoreText = 'score: ' + score + '\nhighscore: ' + localStorage.getItem('highScore');
        let scoreLabel = this.add.text(250, 170, scoreText,{ font: '30px Geo', fill: '#fff', align: 'center'  }); 
        scoreLabel.setOrigin(0.5, 0.5);
        
        //display instructions
        let startText = 'press the up arrow key to start'; 
        let startLabel = this. add. text(250, 260, startText, { font: '30px Geo', fill: '#fff' }); 
        startLabel.setOrigin(0.5, 0.5);

        this.tweens.add({
            targets: startLabel,
            angle: {from : -2, to: 2},
            duration: 1000,
            yoyo: true,
            repeat: -1,
        });
        
        //set high score to 0 if it doesn't exist
        if(localStorage.getItem('highScore') === null){
            localStorage.setItem('highScore', 0);
        }

        //update high score
        if(score > localStorage.getItem('highScore')){
            localStorage.setItem('highScore', score);
        }
    
        //keyboard input
        this.upkey = this.input.keyboard.addKey('up');
    }

    update() {
        if (this.upkey.isDown) {
            this.scene.start('play');
        }
    }

};