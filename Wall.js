class Wall{
    constructor(x,y,w,h){
       var options={
          isStatic:false,
          restitution:0.8,
          friction:0.5

        }
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.body=Matter.Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body)

    }
    display(){
        rectMode(CENTER)
        var pos = this.body.position
        push()
        fill("yellow")
        rect(pos.x,pos.y,this.w,this.h)
        pop()
    }
}