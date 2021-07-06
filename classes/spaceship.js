class Spaceship {
    constructor (){
    this.x = 300; 
    this.y = 350;
    this.width = 50;
    this.height = 50;
    this.speed = 1;  
    }

   drawSpaceship = () => {
     ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.strokeStyle = "black";
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.stroke()
    ctx.closePath()  
   }

   spaceshipMove = () => {
       
   }
    
}

