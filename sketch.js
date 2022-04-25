const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  var options = {

    isStatic: true

  };
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //criar corpo da base do jogador
  
  playerBase = Bodies.rectangle(325, 450, 100, 50, options)

  //criar corpo do jogador

  playerArcher = Bodies.rectangle(350, 350, 50, 100, options)

  World.add(world, playerBase)
  World.add(world, playerArcher)

}

function draw() {
  background(backgroundImg);

  
  //exibir a imagem da base do jogador usando a função image()

  image(baseimage, playerBase.position.x, playerBase.position.y, 100, 50)

  //exibir a imagem do jogador usando a função image()

  image(playerimage, playerArcher.position.x, playerArcher.position.y, 50, 100)






  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
