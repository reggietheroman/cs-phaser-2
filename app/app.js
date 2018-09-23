var app = (function() {
  'use strict';

  var _config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 200 }
      }
    },
    scene: {
      preload: _preload,
      create: _create,
      update: _update
    }
  }

  function _create() {
    var walkingFrames = this.anims.generateFrameNumbers(
      'character',
      {
        //start: 0,
        //end: 3,
        //first: 0
        frames: [0,2,3]
      }
    );

    var walkingConfig = {
      key: 'walk',
      frames: walkingFrames,
      frameRate: 5,
      repeat: -1
    };
    
    this.anims.create(walkingConfig);

    var yeemo = this.add.sprite(200, 200, 'character');

    //yeemo.anims.play('walk');

    this.left = this.add.image(100, 500, 'leftButton');
    this.right = this.add.image(700, 500, 'rightButton');

    this.left.setInteractive();
    this.right.setInteractive();

    this.left.on('pointerdown', function(pointer, pointerdown) {
      yeemo.anims.play('walk');
    });

    this.left.on('pointerup', function(pointer, pointerup) {
      yeemo.anims.stop();
    });
  }

  function _preload() {
    this.load.spritesheet(
      'character',
      '/assets/tilesets/character.png',
      {
        frameWidth: 192,
        frameHeight: 192,
        endFrame: 8
      }
    );

    this.load.image('leftButton', 'assets/Ui/left-shaded.png');
    this.load.image('rightButton', 'assets/Ui/right-shaded.png');
  } 

  function _update() {

  }

  return {
    run: function(){
      new Phaser.Game(_config);
    }
  };
}());

app.run();
