class Drop{
    constructor(x,y,r){
        var options={
            isStatic: false,
            restitution: 0,
            density: 0.1,
            friction: 0.1
        }
        this.x = x;
        this.y = y;
        this.r = 20;
        this.body = Bodies.circle(this.x, this.y, (this.r)/2);
        this.array = [];
        var height = 700;
        if (this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x: random(0,400), y: random(0,400)});
        }
        World.add(world,this.body);
    }
    display(){
        fill(0,0,255);
        var position = [this.body.position.x, this.body.position.y];
        this.array.push(position);
        var maxDrops = 100;
        for (var i=0; i < maxDrops; i++){
            ellipse(this.array[i][0], this.array[i][1], this.r/2);
        }
       
    }
}
