const peliculas = [
  
    {
        nombre: "Red Notice",
        genero: "Acción/Comedia",
        img: "./assets/images/movies/red-notice.jpg",
        año: "2021",
        trailer: "https://youtu.be/Pj0wz7zu3Ms",
    },
    {
        nombre: "Spider-Man: de regreso a casa",
        genero: "Acción/Aventura",
        img: "./assets/images/movies/spider-men.jpg",
        año: "2017",
        trailer: "https://youtu.be/sfPWvYKKAJ4",

    },
    {
        nombre: "Matrix Resurrecciones",
        genero: "Acción/Ciencia Ficción",
        img: "./assets/images/movies/matrix.jpg",
        año: "2021",
        trailer: "https://youtu.be/qjnvX44LoQw",
    },
    {
        nombre: "Eternals",
        genero: "Acción/Aventura/Fantasía",
        img: "./assets/images/movies/eternals.jpg",
        año: "2021",
        trailer: "https://youtu.be/v1EkoQV4g5c",
    },
    {
        nombre: "Dune",
        genero: "Aventura/Ciencia Ficción",
        img: "./assets/images/movies/dune.jpg",
        año: "2021",
        trailer: "https://youtu.be/TTgk_iT8Uts",
    },
    {
        nombre: "1917",
        genero: "Guerra/Drama",
        img: "./assets/images/movies/1917.jpg",
        año: "2019",
        trailer: "https://youtu.be/SBc69RKIqwg",
    },
    {
        nombre: "Shang-Chi y la leyenda de los Diez Anillos",
        genero: "Acción/Fantasía",
        img: "./assets/images/movies/shang-chi.jpg",
        año: "2021",
        trailer: "https://youtu.be/BD77EOU8N3o",
    },
    {
      nombre: "Casino Royale",
      genero: "Acción/Fantasía",
      img: "./assets/images/movies/casino-royale.jpg",
      año: "2006",
      trailer: "https://youtu.be/36mnx8dBbGE",
  },
  {
    nombre: "Batman: el caballero de la noche",
    genero: "Acción/Aventura",
    img: "./assets/images/movies/dark-knight.jpg",
    año: "2008",
    trailer: "https://youtu.be/EXeTwQWrcwY",
  },
  {
    nombre: "Pantera Negra",
    genero: "Acción/Fantasía",
    img: "./assets/images/movies/panther.jpg",
    año: "2018",
    trailer: "https://youtu.be/XR7Ev14vUh8",
  },
  {
    nombre: "Venom",
    genero: "Acción/Fantasía/Aventura",
    img: "./assets/images/movies/venom.jpg",
    año: "2018",
    trailer: "https://youtu.be/u9Mv98Gr5pY",
  },
  {
    nombre: "El Señor de los Anillos: el retorno del Rey",
    genero: "Acción/Fantasía/Aventura",
    img: "./assets/images/movies/LOTR.jpg",
    año: "2003",
    trailer: "https://youtu.be/r5X-hFf6Bwo",
  },
  {
    nombre: "Rescatando al soldado Ryan",
    genero: "Guerra/Drama/Acción",
    img: "./assets/images/movies/saving-private-ryan.jpg",
    año: "1998",
    trailer: "https://youtu.be/yU6IjZPQ8cQ",
  },
  {
    nombre: "Interestelar",
    genero: "Ciencia ficción/Aventura",
    img: "./assets/images/movies/interstaller.jpg",
    año: "2014",
    trailer: "https://youtu.be/UDVtMYqUAyw",
  },

];

const input = document.querySelector("#buscar");
const boton = document.querySelector("#boton");
const resultado = document.querySelector("#peliculas");

const filtro = () => {
    resultado.innerHTML = "";
    const texto = input.value.toLowerCase();
    for (let pelicula of peliculas) {
        let nombre = pelicula.nombre.toLowerCase();
        if (nombre.indexOf(texto) !== -1) {
            resultado.innerHTML += `
         
            <div class="movie-card">

            <div class="card-head">
              <img src="${pelicula.img}" alt="" class="card-img">

              <div class="card-overlay">

                <div class="bookmark">
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>

                <div class="rating">
                  <ion-icon name="star-outline"></ion-icon>
                  <span>8.0</span>
                </div>

                <div class="play">
                  <a href="${pelicula.trailer}" target="_blank"><ion-icon name="play-circle-outline"></ion-icon></a>
                </div>

              </div>
            </div>

            <div class="card-body">
              <h3 class="card-title">${pelicula.nombre}</h3>

              <div class="card-info">
                <span class="genre">${pelicula.genero}</span>
                <span class="year">${pelicula.año}</span>
              </div>
            </div>

          </div>

            `;
        }
    }
    if (resultado.innerHTML === "") {
        resultado.innerHTML += `
            <li>Pelicula no fue encontrada</li>
            `;
    }
};

boton.addEventListener("click", filtro);
input.addEventListener("keyup", filtro);
filtro();
