class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
           pointB: pointB,
            stiffness: 0.04,
            length: 10
            
        }
     
        this.sling = Constraint.create(options);
        this.pointB = pointB
        World.add(world, this.sling);
    }

    display(){
        var pos1 = this.sling.bodyA.position;
        var pos = this.pointB;
        stroke(48,22,8)
        line (pos1.x, pos1.y, pos.x, pos.y)
    }
    
}