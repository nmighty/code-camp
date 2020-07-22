class Ball

{
    constructor()
    {
        this.r = 10;
        this.x = width / 2;
        this.y = height / 2;

    }
display()
    {
        fill(255, 255, 255);
        ellipse(this.x, this.y, this.r * 2, this.r * 2 )
    }
}