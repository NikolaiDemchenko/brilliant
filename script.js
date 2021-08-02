let game = new Phaser.Game(600, 600, Phaser.AUTO, null, {
    preload: preload, create: create, update: update
});

let start = 0,
    middle = 0,
    finish = 0,
    end = 0;

function preload() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.stage.backgroundColor = '#eee';
    game.load.spritesheet('start', 'img/start.png', 392, 370);
    game.load.spritesheet('middle', 'img/middle.png', 449, 430);
    game.load.spritesheet('end', 'img/finish.png', 326, 335);
}
function create() {
    start = game.add.sprite(game.world.width*0.5, game.world.height*0.5, 'start');
    start.anchor.set(0.5);
    start.scale.set(0);
    start.animations.add('startAnim', [0,1,2,3], 20);
    setTimeout(() => {
        game.add.tween(start.scale).to({x: 0.5, y: 0.5}, 1000, Phaser.Easing.Linear.None, true)
    }, 1000);

    middle = game.add.sprite(game.world.width*0.5, game.world.height*0.5, 'middle');
    middle.anchor.set(0.5);
    middle.scale.set(0);
    middle.animations.add('middleAnim', [0,1,2,3], 20);
    setTimeout(() => {
        middle.scale.set(0);
        finish.scale.set(0.5);
    }, 3000);

    finish = game.add.sprite(game.world.width*0.5, game.world.height*0.5, 'end');
    finish.anchor.set(0.5);
    finish.scale.set(0);
    finish.animations.add('finishAnim', [0,1,2,3], 20);
    setTimeout(() => {
        game.add.tween(finish.scale).to({x: 0.08, y: 0.08}, 1000, Phaser.Easing.Linear.None, true)
        game.add.tween(finish).to({y: 100}, 1000, Phaser.Easing.Linear.None, true)
    },3000)

    end = game.add.sprite(0, 0, 'middle');
    end.anchor.set(0.5);
    end.scale.set(0);
}
function update() {
    start.animations.play('startAnim');
    middle.animations.play('middleAnim');
    finish.animations.play('finishAnim');
    if (start.scale.x === 0.5) {
        start.scale.set(0);
        middle.scale.set(0.5);
    }
    if (finish.scale.x.toFixed(2) == 0.08) {
        setTimeout(() => {
            finish.scale.set(0);
            end.scale.set(0.08);
            end.x = 300;
            end.y = 100;
        }, 10)
    }
}
