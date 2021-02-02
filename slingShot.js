class Slingshot{
    constructor(bodyA, pointB){
        var options={
            bodyA:bodyA,
            pointB: pointB,
            length:10,
            stiffness:0.25
        }
        this.sling= Constraint.create(options);
        this.pointB= pointB;
 
        World.add(world,this.sling);

    }
    display(){
   
       
            var pointA=this.sling.bodyA.position;
            var pointB=this.pointB;
          
            push();
           
                strokeWeight(8);
                line(pointA.x,pointA.y,pointB.x,pointB.y);
                
            pop();
        
        
        



    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }

    
}