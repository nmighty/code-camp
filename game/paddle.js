class Paddle
{
    constructor(x)
    {
        this.x = x;
        this.y = height / 2 - 40;
        this.radius = 10;
        this.height = 80;
        this.width = 20;
        this.isUp = false;
        this.isDown = false;
        
    }
    display()
    {
        fill(0, 255, 115);
        rect(this.x, this.y, this.width, this.height, this.radius);
    }

    up()
    {
        if (this.y > 0)
            this.y = this.y - 8;
    }

    down()
    {
        if (this.y < (height - this.height))
            this.y = this.y + 8;
    }
    
    update()
    {
        if (this.isUp)
            this.up();
        else if (this.isDown)  
            this.down();
    }
}