const message=`Oye Duma,

I miss you so much. These past two days have felt like years.

I can't handle this stress alone.

I know I upset you by talking to other girls and by doubting you.

I'm truly sorry.

My doubts come from caring about you, but I see how that hurt you and I take responsibility.

I promise I'll stop talking to girls at the club.

I'll never let a third person come between us.

I'll always tell you everything first.

I don't want to give you more tension.

I know you're stressed about your studies.

I'll always support you.

I'll always stand beside you.

I'm ready to do whatever it takes to fix this.

Please forgive me.

I feel lost without you.

I'm not even eating properly because I worry about us.

Come back to me.

I love you more than words can ever express.

Forever Yours,

❤️ Siddhant ❤️`;

let i=0;

function type(){

if(i<message.length){

document.getElementById("typing").innerHTML+=message.charAt(i);

i++;

setTimeout(type,35);

}

}

type();

for(let i=0;i<40;i++){

let rose=document.createElement("div");

rose.innerHTML="🌹";

rose.style.position="absolute";

rose.style.left=Math.random()*100+"vw";

rose.style.top="-50px";

rose.style.fontSize=(20+Math.random()*25)+"px";

rose.style.animation=`fall ${6+Math.random()*5}s linear infinite`;

rose.style.animationDelay=Math.random()*5+"s";

document.body.appendChild(rose);

}

let style=document.createElement("style");

style.innerHTML=`

@keyframes fall{

to{

transform:translateY(110vh) rotate(360deg);

}

}`;

document.head.appendChild(style);

function nextPage(){

window.location="gallery.html";

}
