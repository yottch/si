var RPS = RPS || {};

RPS.MiddleState = {
    init: function(data) {
        this.middle = data;
        this.countdown = 5;
    },
    
    preload: function() {
        this.load.image("background", "./assets/img/midstate.png")
        this.load.spritesheet("rock", "./assets/img/Rock.png", 800, 800, 4);
        this.load.spritesheet("paper", "./assets/img/Paper.png", 800, 800, 4);
        this.load.spritesheet("scissors", "./assets/img/Scissors.png", 800, 800, 4);
    },
    create: function() {
        var player_choice = this.middle.player_choice;
        var computer_choice = this.middle.computer_choice;

        this.background = this.add.tileSprite(
            0,
            0,
            this.game.world.width,
            this.game.world.height,
            "background"
        );
        if (player_choice == "rock") {
            this.rock = this.add.sprite(80, 240, "rock");
            this.rock.scale.setTo(0.33, 0.33);
            var rock_animation = this.rock.animations.add("walk");
            rock_animation.play(5, true);
        }
        if (computer_choice == "rock") {
            this.rock = this.add.sprite(550, 240, "rock");
            this.rock.scale.setTo(0.33, 0.33);
            var rock_animation = this.rock.animations.add("walk");
            rock_animation.play(5, true);
        }
        if (player_choice == "paper") {
            this.paper = this.add.sprite(70, 210, "paper");
            this.paper.scale.setTo(0.40, 0.40);
            var paper_animation = this.paper.animations.add("walk");
            paper_animation.play(5, true);
        }
        if (computer_choice == "paper") {
            this.paper = this.add.sprite(540, 210, "paper");
            this.paper.scale.setTo(0.40, 0.40);
            var paper_animation = this.paper.animations.add("walk");
            paper_animation.play(5, true);
        }
        if (player_choice == "scissors") {
            this.scissors = this.add.sprite(70, 205, "scissors");
            this.scissors.scale.setTo(0.38, 0.38);
            var scissors_animation = this.scissors.animations.add("walk");
            scissors_animation.play(5, true);
        }
        if (computer_choice == "scissors") {
            this.scissors = this.add.sprite(540, 205, "scissors");
            this.scissors.scale.setTo(0.38, 0.38);
            var scissors_animation = this.scissors.animations.add("walk");
            scissors_animation.play(5, true);
        }

        this.timer = this.game.time.events.loop(Phaser.Timer.SECOND * 1.5, this.update_timer, this);
       
    },
    update: function() {
        
    },
    update_timer: function() {
        RPS.game.state.start("ResultState", true, true, this.middle);
    }
}