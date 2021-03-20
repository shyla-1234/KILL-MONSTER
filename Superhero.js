class Superhero extends BaseClass {
  constructor(x,y){
    super(x,y,200,200);
    this.image = loadImage("sprites/superhero.png");
    this.smokeImg=loadImage("sprites/smoke.png");
    this.trajectory=[];

  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if(this.body.velocity.x>10 && this.body.position.x>200){
      var position=[this.body.position.x,this.body.position.y];
      this.trajectory.push(position);

    }
    for(var i=0;i< this.trajectory.length;i++){
image(this.smokeImg,this.trajectory[i][0],this.trajectory[i][1]);
    }

  }
}
