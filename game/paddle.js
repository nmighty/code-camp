class Paddle
{
    constructor(x)
    {
        this.x = x;
        this.y = height / 2 - 40;
        this.height = 80;
        this.width = 20;
        this.isUp = false;
        this.isDown = false;
        
    }
    display()
    {
        fill(0, 255, 115);
        rect(this.x, this.y, this.width, this.height)
    }

    up()
    {
        if (this.y > 0)
            this.y = this.y - 4;
    }

    down()
    {
        if (this.y < (height - this.height))
            this.y = this.y + 4;
    }
}