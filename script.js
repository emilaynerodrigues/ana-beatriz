const frases=[

"Ana, você é minha saudade.",

"Sinto falta de você nos meus dias.",

"Sou completamente apaixonada por você.",

"Estou te esperando."

];

const texto=document.getElementById("texto");

let frase=0;
let letra=0;

function escrever(){

    if(letra < frases[frase].length){

        texto.innerHTML += frases[frase][letra];

        letra++;

        setTimeout(escrever,70);

    }

    else{

        // se chegou na última frase, para aqui
        if(frase === frases.length - 1){
            return;
        }

        setTimeout(()=>{

            texto.innerHTML="";

            frase++;
            letra=0;

            escrever();

        },3000);

    }

}

escrever();
