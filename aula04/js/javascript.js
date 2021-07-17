// criando array com nomes

//var nomes = ["Cristiano", "Messi", "Neymar"];

// imprimir os nomes no consoles

//console.log(nomes);

// imprimir apenas um nome 

//console.log(nomes[0]);

// vamos refatorar o código da criação
// do Array. Você deve utilizar constantes
// para a criação de arrays. Assim você 
// garante a estrutura 

const nomes = ["Cristiano", "Messi", "Neymar"];

console.log(nomes);
// para adicionar novos nomes no elemento ao array usamos 
// o comanto push

nomes.push("Ronaldinho");
console.log(nomes);

// para retirar um elemento do array usamos o comando pop

nomes.pop();
console.log(nomes[0]);

// vamos ler o array de ponta a ponta usando um laço for

for (var i =0; i<= 2; i++){
    console.log(`Nome do cliente é ${nomes[i]}`);
}
console.log("----------------------------------");
nomes.push("Ronaldinho");
nomes.push("Beckham");
nomes.push("Gerrard");
nomes.push("Lampard");
for (var i =0; i< nomes.length; i++){
    console.log(`Nome do cliente é ${nomes[i]}`);
}
// vamos fazer uma referencia do body no javacript
const body = window.document.body;
// criar uma div e adicionar ao body
const div = document.createElement("div");
nomes.forEach(function(cli){
    // para cada (ForEach) nome no array nomes , iremos criar 
    // um h2 e adicionar na div 
    var h2 = document.createElement("h2");
        h2.innerHTML = `Client:${cli}`;
    // add h2 na div, um por um 
    div.appendChild(h2);
});

body.appendChild(div);
// vamos criar um array com chave de valor 
// usando o valor set com map

const cliente = new Map();
cliente.set("Cliente1","José");
cliente.set("Cliente2","José Ribamar");
cliente.set("Cliente3","José Alfredo");
cliente.set("Cliente4","José Afonso");

console.log(cliente.get("Cliente1"));

for ([ch,v] of cliente){
    console.log(v);
}
console.log("------------------------------")

const usuario = [

        {
    id : 1, 
    nome:"José",
    senha:"abc",


},
{
    id : 2, 
    nome:"José",
    senha:"abc",


}

];

console.log(usuario);


