// vamos alterar o titulo da página por meio do comando abaixo

window.document.title="Trabalho com estruturas";

// vamos dividir a tela em três partes (header / main / footer)

const header = document.createElement("header");
const main = document.createElement("main");
const footer = document.createElement("footer");

// vamos criar um titulo para adicionar ao header
const h1 = document.createElement("h1")

// agora, criaremos um texto para aplicar no h1

const txth1 = document.createTextNode("Página Home");

//add o texto h1
h1.appendChild(txth1);

//add o h1 ao header
header.appendChild(h1);

// vamos criar um subititulo com h2
const h2 = document.createElement("h1");

// vamos criar o texto para h2
const txth2 = document.createTextNode("Veja as fotos: ");

h2.appendChild(txth2);

// add o h2 no main 
main.appendChild(h2);

// // criar o elemento de imagem 
// const img = document.createElement("img");


// // colocar o caminho da imagem no elemento img
// img.src = "img/img1.jpg";

// // add ao main 
// main.appendChild(img);
// refatorar o código acima 

const imgGrande = document.createElement("div");
// aplicação de estilo css na div imgGrande
// usando javascript 
imgGrande.style.borderWidth="1px";
imgGrande.style.borderColor="red";
imgGrande.style.borderStyle = "solid";
imgGrande.style.width="600px";
imgGrande.style.height="500px";


for (var i = 1; i<= 4; i++){
    var img = document.createElement("img");
    img.src="img/img"+i + ".jpg";
    
    // aplicar um atributo de class para as imagens 
    img.setAttribute("class","foto");
    main.appendChild(img);
    
    img.onclick = function(){
        imgGrande.appendChild(img);
        img.style.width="100%";
        img.style.height="100%";
    };
}
main.appendChild(imgGrande);








// vamos adicionar os três elementos no body da página 
window.document.body.appendChild(header);
window.document.body.appendChild(main);
window.document.body.appendChild(footer);