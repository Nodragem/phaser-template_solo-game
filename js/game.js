var Game = {
    // I played with the variables scopes:
    // these variables don't need to be exposed!
    myVariable : 'p',

    preload : function() {
        // Here we load all the needed resources for the level.
        // In our case, that's just two squares - one for the snake body and one for the apple.
        game.load.image('player', './assets/images/player.png');
        game.load.image('enemy', './assets/images/enemy.png');
    },

    create : function() {
        this.add.button(200, 200, 'player', this.endGame, this);
        this.add.button(400, 200, 'enemy', this.endGame, this);
    },

    update: function() {

    },

    endGame: function () {

        // Change the state back to Game.
        this.state.start('Game_Over');

    }

};