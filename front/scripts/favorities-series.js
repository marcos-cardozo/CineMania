const seriesFavoritas = [{
    title: "Breaking Bad",
    year: 2008,
    director: "Vince Gilligan",
    seasons: 5,
    genre: ["Crime", "Drama", "Thriller"],
    rate: 9.5,
    poster: "https://render.fineartamerica.com/images/rendered/default/poster/6/8/break/images/artworkimages/medium/3/breaking-bad-minimalist-illustration-remake-posters.jpg"
  },
  {
    title: "Los Soprano",
    year: 1999,
    director: "David Chase",
    seasons: 6,
    genre: ["Crime", "Drama"],
    rate: 9.2,
    poster: "https://media.posterlounge.com/img/products/770000/765163/765163_poster.jpg"
  }];
  

const contenedorSeriesFavoritas = document.getElementById("contenedor-series-favoritas");

const mapeoSeriesFavoritas =  (serie) => {
    const { title, year, director, seasons, genre, rate, poster } = serie;

    const div = document.createElement("div");
    div.classList.add("tarjeta-pelicula");
    div.id = "tarjeta-serie";

    const h2 = document.createElement("h2");
    h2.classList.add("titulo-pelicula");
    h2.innerHTML = title;

    const img = document.createElement("img");
    img.classList.add("poster-pelicula");
    img.src = poster;

    const ul = document.createElement("ul");
    ul.classList.add("descripcion-pelicula");

    const li_1 = document.createElement("li");
        li_1.innerHTML = `Serie producida en el año: ${year}`
    const li_2 = document.createElement("li");
        li_2.innerHTML = `Dirigida por: ${director}`
    const li_3 = document.createElement("li");
        li_3.innerHTML = `Cantidad de temporadas: ${seasons}`
    const li_4 = document.createElement("li");
    const genreJoin = genre.join(" - ");
        li_4.innerHTML = `Genero: ${genreJoin}`
    const li_5 = document.createElement("li");
        li_5.innerHTML = `La critica le dio una puntuacion de: ${rate}`

    ul.appendChild(li_1);
    ul.appendChild(li_2);
    ul.appendChild(li_3);
    ul.appendChild(li_4);
    ul.appendChild(li_5);

    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(ul);
    contenedorSeriesFavoritas.appendChild(div);
};

seriesFavoritas.forEach(mapeoSeriesFavoritas);


