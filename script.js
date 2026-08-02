const frases=[

"Ana, você é minha saudade.",

"Todos os dias sinto a falta da sua ausência.",

"Meus pensamentos não te esquecem.",

"Estou te esperando...",

"Por favor, volta."

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
