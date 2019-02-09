var doAnim = true;
var amount = 20;//amount of balls
var maxSize = 8;//max radius of ball
var minSize = 2;//min radius of ball
var maxSpeed = 8;//max speed of ball
var minSpeed = 2;//min speed of ball
var colors = [//colors for balls
  '#1593A2',
  '#ACF0F1',
  '#D81E5B',
  '#DBFE87'
];

canvas=document.querySelector('#hoverballs');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c=canvas.getContext('2d');


mouse = function(x, y){
  this.x = x;
  this.y = y;
}

mouse1 = new mouse(0, 0);
window.addEventListener('mousemove', function(e){
  mouse1.x = e.clientX;
  mouse1.y = e.clientY;
});

window.addEventListener('resize', function(e){
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
});

function circle(x,y,radius,color,dx,dy){
  this.x = x;
  this.y = y;
  this.radius = this.minRadius = radius;
  this.color = color;
  this.dx = dx;
  this.dy = dy;

  this.draw = function(){
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, 2* Math.PI, false);
    c.strokeStyle=this.color;
    c.fillStyle=this.color;
    c.fill();
    c.stroke();
  }

  this.update = function(){

    this.x+=this.dx;
    this.y+=this.dy;
    this.draw();

    if(this.x+this.dx-this.radius/2>=innerWidth || this.x+this.dx-this.radius/2<=0)this.dx=-this.dx;
    if(this.y+this.dy-this.radius/2>=innerHeight || this.y+this.dy-this.radius/2<=0)this.dy=-this.dy;
    if((Math.abs(this.x-mouse1.x)<=25+this.radius/2 || Math.abs(mouse1.x-this)<=25+this.radius/2)&&
    (Math.abs(this.y-mouse1.y)<=25+this.radius/2 || Math.abs(mouse1.y-this.y)<=25+this.radius/2)){
      if(this.radius>=30)return;
      this.radius+=2;
    }

    else if(this.minRadius<this.radius)this.radius--;
  }
}

var circles = [];
for(var i = 0; i<amount; i++){
  var x = Math.random()*innerWidth;
  var y = Math.random()*innerHeight;
  var radius = Math.random()*(maxSize-minSize)+minSize;
  var color = colors[Math.floor(Math.random()*colors.length)];
  var dx = (Math.random()-0.5)*(maxSpeed-minSpeed)+minSpeed;
  var dy = (Math.random()-0.5)*(maxSpeed-minSpeed)+minSpeed;
  circles[i] = new circle(x,y,radius,color,dx,dy);
}

function animation(){
  if(!doAnim){c=null; return;}
  requestAnimationFrame(animation);
  c.clearRect(0,0,innerWidth,innerHeight);
  for (var i = 0; i < circles.length; i++) {
    circles[i].update();
  }
}

animation();
