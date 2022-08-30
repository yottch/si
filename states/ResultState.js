var RPS = RPS || {};

RPS.ResultState = {
    init: function(data) {
        // console.log("init result state", data);
        this.result = data;
    },
    preload: function() {
        this.load.image("win", "./assets/img/win.png");
        this.load.image("lose", "./assets/img/lose.png");
        this.load.image("friend", "./assets/img/friend.png");
        this.load.image("play_again", "./assets/img/playagain.png");
        this.load.spritesheet("paper_rock", "./assets/img/PaperRock.png", 1000, 1000, 4);
        this.load.spritesheet("rock_scissors", "./assets/img/RockScissors.png", 1000, 1000, 4);
        this.load.spritesheet("scissors_paper", "./assets/img/ScissorsPaper.png", 1000, 1000, 4);
        this.load.spritesheet("rock", "./assets/img/Rock.png", 800, 800, 4);
        this.load.spritesheet("paper", "./assets/img/Paper.png", 800, 800, 4);
        this.load.spritesheet("scissors", "./assets/img/Scissors.png", 800, 800, 4);
    },
    create: function() {
        console.log(this.result);

        var game_result = this.result.game_result;
        var player_choice = this.result.player_choice;
        var computer_choice = this.result.computer_choice;
        console.log(game_result);

        if (player_choice == "rock") {
            if (computer_choice == "rock") {
                this.background = this.add.tileSprite(
                    0,
                    0,
                    this.game.world.width,
                    this.game.world.height,
                    "friend"
                );
                this.rock1 = this.add.sprite(170, 240, "rock");
                this.rock1.scale.setTo(0.33, 0.33);
                var rock_animation1 = this.rock1.animations.add("walk");
                rock_animation1.play(5, true);

                this.rock2 = this.add.sprite(450, 240, "rock");
                this.rock2.scale.setTo(0.33, 0.33);
                var rock_animation2 = this.rock2.animations.add("walk");
                rock_animation2. play(5, true);
            }
            else if (computer_choice == "paper") {
                this.background = this.add.tileSprite(
                    0,
                    0,
                    this.game.world.width,
                    this.game.world.height,
                    "lose");

                    this.paper_rock = this.add.sprite(
                        this.game.world.width / 2 - (500 * 0.33),
                        this.game.world.height /2 - (500 * 0.33) + 70,
                        "paper_rock");
                        this.paper_rock.scale.setTo(0.33, 0.33);
                        var paper_rock_animation = this.paper_rock.animations.add("walk");
                        paper_rock_animation.play(5, true);
            }
            else if (computer_choice = "scissors") {
                this.background = this.add.tileSprite(
                    0,
                    0,
                    this.game.world.width,
                    this.game.world.height,
                    "win");

                this.rock_scissors = this.add.sprite(
                    this.game.world.width / 2 - (500 * 0.33), 
                    this.game.world.height / 2 - (500 * 0.33) + 90, 
                    "rock_scissors");
                    this.rock_scissors.scale.setTo(0.33, 0.33);
                    var rock_scissors_animation = this.rock_scissors.animations.add("walk");
                    rock_scissors_animation.play(5, true);

            }
        }
        else if (player_choice == "paper") {
            if (computer_choice == "rock") {
                this.background = this.add.tileSprite(
                    0,
                    0,
                    this.game.world.width,
                    this.game.world.height,
                    "win");
                this.paper_rock = this.add.sprite(
                    this.game.world.width / 2 - (500 * 0.33),
                    this.game.world.height /2 - (500 * 0.33) + 70,
                    "paper_rock");
                    this.paper_rock.scale.setTo(0.33, 0.33);
                    var paper_rock_animation = this.paper_rock.animations.add("walk");
                    paper_rock_animation.play(5, true);
            }
            else if (computer_choice == "paper") {
                this.background = this.add.tileSprite(
                    0,
                    0,
                    this.game.world.width,
                    this.game.world.height,
                    "friend"
                );
                this.paper1 = this.add.sprite(150, 190, "paper");
                this.paper1.scale.setTo(0.43, 0.43);
                var paper_animation1 = this.paper1.animations.add("walk");
                paper_animation1.play(5, true);

                this.paper2 = this.add.sprite(430, 190, "paper");
                this.paper2.scale.setTo(0.43, 0.43);
                var paper_animation2 = this.paper2.animations.add("walk");
                paper_animation2.play(5, true);
            }
            else if (computer_choice = "scissors") {
                this.background = this.add.tileSprite(
                    0,
                    0,
                    this.game.world.width,
                    this.game.world.height,
                    "lose");
                this.scissors_paper = this.add.sprite(
                    this.game.world.width / 2 - (500 * 0.33), 
                    this.game.world.height / 2 - (500 * 0.33) + 75, 
                    "scissors_paper");
                    this.scissors_paper.scale.setTo(0.33, 0.33);
                    var scissors_paper_animation = this.scissors_paper.animations.add("walk");
                    scissors_paper_animation.play(5, true);
            }
        }
        else if (player_choice == "scissors") {
            if (computer_choice == "rock") {
                this.background = this.add.tileSprite(
                    0,
                    0,
                    this.game.world.width,
                    this.game.world.height,
                    "lose");
                this.rock_scissors = this.add.sprite(
                    this.game.world.width / 2 - (500 * 0.33) - 20, 
                    this.game.world.height / 2 - (500 * 0.33) + 90, 
                    "rock_scissors");
                    this.rock_scissors.scale.setTo(0.33, 0.33);
                    var rock_scissors_animation = this.rock_scissors.animations.add("walk");
                    rock_scissors_animation.play(5, true);

            }
            else if (computer_choice == "paper") {
                this.background = this.add.tileSprite(
                    0,
                    0,
                    this.game.world.width,
                    this.game.world.height,
                    "win");
                this.scissors_paper = this.add.sprite(
                    this.game.world.width / 2 - (500 * 0.33), 
                    this.game.world.height / 2 - (500 * 0.33) + 75, 
                    "scissors_paper");
                    this.scissors_paper.scale.setTo(0.33, 0.33);
                    var scissors_paper_animation = this.scissors_paper.animations.add("walk");
                    scissors_paper_animation.play(5, true);

            }
            else if (computer_choice = "scissors") {
                this.background = this.add.tileSprite(
                    0,
                    0,
                    this.game.world.width,
                    this.game.world.height,
                    "friend"
                );
                this.scissors1 = this.add.sprite(170, 220, "scissors");
                this.scissors1.scale.setTo(0.35, 0.35);
                var scissors_animation1 = this.scissors1.animations.add("walk");
                scissors_animation1.play(5, true);

                this.scissors2 = this.add.sprite(430, 220, "scissors");
                this.scissors2.scale.setTo(0.35, 0.35);
                var scissors_animation2 = this.scissors2.animations.add("walk");
                scissors_animation2.play(5, true);
            }
        }
        this.play_again = this.add.sprite(340, 140, "play_again");
        this.play_again.inputEnabled = true;
        this.play_again.events.onInputDown.add(this.play_again_click, this);

    },
    update: function() {

    },
    play_again_click: function() {
        console.log("play again.")
        RPS.game.state.start("GameState");
    }
}