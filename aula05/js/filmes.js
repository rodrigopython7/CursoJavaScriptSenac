window.addEventListener("load", carregar);


const main = document.getElementById("main");

function carregar(){
// vamos carregar as api's com todos os filmes. Usaremos o comando fetch
fetch ('https://api.themoviedb.org/3/movie/popular?api_key=e8ee1b7136ab091a2fb872089bf3c840&language=pt-BR&page=1')
.then((response)=>response.json())
.then((rs)=>{
    rs.results.map((v,i)=>{
        main.innerHTML+=`<div>
                        <img src=https://image.tmdb.org/t/p/w500${v.poster_path}>
                        <h2>${v.title}</h2>
                        <p>${v.overview}</p>
                        </div>`;

    })
})

}