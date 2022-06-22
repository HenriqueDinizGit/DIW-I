document.getElementById('formulario').addEventListener('submit', pesquisarFilme);

function pesquisarFilme(e){
var filmePesquisa = document.getElementById('pesquisar').value;
buscarFilmes(filmePesquisa);
e.preventDefault();
}

function buscarFilmes(filmePesquisa){
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=a1cca419215daadf2d9df277b87c55a3&language=pt-BR" + filmePesquisa)
    .th
}