//1.init
//2.draw
//3.update

function Init() {
 canvas = document.getElementById('mycanvas');
 pen = canvas.getContext('2d');
 w = canvas.width;
 h = canvas.height;
    food = getFood();
 

     Snake = {
     init_length:5,
     color:"yellow",
     cells:[],
     direction:"right",
     createSnake:function(){
     for(var i =this.init_length-1;i>=0;i--){
     this.cells.push({x:i,y:0})
     }     
     drawSnake:function(){
      for(var i =0;i<this.cells.length;i++)
      {
          pen.fillStyle = this.color;
          pen.strokeStyle = "white";
          pen.lineWidth = 5;
          pen.strokeRect(this.cells[i].x*10,this.cells[i].y*10,10,10);
          pen.fillRect(this.cells[i],x*10, this.cells[i].y*10,10,10);
                       
      } 
   },
       updateSnake:function()
         {
           headX = this.cells[0].x;
           headY = this.cells[0].y;
             if(headX == food.x && headY == food.y){
                 food = getFood();
             }
             else{
                 this.cells.pop();
             }
             if(this.direction == "up"){
                 nextX = headX;
                 nextY = headY -1;
                 
             }
             if(this.direction == "down"){
                 nextX = headX;
                 nextY = headY +1;
             }
             if(this.direction =="left")
                 {
                     nextX = headX -1;
                     nextY = headY;
                 }
                 if(this.direction =="right")
                     {
                         nextX = headX +1;
                         nextY = headY;
                     }
                 
                 
 //          this.cells.pop();
           
           this.cells.unshift({x:nextX,y:nextY});
       }
  }
  snake.createSnake();
         document.addEventListener('keydown',KeyPressed);
 }
}
function draw(){
// console.log('draw')
    pen.clearRect(0,0,w,h);
    pen.fillStyle = "green" ;
    snake.drawSnake();
    pen.fillStyle = food.color;
    pen.fillRect(food.x,food.y,y*10,10,10);
}
function update(){
    
console.log("update")
    snake.updateSnake();
    
    
}
 function Keypressed(e){
     if(e.key== 'ArrowUp')
         {
             snake.direction = "up";
         }
     else if(e.key=='ArrowDown')
     {
         snake.direction = "down";
     }
     else if(e.key=='ArrowLeft')
     {
         snake.direction = "left";
     }
     else(e.key=='ArrowRight')
     {
         snake.direction = "Right";
     }
 }
function getFood(){
     foodX = Math.round(Math.random()*(w-10)/10);
     foodY = Math.round(Math.random()*(h-10)/10);
      
     foodColors = ["red","green","yellow","blue"];
    var i = Math.round(Math.random()*foodColor.length);
    food ={
        x:foodX;
        y:foodY;
        color:foodColor[i]
    }
    return food;
}

function gameLoop(){
 draw();
 update();
}
Init();
setInterval(gameLoop,100);
