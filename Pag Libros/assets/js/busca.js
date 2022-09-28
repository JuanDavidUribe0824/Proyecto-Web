const Libros = [
  
    {
        nombre: "El club de las 5 de la mañana",
        genero: "Disciplina",
        img: "./assets/images/movies/imagen1.jpg",
        año: "04-12-2018",
        trailer: "https://books.google.com.co/books/about/El_Club_de_las_5_de_la_ma%C3%B1ana.html?id=QWN0DwAAQBAJ&source=kp_book_description&redir_esc=y",
    },
    {
        nombre: "Uno siempre cambia al amor de su vida, (por otro amor o por otra vida)",
        genero: "Romantico",
        img: "./assets/images/movies/imagen2.jpg",
        año: "09-09-2015",
        trailer: "https://books.google.com.co/books/about/Uno_Siempre_Cambia_Al_Amor_de_Su_Vida_po.html?id=oeplwgEACAAJ&source=kp_book_description&redir_esc=y",

    },
    {
        nombre: "Hábitos Atómicos",
        genero: "Disciplina",
        img: "./assets/images/movies/imagen3.jpg",
        año: "16-10-2018",
        trailer: "https://books.google.com.co/books/about/H%C3%A1bitos_at%C3%B3micos.html?id=TXiMDwAAQBAJ&source=kp_book_description&redir_esc=y",
    },
    {
        nombre: "Crónica de una muerte anunciada",
        genero: "Novela/Policial",
        img: "./assets/images/movies/imagen4.jpg",
        año: "1981",
        trailer: "https://es.wikipedia.org/wiki/Cr%C3%B3nica_de_una_muerte_anunciada",
    },
    {
        nombre: "El principito",
        genero: "Literatura infantil/Fábula/Ficción especulativa",
        img: "./assets/images/movies/imagen5.jpg",
        año: "06-04-1943",
        trailer: "https://es.wikipedia.org/wiki/El_principito",
    },
    {
        nombre: "La culpa es de la vaca",
        genero: "Reflexiones",
        img: "./assets/images/movies/imagen6.jpg",
        año: "21-09-2021",
        trailer: "https://books.google.com.co/books/about/La_Culpa_Es_de_la_Vaca_Remasterizado.html?id=BYWazgEACAAJ&source=kp_book_description&redir_esc=y",
    },
    {
        nombre: "La ley de la atracción",
        genero: "Acción/Fantasía",
        img: "./assets/images/movies/imagen7.jpg",
        año: "12-11-2007",
        trailer: "https://www.amazon.com/ley-atracci%C3%B3n-realidad-Crecimiento-personal/dp/8479536616#:~:text=all%202%20images-,La%20ley%20de%20la%20atracci%C3%B3n%3A%20El%20secreto%20que%20har%C3%A1%20realidad,)%20Paperback%20%E2%80%93%20November%2012%2C%202007",
    },
    {
      nombre: "Un pequeño curso de felicidad para enfrentar una pérdida",
      genero: "Emocional",
      img: "./assets/images/movies/imagen8.jpg",
      año: "28-02-2020",
      trailer: "https://books.google.com.co/books/about/Un_Peque%C3%B1o_Curso_de_Felicidad_Para_Enfr.html?id=cutSyAEACAAJ&source=kp_book_description&redir_esc=y",
  },
  {
    nombre: "Piense y hagase rico",
    genero: "Acción/Aventura",
    img: "./assets/images/movies/imagen9.jpg",
    año: "1937",
    trailer: "https://es.wikipedia.org/wiki/Piense_y_h%C3%A1gase_rico",
  },
  {
    nombre: "El hombre más rico de babilonia",
    genero: "Disciplina",
    img: "./assets/images/movies/imagen10.jpg",
    año: "1926",
    trailer: "https://books.google.com.co/books/about/El_Hombre_Mas_Rico_de_Babilonia.html?id=QksCzgEACAAJ&source=kp_book_description&redir_esc=y",
  },
  {
    nombre: "El poder del anclaje magazine",
    genero: "Disciplina",
    img: "./assets/images/movies/imagen11.jpg",
    año: "2018",
    trailer: "https://sipuedes.org/wp-content/uploads/EL-PODER-DEL-ANCLAJE-MAGAZINE-ANTHONY-ROBBINS.pdf",
  },
  {
    nombre: "Padre rico, padre pobre",
    genero: "Finanzas peronales",
    img: "./assets/images/movies/imagen12.jpg",
    año: "1997",
    trailer: "https://es.wikipedia.org/wiki/Padre_Rico,_Padre_Pobre",
  },
  {
    nombre: "Inquebrantables",
    genero: "Motivación",
    img: "./assets/images/movies/imagen13.jpg",
    año: "2019",
    trailer: "https://books.google.com.co/books/about/Inquebrantables.html?id=yXuoDwAAQBAJ&source=kp_book_description&redir_esc=y",
  },
  {
    nombre: "Cien años de soledad",
    genero: "Novela/Realismo mágico/Ficción",
    img: "./assets/images/movies/imagen14.jpg",
    año: "1967",
    trailer: "https://es.wikipedia.org/wiki/Cien_a%C3%B1os_de_soledad",
  },

];

const input = document.querySelector("#buscar");
const boton = document.querySelector("#boton");
const resultado = document.querySelector("#Libros");

const filtro = () => {
    resultado.innerHTML = "";
    const texto = input.value.toLowerCase();
    for (let Libro of Libros) {
        let nombre = Libro.nombre.toLowerCase();
        if (nombre.indexOf(texto) !== -1) {
            resultado.innerHTML += `
         
            <div class="movie-card">

            <div class="card-head">
              <img src="${Libro.img}" alt="" class="card-img">

              <div class="card-overlay">

                <div class="bookmark">
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>

                <div class="play">
                  <a href="${Libro.trailer}" target="_blank"><ion-icon name="play-circle-outline"></ion-icon></a>
                </div>

              </div>
            </div>

            <div class="card-body">
              <h3 class="card-title">${Libro.nombre}</h3>

              <div class="card-info">
                <span class="genre">${Libro.genero}</span>
                <span class="year">${Libro.año}</span>
              </div>
            </div>

          </div>

            `;
        }
    }
    if (resultado.innerHTML === "") {
        resultado.innerHTML += `
            <li>El libro no fue encontrado</li>
            `;
    }
};

boton.addEventListener("click", filtro);
input.addEventListener("keyup", filtro);
filtro();
