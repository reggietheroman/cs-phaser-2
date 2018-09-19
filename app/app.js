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
        //start: 2,
        //end: 3,
        //first: 2 
        frames: [2,3]
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

    yeemo.anims.play('walk');
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
  } 

  return {
    run: function(){
      new Phaser.Game(_config);
    }
  };
}());

app.run();
