/* global game, Phaser, playState, menuState, mainMenuState */

var playState = {

    preload: function() { 
        //scale the game if its on a device 
        if (!game.device.desktop) {
            game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            game.scale.setMinMax(game.width/2, game.width/2, game.width, game.height);
        }
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.stage.backgroundColor = '#ef2626';
        
        //preload pipes and bananas 
        game.load.image('bird', 'assets/image/banana.png');
        game.load.image('pipe', 'assets/image/pipe.png');
        
        //load the jump sound
        game.load.audio('jump', 'assets/audio/jump.m4a');
    },

    create: function() { 
        
    },

    update: function() {
        
    }
};
