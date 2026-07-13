const frases=[

"Ana, você tem sido meu segundo girassol.",

"Todos os nossos momentos, mesmo os mais breves, me fazem sentir paz.",

"Todos os dias, assim como o girassol procura a luz...",

"... meus pensamentos sempre procuram você.",

"Mesmo nas diferenças, você tem sido minha luz, minha alegria...",

"É você quem tenho escolhido.",

"Você poderia ser minha?"

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
