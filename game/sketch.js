let playerPaddle;
let aiPaddle;
let ball;

function setup() {
  createCanvas(624, 351);
  playerPaddle = new Paddle(width - 46);
  aiPaddle = new Paddle(26);
  ball = new Ball();
}

function draw() 
{
  background(0);
  playerPaddle.display();
  aiPaddle.display();
  ball.display();
  ball.move(playerPaddle);
  if (playerPaddle.isUp)
    playerPaddle.up();
  else if (playerPaddle.isDown)  
    playerPaddle.down();
}

function keyPressed()
{
  if (keyCode == UP_ARROW || keyCode == 87)
    playerPaddle.isUp = true;
  else if (keyCode == DOWN_ARROW || keyCode == 83)
    playerPaddle.isDown = true;
}
function keyReleased()
{
  if (keyCode == UP_ARROW || keyCode == 87)
    playerPaddle.isUp = false;
  else if (keyCode == DOWN_ARROW || keyCode == 83)
    playerPaddle.isDown = false;
}