// vamos criar a primeira função 
// uma função sem retorno e sem argumento 
// com uma saída padrão na tela de console 

function msg(){

    console.log('Olá');

}// fim da função msg

function data(){
    // capturar a data do sistma 
    console.log(new Date().toLocaleDateString());

}
// vamos criar uma função com argumentos 
function dados(nome){
    console.log(`Ola ${nome}! Hoje é ${new Date().toLocaleDateString()}`)
}

const clique = document.getElementById("clique")
// clique.onclick = data;
// clique.onclick = function(){
//     n = prompt("Digite o seu nome ");
//     dados(n);
// }

// vamos criar uma função com retorno 
function soma(valores){

// variavel q guarda o resultado da soma 
var rs = 0;
for(var i = 0 ; i < valores.length ; i++){
        rs += valores[i];
    }//fim do for 
    return rs;

}//fim da função

clique.onclick = function(){
    n = [1, 2, 3, 4, 5, 6, 7, 8];
    console.log(soma(n));
    alert(soma(n));
    document.title = soma(n);
};

// ------- função anonima e arrow fuction -----


const calcular = function(){
    console.log(20+10);
}


document.onclick = calcular;

const mudar = ()=>{
    document.body.style.backgroundColor = "red";
}

clique.onmouseover = mudar;
clique.onmouseout = ()=>{
    document.body.style.backgroundColor = "yellow";

};

// -------------- subfunção, FUNÇÃO dentro de outra -----
// closures
const desconto = (preco, percent)=>{
    return preco * calc(percent);

    function calc (p){
        return p/100;
    }
}

const btn = document.getElementById("btn");
btn.onclick = () =>{
    console.log(desconto(500,6));
}


