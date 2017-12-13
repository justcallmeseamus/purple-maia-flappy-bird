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
        //this is the physics function/options
        game.physics.startSystem(Phaser.Physics.ARCADE);
        //this is our pipe group
        this.pipes = game.add.group();
        //our timer 
        this.timer = game.time.events.loop(1500, this.addRowOfPipes, this);
        //add bird to the stage 
        this.bird = game.add.sprite(100, 245, 'bird');
        //enable physics on bird
        game.physics.arcade.enable(this.bird);
        this.bird.body.gravity.y = 1000;
        //feel free to tweak the 1000 gravity value
        
        //anchor position
        this bird.anchor.setTo(-0.2,0.5);
        
        //creat keyboard input listener 
        //create jump key
        var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
        spaceKey.onDown.add(this.jump, this);
        game.input.onDown.add(this.jump,this)
        
        this.score = 0;
        this.labelScore = game.add.text( 20, 20, "0")
        // add jump sound
        this.jumpSound = game.add.audio('jump');
        this.jumpSound.volume = 0.2;
        
        
    },

    update: function() {
        
    }
};
