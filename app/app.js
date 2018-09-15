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
    this.add.image(400, 300, 'sky');
    var particles = this.add.particles('red');
    var emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD'
    });
    var logo = this.physics.add.image(400, 100, 'logo');
    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);
    emitter.startFollow(logo);
      
    this.button = this.add.sprite(700, 500, 'aButton').setInteractive();

    this.button.on('pointerdown', function(pointer, pointerdown) {
      console.log('A clicked');
    });
  }

  function _preload() {
    this.load.image('sky', 'assets/space3.png');
    this.load.image('logo', 'assets/phaser3-logo.png');
    this.load.image('red', 'assets/red.png');

    this.load.image('aButton', 'assets/Ui/A.png');
  } 

  function _update() {}

  return {
    run: function(){
      new Phaser.Game(_config);
    }
  };
}());

app.run();
