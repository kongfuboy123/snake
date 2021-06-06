class Snake {
  
  constructor() {
  this.body = [
    {'row':3,'col':5},
    {'row':3,'col':4},
    {'row':3,'col':3},
    {'row':3,'col':2}
  ];
  this.deg = '0deg';
  this.head = null;
  this.direction = "Right";
  this.willDirection = "Right";
    
}
  
  renderHead(deg) {
    // set pic of head
    
    game.setImg(this.body[0].row,this.body[0].col,'<img id="head" src="/image/head3.png" width="20" height="20" alt="head" >');
    this.head = document.getElementById('head');
    this.head.style.transform = 'rotate('+this.deg+')';
    
  
   } //set  body
  renderBody(){
    for (var i = 1, len = this.body.length; i < len; i++) {
      // game.setColor(this.body[i].row,this.body[i].col,'yellow');
      game.setImg(this.body[i].row,this.body[i].col,'<img src="/image/body4.png" width="18" height="18" alt="body" >');

    }
  }
  update() {
    
    // head move
    this.direction = this.willDirection;
    switch (this.direction){
      case 'Right':
        this.deg = '0deg';
        this.body.unshift( {'row':this.body[0].row,'col':this.body[0].col+1});
      
        break;
      case 'Down':
        
        this.deg = '90deg';
        this.body.unshift( {'row':this.body[0].row+1,'col':this.body[0].col});
        
        
        break;
      case 'Up':
      
        this.deg = '-90deg';
        this.body.unshift( {'row':this.body[0].row-1,'col':this.body[0].col});
        break;
      case 'Left':
     
        this.deg = '180deg';
        this.body.unshift( {'row':this.body[0].row,'col':this.body[0].col-1});
        break;
    }
    // touch boarder death
    if(this.body[0].col>game.col-1 ||this.body[0].row>game.row-1 ||this.body[0].col < 0 ||this.body[0].row < 0){
      
      alert('Game Over! Your Score is '+game.score);
      this.body.shift();
      clearInterval(game.timer);
      game.showRestartBtn();
      return;
    }
    //touch body death
    for (var i = 1,len = this.body.length; i< len; i++){
      if (this.body[0].col == this.body[i].col && this.body[0].row == this.body[i].row){
        
        alert('Game Over! Your Score is '+game.score);
        this.body.shift();
        clearInterval(game.timer);
        game.showRestartBtn();
        return;
      }
    // eat food
    if(this.body[0].row == game.food.row && this.body[0].col == game.food.col){
        game.food = new Food(game);
        game.f = 0;
        game.score++;
      
        return;
    }
    }   
    // tail move
    this.body.pop();
  }

  changeDirection (d){
    this.willDirection = d ;
    console.log(this.willDirection);
  }
}
