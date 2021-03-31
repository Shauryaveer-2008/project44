class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 280);
    this.button.position(displayWidth/2 + 30, displayHeight/2-250);

    p1 = createSprite(150,150);
    p1.addImage("p1",p1_img);
    oldMan = createSprite(1350,150);
    oldMan.scale=0.60;
    oldMan.addImage("oldMan",oldMan_img);
    Mechanic = createSprite(150,450);
    Mechanic.scale=10;
    Mechanic.addImage("Mechanic",Mechanic_img);
    Ghost = createSprite(1350,450);
    Ghost.scale=10;
    Ghost.addImage("Ghost",Ghost_img);
    treasure = createSprite(800,600);
    treasure_img.scale=2;
    treasure.addImage("treasure",treasure_img);

drawSprites();
    
this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    
    });

  }
}
