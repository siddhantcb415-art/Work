const song=document.getElementById("song");

document.getElementById("open").onclick=function(){

song.play();

window.location="letter.html";

}

for(let i=0;i<200;i++){

let star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.width=Math.random()*3+"px";

star.style.height=star.style.width;

document.body.appendChild(star);

}

const start=new Date("September 10, 2023");

function timer(){

let now=new Date();

let diff=now-start;

let days=Math.floor(diff/(1000*60*60*24));

let hrs=Math.floor(diff/(1000*60*60)%24);

let mins=Math.floor(diff/(1000*60)%60);

let sec=Math.floor(diff/1000%60);

document.getElementById("countdown").innerHTML=

days+" Days ❤️ "+hrs+" Hours ❤️ "+mins+" Minutes ❤️ "+sec+" Seconds";

}

setInterval(timer,1000);

timer();
