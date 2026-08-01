const no=document.getElementById("no");

no.addEventListener("mouseover",()=>{

no.style.left=Math.random()*80+"vw";

no.style.top=Math.random()*80+"vh";

});

document.getElementById("yes").onclick=function(){

confetti({

particleCount:500,

spread:180,

origin:{y:.6}

});

setTimeout(()=>{

document.body.innerHTML=`

<div style="text-align:center;color:white">

<h1 style="font-size:70px">

💖 Thank You ❤️

</h1>

<h2>

Duma,

Will You Be Mine Forever?

💍❤️

</h2>

<h3>

I Love You More Than Yesterday,

Less Than Tomorrow.

</h3>

<p style="font-size:30px;margin-top:40px">

Forever Yours,

<br><br>

❤️ Siddhant ❤️

</p>

</div>

`;

},1500);

}
