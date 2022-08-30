// call game object

var RPS = RPS || {};

//declare game state object
RPS.GameState = {
    // built-in function, init before the game start
    init: function() {
        // console.log("this is init");
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.physics.startSystem(Phaser.Physics.ARCADE);


    },
    // built-in function, for loading assets
    // before the game start
    preload: function() {
        // console.log("this is preload");

        // load game background
        this.load.image("background", "./assets/img/background.png");
        this.load.image("choosetoplay", "./assets/img/choosetoplay.png");
        
        // load rock element
        this.load.spritesheet("rock", "./assets/img/Rock.png", 800, 800, 4);
        this.load.spritesheet("paper", "./assets/img/Paper.png", 800, 800, 4);
        this.load.spritesheet("scissors", "./assets/img/Scissors.png", 800, 800, 4);
    },
    // for inserting elements (effect, sprite, ) to the game
    create: function() {
        // console.log("create here");

        // add background to game state
        this.background = this.add.tileSprite(
            0,
            0,
            this.game.world.width,
            this.game.world.height,
            "background"
        );
        this.choosetoplay = this.add.sprite(
            290,
            160,
            "choosetoplay"
        );

        // add rock to game state
        this.rock = this.add.sprite(90, 240, "rock");
        this.rock.scale.setTo(0.33, 0.33);
        // add click handler to rock
        this.rock.inputEnabled = true;
        this.rock.events.onInputDown.add(this.rock_click, this);
        // add animation to rock
        var rock_animation = this.rock.animations.add("walk");
        rock_animation.play(5, true);
        

        // add paper to game state
        this.paper = this.add.sprite(335, 235, "paper");
        this.paper.scale.setTo(0.37, 0.37);
        // add animation to paper
        var paper_animation = this.paper.animations.add("walk");
        paper_animation.play(4, true);
        // add click handler to rock
        this.paper.inputEnabled = true;
        this.paper.events.onInputDown.add(this.paper_click, this);

        // add scissors to game state
        this.scissors = this.add.sprite(570, 240, "scissors");
        this.scissors.scale.setTo(0.33, 0.33);
        //add animation to scissors
        var scissors_animation = this.scissors.animations.add("walk");
        scissors_animation.play(5, true);
        //add click handler to scissors
        this.scissors.inputEnabled = true;
        this.scissors.events.onInputDown.add(this.scissors_click, this);

    },

    // for updating current status of the game over time
    update: function() {
        // console.log("update here");
    },
    rock_click: function(){
        //set player choice
        var choice = "rock";
        this.com_turn(choice);
    },
    paper_click: function(){
        //set player choice
        var choice = "paper";
        this.com_turn(choice);
    },
    scissors_click: function(){
        //set player choice
        var choice = "scissors";
        this.com_turn(choice);
    },
    com_turn: function(player_choice) {
        console.log(player_choice);

        // random computer choice
        var choices = ["rock", "paper", "scissors", "rock", "paper", "scissors"];
        var choice_index = Math.floor(Math.random() * 6);
        var computer_choice = choices[choice_index];

        console.log("computer choice is: ", computer_choice);

        var game_result = "";

        // make result
        if (player_choice == "rock") {
            if (computer_choice == "rock") {
                game_result = "We're friend.";
            }
            else if (computer_choice == "paper") {
                game_result = "You lose!";
            }
            else if (computer_choice == "scissors") {
                game_result = "You win!";
            }
        } 
        else if (player_choice == "paper") {
            if (computer_choice == "rock") {
                game_result = "You win!";
            }
            else if (computer_choice == "paper") {
                game_result = "We're friend.";
            }
            else if (computer_choice == "scissors") {
                game_result = "You lose!";
            }
        } 
        else {
            if (computer_choice == "rock") {
                game_result = "You lose!";
            }
            else if (computer_choice == "paper") {
                game_result = "You win!";
            }
            else if (computer_choice == "scissors") {
                game_result = "We're friend.";
            }
        }

        RPS.game.state.start("MiddleState", true, true, {
            player_choice: player_choice,
            computer_choice: computer_choice,
            game_result: game_result
        });
    }

}
