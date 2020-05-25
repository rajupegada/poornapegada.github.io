//js file for color game
var numsquare=6
var colors=generateColors(numsquare);
var pickedColor=pickColor();
var square=document.querySelectorAll(".square");
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var colorDisplay=document.querySelector("#colorDisplay");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");


colorDisplay.textContent=pickedColor;

easybtn.addEventListener("click",function(){
  hardbtn.classList.remove("selected");
  easybtn.classList.add("selected");
  numsquare=3;
  colors=generateColors(numsquare);
  pickedColor=pickColor();
  colorDisplay.textContent=pickedColor;
  for(var i=0;i<square.length;i++){
  if(colors[i])
    square[i].style.backgroundColor=colors[i];
  else
    square[i].style.display="none";
}
});

hardbtn.addEventListener("click",function(){
  hardbtn.classList.add("selected");
  easybtn.classList.remove("selected");
  numsquare=6;
  colors=generateColors(numsquare);
  pickedColor=pickColor();
  colorDisplay.textContent=pickedColor;
  for(var i=0;i<square.length;i++){
    square[i].style.backgroundColor=colors[i];
    square[i].style.display="block";
}
});


reset.addEventListener("click",function(){
  colors=generateColors(numsquare);
  pickedColor=pickColor();
  colorDisplay.textContent=pickedColor;
  message.textContent="";
  this.textContent="New Colors"
  for(var i=0;i<square.length;i++){
  square[i].style.backgroundColor=colors[i];
}
  h1.style.backgroundColor="steelblue";
});

for(var i=0;i<square.length;i++){
  square[i].style.backgroundColor=colors[i];
  square[i].addEventListener("click",function(){
  var clickedColor=this.style.backgroundColor;

    if(clickedColor==pickedColor){
      message.textContent="Correct!!";
      reset.textContent="PLAY AGAIN?"
      changeColors(clickedColor);
    }
    else{
      this.style.backgroundColor="#232323";
      message.textContent="Try Again!!";
        }

      });
}
function changeColors(clickedColor){
  for(var i=0;i<square.length;i++){
    //changing all colors to correct color 
    square[i].style.backgroundColor=clickedColor;
    h1.style.backgroundColor=clickedColor
  }
}

function pickColor(){
  //generate random color using Math.random
  var random=Math.floor(Math.random()*colors.length);
  return colors[random];
}

function generateColors(num){
  //create an array
  var c=[];
  //generate colors
  for(var i=0;i<num;i++){
    c[i]=randomColor();
  }
  //returning colors array
  return c;
}
function randomColor(){
  //generate red color from 0-255 
  var r=Math.floor(Math.random()*256);
  //generate green color from 0-255 
  var g=Math.floor(Math.random()*256);
  //generate blue color from 0-255 
  var b=Math.floor(Math.random()*256);
  return "rgb("+r+", "+g+", "+b+")";
}