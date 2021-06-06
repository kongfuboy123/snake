class Food{
  
  constructor(game){
  var self = this ;

  do{
    // random food position
    this.row = parseInt(Math.random() * game.row);
    this.col = parseInt(Math.random() * game.col);

  }while((function(){
    // food is not allowed on the body of snake
    for (var i = 0 ,len = game.snake.body.length; i < len; i++){
      if(game.snake.body[i].row == self.row && game.snake.body[i].col == self.col){
        return true; //if true , do a new food position.
      }   
    }
    return false;
  })());
    
}
  render() {
    game.setImg(this.row,this.col,'<img src="/image/apple.png" width="18" height="18" alt="apple" >')
  }
}

