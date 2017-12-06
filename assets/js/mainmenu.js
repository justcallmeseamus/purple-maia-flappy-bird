/* global game, Phaser, playState, menuState, mainMenuState */

var startBtn;

var mainMenuState = {
    
    
    preload: function() {
        game.load.spritesheet('startBtn', 'assets/images/start_btn.png', 193, 71);
        
        game.stage.backgroundColor = '#ef2626';
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true; 

    },
    
    
    create: function() {
      startBtn = game.add.button(game.world.centerX-95, 200, 'startBtn', this.Startgame, this, 2, 1, 0);  
        
        var spacekey = game.input.keyboard.addKey(Phaser.keyboard.SPACEBAR);
        spaceKay.onDown.add(this.startGame, this); 
    },
    
    
    update: function() {
        
    },

    startGame: function() {
       // game.state.start('play');
    }

};
