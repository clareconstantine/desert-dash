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
    }

    create ()
    {
        this.add.image(400, 300, 'background');

        const logo = this.add.image(400, 150, 'logo');

        this.tweens.add({
            targets: logo,
            y: 250,
            duration: 1500,
            yoyo: true,
            repeat: -1
        })

        this.anims.create({
            key: 'bounce',
            frames: this.anims.generateFrameNumbers('cactus', { start: 0, end: 3 }),
            frameRate: 5,
            // loop the animation
            repeat: -1
        });

        this.add.group({
            key: 'cactus',
            repeat: 2,
            setXY: { x: 240, y: 430, stepX: 320 }
        }).playAnimation('bounce');

        this.add.group({
          key: 'cactus',
          repeat: 3,
          setXY: { x: 80, y: 400, stepX: 320 }
        }).playAnimation('bounce');

    }
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#56C1D8',
    width: 800,
    height: 600,
    scene: Demo,
    scale: {autoCenter: Phaser.Scale.CENTER_BOTH}
};

const game = new Phaser.Game(config);
