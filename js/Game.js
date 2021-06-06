class Game {
  
  constructor(){
  // var self = this;
  this.row = 20;
  this.col = 20;
  this.score = 0;
  this.init();
  this.snake = new Snake();
  this.food = new Food(this);
  this.startBtn = document.getElementById('start');
  this.startBtn.onclick = this.run;
  this.restartBtn = document.getElementsByClassName('restart')[0];
 
  this.restartBtn.onclick = this.run;
  
  }
  
 
 init() {
    var table,tr,td;
    table = document.createElement("table");
   
    for (var i = 0; i < this.row;i++) {
      tr = document.createElement("tr");
      for (var j = 0; j < this.col; j++){
        td = document.createElement("td")
        tr.appendChild(td);
      }
      table.appendChild(tr);
  
    }
    
    document.getElementById("app").appendChild(table);  
  }
  
  setColor (row,col,color) {
    document.getElementsByTagName("tr")[row].getElementsByTagName("td")[col].style.background = color
  }
 
  
  setImg (row, col, html){
    document.getElementsByTagName("tr")[row].getElementsByTagName("td")[col].innerHTML = html;
  
  }
  setRotate(){

  }
  
  clear () {
    for (var i = 0; i < this.row; i++){
      for (var j = 0; j< this.col; j++ ){
        document.getElementsByTagName('tr')[i].getElementsByTagName('td')[j].style.background = 'rgba(0,0,0,0.5)';
        document.getElementsByTagName('tr')[i].getElementsByTagName('td')[j].innerHTML = '';
      }
    }
  }
  
  bindEvent() {
    var self = this;
    document.onkeydown = function(event) {
      
      switch (event.keyCode){
        case 37:
          if(self.snake.direction == "Right") return;
          self.snake.changeDirection('Left');
          break;
        case 39:
          if(self.snake.direction == "Left") return;
          self.snake.changeDirection('Right');
          break;
        case 38:
          if(self.snake.direction == "Down") return;
          self.snake.changeDirection('Up');
          break;
        case 40:
          if(self.snake.direction == "Up") return;
          self.snake.changeDirection('Down');
          break;
      }
  
    }
  
  }
  start () {
    this.f = 0;
    this.timer =setInterval( function() {
      game.f++;
      // document.getElementById('frame').innerHTML = 'Frame:'+game.f;
      document.getElementById('score').innerHTML = '<img src="/image/apple.png" alt="apple" id="apple"> :'+game.score;
      game.clear();
      var during = game.snake.body.length < 30 ? 30-game.snake.body.length : 1;
      game.f % during == 0 && game.snake.update();
      game.snake.renderHead();
      game.snake.renderBody();
      game.food.render();
  
  },20)
  
}
  closeStartBtn(){
    

    this.startBtn.classList.add('hide');
    
  }
  showStartBtn(){
    

    this.startBtn.classList.remove('hide');
    
  }
  showRestartBtn(){
    this.restartBtn.classList.remove('hide');

  }

  run(){
    
      this.classList.add('hide');
      clearInterval(game.timer);
      game.snake = new Snake();
      game.food = new Food(game);
      game.score = 0;
      game.start();
      game.bindEvent();
      
    }
 
}

