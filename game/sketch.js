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

  playerPaddle.update();
  aiPaddle.update();

  processAI()
  ball.display();
  ball.move(playerPaddle, aiPaddle);

}
function processAI()
{
  let middleOfPaddle = aiPaddle.y + aiPaddle.height / 2;
  if (middleOfPaddle > ball.y)
  {
    aiPaddle.isUp = true;
    aiPaddle.isDown = false;
  }
  else
  {
    aiPaddle.isDown = true;
    aiPaddle.isUp = false;
  }
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