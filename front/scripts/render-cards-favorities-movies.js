const contenedorPeliculasFavoritas = document.getElementById("contenedor-peliculas-favoritas");


const mapeoPeliculasFavoritas =  (pelicula) => {
    const { title, year, director, duration, genre, rate, poster } = pelicula;

    const div = document.createElement("div");
    div.classList.add("tarjeta-pelicula");
    div.id = "tarjeta-pelicula"

    const h2 = document.createElement("h2");
    h2.classList.add("titulo-pelicula");
    h2.innerHTML = title;

    const img = document.createElement("img");
    img.classList.add("poster-pelicula");
    img.src = poster;

    const ul = document.createElement("ul");
    ul.classList.add("descripcion-pelicula");

    const li_a = document.createElement("li");
        li_a.innerHTML = `Pelicula producida en el año: ${year}`
    const li_b = document.createElement("li");
        li_b.innerHTML = `Dirigida por: ${director}`
    const li_c = document.createElement("li");
        li_c.innerHTML = `Con una duracion de: ${duration}`
    const li_d = document.createElement("li");
    const genreJoin = genre.join(" - ");
        li_d.innerHTML = `Genero: ${genreJoin}`
    const li_e = document.createElement("li");
        li_e.innerHTML = `La critica le dio una puntuacion de: ${rate}`

    ul.appendChild(li_a);
    ul.appendChild(li_b);
    ul.appendChild(li_c);
    ul.appendChild(li_d);
    ul.appendChild(li_e);

    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(ul);
    contenedorPeliculasFavoritas.appendChild(div);
};
peliculasFavoritas.forEach(mapeoPeliculasFavoritas);

