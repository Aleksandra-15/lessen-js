const API_URL = "/movies";
const fetchMovies = () => {
  const response = fetch(API_URL);
  const data = response.json();
  return data.movies;
};

const addMovie = (movie) => {
  const response = fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  });
  return response.json();
};

const updateMovie = (id, movie) => {
  const response = fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  });
  return response.json();
};

const patchMovie = (id, movie) => {
  const response = fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  });
  return response.json();
};

const deleteMovie = (id) => {
  const response = fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  return response.json();
};

document.getElementById("get-movies").addEventListener("click", async () => {
  const movies = fetchMovies();
  const moviesBody = document.getElementById("movies-body");
  moviesBody.innerHTML = ""; 
  movies.forEach((movie) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${movie.id}</td>
            <td>${movie.title}</td>
            <td>${movie.genre}</td>
            <td>${movie.director}</td>
            <td>${movie.year}</td>
            <td>
                <button class="update-movie" data-id="${movie.id}">Оновити</button>
                <button class="delete-movie" data-id="${movie.id}">Видалити</button>
            </td>
        `;
    moviesBody.appendChild(row);
  });

  document.querySelectorAll(".update-movie").forEach((button) => {
    button.addEventListener("click", async () => {
      const id = button.getAttribute("data-id");
      const updatedMovie = {
        title: prompt("Введіть нову назву фільму:"),
        genre: prompt("Введіть новий жанр:"),
        director: prompt("Введіть нового режисера:"),
        year: prompt("Введіть новий рік:"),
      };
      updateMovie(id, updatedMovie);
      alert("Фільм оновлено!");
      fetchMovies(); 
    });
  });

  document.querySelectorAll(".delete-movie").forEach((button) => {
    button.addEventListener("click", async () => {
      const id = button.getAttribute("data-id");
      deleteMovie(id);
      alert("Фільм видалено!");
      fetchMovies(); 
    });
  });
});

document.getElementById("add-movie").addEventListener("click", async () => {
  const newMovie = {
    title: document.getElementById("title").value,
    genre: document.getElementById("genre").value,
    director: document.getElementById("director").value,
    year: parseInt(document.getElementById("year").value),
  };
  addMovie(newMovie);
  alert("Фільм додано!");
  fetchMovies(); 
});

fetchMovies();
