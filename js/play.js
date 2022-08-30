class Play{

    //called one time after preload, create all objects (position them)
    create(){
        this.player = this.physics.add.sprite(250, 170, 'player');
        this.player.body.gravity.y = 500;
        this.arrow = this.input.keyboard.createCursorKeys();
        this.createWorld();
        this.coin = this.physics.add.sprite(60, 130, 'coin');
        this.scoreLabel = this.add.text(30,25, 'Score: 0', {fontSize: '18px Arial', fill: '#fff'});
        this.score = 0;
        this.enemies = this.physics.add.group();
        this.nextEnemy = 0; //next enemy creation time


        this.jumpSound = this.sound.add('jump');
        this.coinSound = this.sound.add('coin');
        this.deadSound = this.sound.add('dead');

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('player', {frames: [1, 2]}),
            frameRate: 8,
            repeat: -1
        });

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('player', {frames: [3, 4]}),
            frameRate: 8,
            repeat: -1
        });

        //create particles
        let particles = this.add.particles('pixel');

        //create emitter
        this.emitter = particles.createEmitter({
            quantity: 15,
            speed: {min : -150, max: 150},  //between -150 and 150 pixels per second
            scale: {start: 2, end: 0}, //twice the size and end at 0
            lifespan: 800, 
            on: false //don't start the explosion right away
        });
    }

    //called every frame, update all objects
    update(){
        this.physics.collide(this.player, this.walls);
        this.physics.collide(this.enemies, this.walls);

        //if the player dies then nothing
        if(!this.player.active){
            return;
        }

        if (!this.player.active){
            return;
        }
        this.movePlayer();
        if(this.physics.overlap(this.player, this.coin)){
            this.takeCoin();
        }
        if(this.player.y > 340 || this.player.y < 0){
            this.playerDie();
        }
        if(this.physics.overlap(this.player, this.enemies)){
            this.playerDie();
        }

        let now = Date.now(); //current time in milliseconds, create more enemies over time

        if(this.nextEnemy < now){
            let startDiff = 4000;
            let endDiff = 1000;
            let scoreEndDiff = 100;

            //compute progress, which is 0<=progress<=1
            //0 is start
            //1 is end score
            let progress= Math.min(this.score/scoreEndDiff, 1);

            //compute the time between enemies
            let delay = startDiff - (startDiff - endDiff) * progress;

            this.addEnemy();
            this.nextEnemy = now + delay;
        }


    }

    //handle player movement
    movePlayer(){
        if(this.arrow.left.isDown){
            this.player.body.velocity.x = -200;
            this.player.anims.play('left', true);
        }
        else if(this.arrow.right.isDown){
            this.player.body.velocity.x = 200;
            this.player.anims.play('right', true);
        }
        else{
            this.player.body.velocity.x = 0;
            this.player.setFrame(0);
        }
        if(this.arrow.up.isDown && this.player.body.onFloor()){
            this.player.body.velocity.y = -320;
            this.jumpSound.play();
        }
    }

    //position walls
    createWorld(){
        this.walls= this.physics.add.staticGroup();

        this.walls.create(10, 170, 'wallV');
        this.walls.create(490, 170, 'wallV');

        this.walls.create(50, 10, 'wallH');
        this.walls.create(450, 10, 'wallH');
        this.walls.create(50, 330, 'wallH');
        this.walls.create(450, 330, 'wallH');

        this.walls.create(0, 170, 'wallH');
        this.walls.create(500, 170, 'wallH');
        this.walls.create(250, 90, 'wallH');
        this.walls.create(250, 250, 'wallH');
    }

    takeCoin(){

        //scale the coin to 0 so it is invisible
        this.coin.setScale(0);

        this.tweens.add({
            targets: this.coin,
            scale: 1,   //scale to its original size
            duration: 300, //300ms
        });

        //players gets bigger when they collect a coin
        this.tweens.add({
            targets: this.player,
            scale: 1.3, 
            duration: 100,
            yoyo: true, //reverse to original size
        });

        this.score += 5;
        this.scoreLabel.setText('Score: ' + this.score);
        this.updateCoinPosition();
        this.coinSound.play();
    }

    updateCoinPosition(){
        let positions = [
            {x: 140, y: 60},
            {x: 360, y: 60},
            {x: 60, y: 140},
            {x: 440, y: 140},
            {x: 140, y: 300},
            {x: 370, y: 300}
        ];
        positions = positions.filter(coin => coin.x !== this.coin.x);
        let newPosition = Phaser.Math.RND.pick(positions);
        this.coin.setPosition(newPosition.x, newPosition.y);
    }

    addEnemy(){
        let enemy = this.enemies.create(250, -10, 'enemy');

        enemy.body.gravity.y = 500;
        enemy.body.velocity.x = Phaser.Math.RND.pick([-100, 100]);
        enemy.body.bounce.x = 1;

        this.time.addEvent({
            delay: 10000,
            callback: ()=> enemy.destroy(),
        });
    }

    playerDie(){

        this.cameras.main.shake(300, 0.03);

        this.player.destroy();

        //go to menu when player dies
        this.deadSound.play();

        //set emitter on top of player
        this.emitter.setPosition(this.player.x, this.player.y);
        this.emitter.explode();

        this.time.addEvent({
            delay: 1000,
            callback: ()=> this.scene.start('menu', {score: this.score}),
        });
    }
};