var rand=Math.floor((Math.random()*6)+1);
function myfunction(){
if (rand===1){
    document.getElementsByClassName("img1")[0].setAttribute("src","./images/dice1.png");
}
else if(rand===2){
    document.getElementsByClassName("img1")[0].setAttribute("src","./images/dice2.png");
}
else if(rand===3){
    document.getElementsByClassName("img1")[0].setAttribute("src","./images/dice3.png");
}
else if(rand===4){
    document.getElementsByClassName("img1")[0].setAttribute("src","./images/dice4.png");
}
else if(rand===5){
    document.getElementsByClassName("img1")[0].setAttribute("src","./images/dice5.png");
}
else if(rand===6){
    document.getElementsByClassName("img1")[0].setAttribute("src","./images/dice6.png");
}}
var rand2=Math.floor((Math.random()*6)+1);
function myfunction2(){
if (rand2===1){
    document.getElementsByClassName("img2")[0].setAttribute("src","./images/dice1.png");
}
else if(rand2===2){
    document.getElementsByClassName("img2")[0].setAttribute("src","./images/dice2.png");
}
else if(rand2===3){
    document.getElementsByClassName("img2")[0].setAttribute("src","./images/dice3.png");
}
else if(rand2===4){
    document.getElementsByClassName("img2")[0].setAttribute("src","./images/dice4.png");
}
else if(rand2===5){
    document.getElementsByClassName("img2")[0].setAttribute("src","./images/dice5.png");
}
else if(rand2===6){
    document.getElementsByClassName("img2")[0].setAttribute("src","./images/dice6.png");
}}
function play(){
if (rand>rand2){
    document.querySelector("h1").textContent="Player 1 wins";
}
else if(rand===rand2){
    document.querySelector("h1").textContent="Draw";
}
else{
    document.querySelector("h1").textContent="Player 2 wins"
}}