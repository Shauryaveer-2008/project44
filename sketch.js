var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var players, p1, p2, p3, p4, oldMan, Ghost, Mechanic, treasure;

var track, p1_img, p2_img, p3_img, p4_img, oldMan_img, Mechanic_img, Ghost_img, treasure_img;

function preload(){
  //track = loadImage("charecters/track.jpg");
  p1_img = loadImage("charecters/playerStand.png");
  p2_img = loadImage("charecters/playerStand.png");
  p3_img = loadImage("charecters/playerStand.png");
  p4_img = loadImage("charecters/playerStand.png");
  treasure_img = loadImage("charecters/treasure.png");
  oldMan_img = loadImage("charecters/oldMan.png");
  Mechanic_img = loadImage("charecters/Mechanicfront.png");
  Ghost_img = loadImage("charecters/Ghost.png");
  //ground = loadImage("charecters/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
