import * as Phaser from 'phaser';

export default class Demo extends Phaser.Scene
{
    constructor ()
    {
        super('demo');
    }

    preload ()
    {
        this.load.image('background', 'assets/images/title_background.png');
        this.load.image('logo', 'assets/images/desert-dash-logo.png');
        this.load.spritesheet('cactus',
            'assets/images/cactus_round_medium.png',
            { frameWidth: 128, frameHeight: 128 }
        );
        this.load.spritesheet('saguaro',
            'assets/images/saguaro_sparkle_medium.png',
            { frameWidth: 128, frameHeight: 256 }
        );
    }

    create ()
    {
        this.scale.displaySize.setAspectRatio(4/3);
        this.scale.refresh();
        this.add.image(400, 300, 'background');

        this.anims.create({
            key: 'cactus_bounce',
            frames: this.anims.generateFrameNumbers('cactus', { start: 0, end: 3 }),
            frameRate: 5,
            // loop the animation
            repeat: -1
        });

        this.anims.create({
            key: 'saguaro_bounce',
            frames: this.anims.generateFrameNumbers('saguaro', { start: 0, end: 5 }),
            frameRate: 5,
            // loop the animation
            repeat: -1
        });

        this.add.group({
            key: 'saguaro',
            repeat: 2,
            setXY: { x: 240, y: 340, stepX: 320 }
        }).playAnimation('saguaro_bounce');

        this.add.group({
          key: 'cactus',
          repeat: 3,
          setXY: { x: 80, y: 420, stepX: 320 }
        }).playAnimation('cactus_bounce');


        const logo = this.add.image(400, 95, 'logo');

        this.tweens.add({
            targets: logo,
            y: 165,
            duration: 1000,
            yoyo: true,
            repeat: -1
        });

        const self = this;

      this.input.on('pointerdown', function () {

          self.scene.start('entryLevel');

      });

    }
}

export class Demo2 extends Phaser.Scene
{
    constructor ()
    {
        super('demo2');
    }

    preload ()
    {
        this.load.image('background', 'assets/images/title_background.png');
        this.load.image('logo', 'assets/images/desert-dash-logo.png');
    }

    create ()
    {
        this.scale.displaySize.setAspectRatio(4/3);
        this.scale.refresh();
        this.add.image(400, 300, 'background');
    }
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#56C1D8',
    width: 800,
    height: 600,
    scene: Demo,
    scale: {
        mode: Phaser.Scale.FIT,
    },
    // scale: {autoCenter: Phaser.Scale.CENTER_BOTH}
};

const game = new Phaser.Game(config);
