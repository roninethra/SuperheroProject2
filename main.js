canvas= new fabric.Canvas("mycanvas");
x= 100;
y= 100;
width= 30;
height= 30;
Player = "";
Blockimage= "";
addplayer();

function addplayer(){
    fabric.Image.fromURL("player (1).png", function(image){
        Player= image;
        Player.scaleToWidth(50);
        Player.scaleToHeight(100);
       Player.set({
           top : y, left: x
           
       })
       canvas.add(Player); }) 
}

function addBlocks(Blocks){
    fabric.Image.fromURL(Blocks, function(images){
        Blockimage= images;
           Blockimage.scaleToWidth(width);
           Blockimage.scaleToHeight(height);
           Blockimage.set({
               top : y, left: x

           })
           canvas.add(Blockimage);})
  
}

window.addEventListener("keydown", mykeyDown);
function mykeyDown(event){
    keyPressed = event.keyCode;
console.log("plus"+ keyPressed)
if(keyPressed == '80'){
    width= width+ 10;
    document.getElementById("width").innerHTML= width;
    height= height+ 10;
    document.getElementById("height").innerHTML= height;
}
if(keyPressed == '77'){
    width= width- 10;
    document.getElementById("width").innerHTML= width;
    height= height- 10;
    document.getElementById("height").innerHTML= height;
}
if (keyPressed== 38){
    up();
}  

if (keyPressed== 40){
 down();
}  
if (keyPressed== 37){
 left();
}  

if (keyPressed== 39){
 right();
}  
if (keyPressed== 72){
 addBlocks("blackpanther.png");
}  
if (keyPressed== 66){
 addBlocks("hulkd_body.png");
}  
if (keyPressed== 76){
 addBlocks("ironman_legs.png");
}  




}

function up(){
if(y>0){
   y= y-height;
   canvas.remove(Player);
   addplayer();
}

}
function down(){
 if(y<500){
     y= y+height;
     canvas.remove(Player);
     addplayer();
 }
}
function left(){
 if(x>0){
     x= x-width;
     canvas.remove(Player);
     addplayer();
 }
}
function right(){
 if(x<900){
     x= x+width;
     canvas.remove(Player);
     addplayer();
 }
}




