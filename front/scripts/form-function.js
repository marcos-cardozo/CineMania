document.getElementById("add-movie-form").addEventListener("submit", async (event) => {
    event.preventDefault(); 
  
    const movie = {
      title: document.getElementById("title-movie").value,
      year: parseInt(document.getElementById("year-movie").value),
      director: document.getElementById("director-movie").value,
      duration: document.getElementById("duration-movie").value,
      genre: document.getElementById("genre-movie").value.split(",").map(g => g.trim()),
      rate: parseFloat(document.getElementById("rate-movie").value),
      poster: document.getElementById("poster-movie").value
    };
  
    try {
      const response = await fetch("http://localhost:3000/movies", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(movie)
      });
  
      if (response.ok) {
        alert("Película agregada con éxito");
        document.getElementById("add-movie-form").reset();
      } else {
        alert("Error al agregar la película: " + (await response.json()).message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al agregar la película");
    }
  });
  