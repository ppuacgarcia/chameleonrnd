//18/10/2022
//Pablo David Puac Garcia
//script for counter increase decrease and reset 
var red=0;
var green=0;
var blue=0;
//function for addition
function randomColor(){
    const bgcolor1=document.getElementById("bgcolor");
    red=Math.floor(Math.random()*256)
    green=Math.floor(Math.random()*256)
    blue=Math.floor(Math.random()*256)
    document.body.style.background='rgb('+red+','+green+','+blue+')'
    bgcolor1.innerHTML='rgb( '+red+', '+green+', '+blue+')'
}

