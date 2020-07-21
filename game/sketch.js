let playerPaddle;
let aiPaddle;

function setup() {
  createCanvas(624, 351);
  playerPaddle = new Paddle(width - 46);
  aiPaddle = new Paddle(26);
}

function draw() 
{
  background(0);
  playerPaddle.display();
  aiPaddle.display();

  playerPaddle.up();
  aiPaddle.down();
}