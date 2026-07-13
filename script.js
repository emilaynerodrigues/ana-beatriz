const frases=[

"Oi Ana ❤️",

"Fiz este pequeno jardim especialmente para você.",

"Cada linha deste código foi escrita pensando em você.",

"Assim como o girassol procura a luz...",

"...meus pensamentos sempre encontram você.",

"Espero que este pequeno presente consiga fazer você sorrir 🌻"

];

const texto=document.getElementById("texto");

let frase=0;

let letra=0;

function escrever(){

if(letra<frases[frase].length){

texto.innerHTML+=frases[frase][letra];

letra++;

setTimeout(escrever,70);

}

else{

setTimeout(()=>{

texto.innerHTML="";

frase=(frase+1)%frases.length;

letra=0;

escrever();

},3000);

}

}

escrever();

const hearts=document.getElementById("hearts");

function heart(){

const h=document.createElement("div");

h.className="heart";

h.innerHTML="💖";

h.style.left=Math.random()*500+"px";

h.style.top=100+Math.random()*250+"px";

h.style.fontSize=20+Math.random()*20+"px";

hearts.appendChild(h);

setTimeout(()=>{

h.remove();

},6000);

}

setTimeout(()=>{

setInterval(heart,250);

},4000);