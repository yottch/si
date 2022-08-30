var RPS = RPS || {};

// create a game main screen
RPS.game = new Phaser.Game(900, 600, Phaser.AUTO);

// add state to game
RPS.game.state.add("MiddleState", RPS.MiddleState);
RPS.game.state.add("ResultState", RPS.ResultState);
RPS.game.state.add("GameState", RPS.GameState);
RPS.game.state.start("GameState");