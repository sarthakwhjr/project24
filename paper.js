class paper {
    constructor(x, y, r) {
      var options = {


         isStatic:false,
         restitution:0.8,
         friction:0.1,
         density:0.8
      }
      this.body = Bodies.circle(x, y, r, options);
      this.radius= r;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      
     
      ellipseMode(RADIUS);
      
      fill("red");
      ellipse(pos.x,pos.y,this.radius,this.radius);
     
    }
 

}
  
