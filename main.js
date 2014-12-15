var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function preload()
{
	game.load.tilemap('pacman', 'assets/maze.json', null, Phaser.Tilemap.TILED_JSON);
	game.load.image('tiles', 'assets/pacman_spritesheet1.png');
}

var map;
var layer;

function create() 
{
	game.stage.backgroundColor = '#000000';
	map = game.add.tilemap('pacman');
	map.addTilesetImage('Map-1', 'tiles');
	layer = map.createLayer('Tile Layer 1');
	layer.resizeWorld();
}

function update()
{

}
















