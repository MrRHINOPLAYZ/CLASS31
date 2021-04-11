class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage=loadImage("sprites/smoke.png")
    this.pr=[]
  }

  display() {
   var p =this.body.position
   var pos=[p.x,p.y]
   if(this.body.velocity.x>10&&p.x>200)
   this.pr.push(pos)
    super.display();
for(var I=0;I<this.pr.length;I++){
  image ( this.smokeImage,this.pr[I][0],this.pr[I][1]) 
}
  }
}
