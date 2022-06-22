
const mostraFilmes = (data) => {

    let dadosFilmes = JSON.parse(data.target.response)
    localStorage.setItem('db_filmes', data.target.response)

    let dadosHTML = '';
    for(let i =0; i < 4; i++){
        let filme = dadosFilmes.results[i];
        dadosHTML += `
        <div class="col-12 col-sm-12 col-md-6 col-lg-3">
        <div class="card-filme " widht="100%">
            <img src="https://image.tmdb.org/t/p/w500/${filme.poster_path}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${filme.title}</h5>
                <p class="card-text">${filme.overview}.</p>
                <a href="detalhes.html?id=${filme.id}" class="btn btn-primary">Detalhes</a>
            </div>
        </div>
    </div>
        `
    }
    document.getElementById ('popular_films').innerHTML = dadosHTML
}



const init = () => {
    let xhr = new XMLHttpRequest();
    let url = "https://api.themoviedb.org/3/movie/popular?api_key=a1cca419215daadf2d9df277b87c55a3&language=pt-BR";
    xhr.onload = mostraFilmes;
    xhr.open('GET', url, true);
    xhr.send();

   
}



document.body.onload = init