class bob {

    constructor(x,y,radius){

        var options={
           'isStatic':true,
            'restitution': 0.8,
            'friction':1.0,
            'density':1.0,
            'gravity':1.0
         
        }

        this.body = Bodies.circle(x,y,radius,options)
        this.x = x;
        this.y = y;
        this.radius = radius;
        World.add(world, this.body);
       
    }

    display(){
      
          var pos = this.body.position;
        
         rectMode(CENTER);
         fill("red");
         ellipse(pos.x, pos.y, this.radius);
        
    }

}