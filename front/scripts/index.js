const mapeoPeliculas = require("./mapeoPeliculas");
const axios = require("axios");

const logoBoton = document.getElementById("img-logo");
const funcionLogo = () => {
  window.location.href = "../index.html";
};
logoBoton.addEventListener("click", funcionLogo);

const funcionTarjetas = async () => {
  try {
    const response = await axios.get("http://localhost:3000/movies");
    const resultado = response.data;
    const contenedorTarjetas = document.getElementById("seccion-peliculas");
    contenedorTarjetas.innerHTML = ""; 
    resultado.forEach(pelicula => {
      mapeoPeliculas(pelicula);
    });
  } catch (error) {
    console.error("Error al obtener las películas:", error);
  }
};

document.addEventListener("DOMContentLoaded", funcionTarjetas);


