const peliculas = [
  
    {
        nombre: "Breaking Bad",
        genero: "Drama/6 Temporadas",
        img: "./assets/imagenes/bad.jpg",
        año: "2008",
        trailer: "https://www.youtube.com/watch?v=HhesaQXLuRY",
    },
    {
        nombre: "The Good Doctor",
        genero: "Drama Medico/6 Temporadas",
        img: "./assets/imagenes/good.jpg",
        año: "2017",
        trailer: "https://www.youtube.com/watch?v=uHSzihtBkEk",

    },
    {
        nombre: "La Casa de Papel",
        genero: "Suspenso/5 Temporadas",
        img: "./assets/imagenes/lacasa.jpg",
        año: "2017",
        trailer: "https://www.youtube.com/results?search_query=la+casa+de+papel+trailer",
    },
    {
        nombre: "Lucifer",
        genero: "Misterio/6 temporadas",
        img: "./assets/imagenes/lucifer.jpg",
        año: "2016",
        trailer: "https://www.youtube.com/watch?v=X4bF_quwNtw",
    },
    {
        nombre: "Lupin",
        genero: "Misterio/2 Temporadas",
        img: "./assets/imagenes/lupin.jpg",
        año: "2021",
        trailer: "https://www.youtube.com/watch?v=yX5Py7lL5dw",
    },
    {
        nombre: "Peaky Blinders",
        genero: "Drama/6 Temporadas",
        img: "./assets/imagenes/peaky.jpg",
        año: "2013",
        trailer: "https://www.youtube.com/watch?v=H282c9q2MUU",
    },
    {
        nombre: "Sense8",
        genero: "Drama/2 Temporadas",
        img: "./assets/imagenes/sense.webp",
        año: "2015",
        trailer: "https://www.youtube.com/watch?v=A-nobAk_TyI",
    },
    {
      nombre: "The100",
      genero: "Ciencia Ficciom/7 Temporadas",
      img: "./assets/imagenes/the100.jpg",
      año: "2014",
      trailer: "https://www.youtube.com/watch?v=ia1Fbg96vL0",
  },
  {
    nombre: "The Umbrella Academy",
    genero: "Accion/3 Temporadas",
    img: "./assets/imagenes/ubrella.jpg",
    año: "2019",
    trailer: "https://www.youtube.com/watch?v=KHucKOK-Vik",
  },
  {
    nombre: "The Witcher",
    genero: "Fantasia/2 Temporadas",
    img: "./assets/imagenes/wit.jpeg",
    año: "2019",
    trailer: "https://www.youtube.com/watch?v=ETY44yszyNc",
  },
  {
    nombre: "Control Z",
    genero: "Drama/ 3 Temporadas",
    img: "./assets/imagenes/control.png",
    año: "2018",
    trailer: "https://www.youtube.com/watch?v=QQ4sMbI_oJ0",
  },
  {
    nombre: "The Vampirie Diaries",
    genero: "Misterio/ 8 Temporadas",
    img: "./assets/imagenes/vam.jpg",
    año: "2003",
    trailer: "https://www.youtube.com/watch?v=BmVmhjjkN4E",
  },
  {
    nombre: "Vikingos",
    genero: "Drama/ 6 Temporadas",
    img: "./assets/imagenes/vik.jpg",
    año: "2009",
    trailer: "https://www.youtube.com/watch?v=CLVZmXzeZx8",
  },
  {
    nombre: "The Walking Dead",
    genero: "Terror/ 11 Temporadas",
    img: "./assets/imagenes/ded.jpg",
    año: "2010",
    trailer: "https://www.youtube.com/watch?v=ESq0vvSoLq8",
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
