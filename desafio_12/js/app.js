let currentPage = "home";
const defaultIMG = "./images/defaultMovie.jpg"
const main = document.getElementById("main");

/*Movies*/
let movies =
    [
        {
            title: "LA MALDICIÓN DEL QUEEN MARY",
            description: "Inspirada en la legendaria maldición del transatlántico Queen Mary, uno de los lugares más embrujados de este planeta.",
            img: "./images/queenMary.jpg",
            year: "2023"
        },
        {
            title: "AQUAMAN Y EL REINO PERDIDO",
            description: "Al no poder derrotar a Aquaman la primera vez, Black Manta, todavía impulsado por la necesidad de vengar la muerte de su padre, no se detendrá ante nada para derrotar a Aquaman de una vez por todas",
            img: "./images/aquaman.jpg",
            year: "2023"
        },
        {
            title: "CUANDO ACECHA LA MALDAD",
            description: "Al no poder derrotar a Aquaman la primera vez, Black Manta, todavía impulsado por la necesidad de vengar la muerte de su padre, no se detendrá ante nada para derrotar a Aquaman de una vez por todas",
            img: "./images/cuando-acecha-maldad.jpg",
            year: "2023"
        },
        {
            title: "LA ALDEA MALDITA",
            description: `Un pueblo pagano, fundado sobre los huesos tanto de inocentes como de inmundos, 
                        está profundamente arraigado en el corazón de un antiguo Edén. Cuando el equilibrio de la carne 
                        y el suelo se deteriora, el último anciano superviviente de la aldea lucha contra la locura y lo 
                        macabro para salvar a su gente no solo de sí mismos, sino también del juicio monstruoso que se esconde desde abajo.`,
            img: "./images/aldeamaldita.jpg",
            year: "2022"
        },
        {
            title: "SMILE",
            description: `Tras presenciar un extraño y traumático incidente con un paciente, la doctora Rose Cotter 
                        (Sosie Bacon) comienza a experimentar sucesos aterradores que no puede explicar. 
                        A medida que un miedo sobrecogedor comienza a afectar a todos los aspectos de su vida, 
                        Rose se verá obligada a afrontar a su problemático pasado para sobrevivir y escapar de su terrorífica nueva realidad.`,
            img: "./images/SMILE.jpg",
            year: "2022"
        },
        {
            title: "Medusa: Queen of the Serpents",
            description: `Después de ser mordida por una serpiente, la vida de una joven comienza a dar un giro hacia lo peor cuando un virus mortal ataca su cuerpo.`,
            img: "./images/medusa.jpg",
            year: "2021"
        },
        {
            title: "Spider-Man: Sin camino a casa",
            description: `Peter Parker está desenmascarado y ya no puede separar su vida normal de las altas 
                    apuestas de ser un superhéroe. Cuando le pide ayuda al Doctor Strange, lo que está en juego 
                    se vuelve aún más peligroso, lo que lo obliga a descubrir lo que realmente significa ser Spider-Man.`,
            img: "./images/spiderman.jpg",
            year: "2021"
        }


    ];

const nav = {
    home: document.getElementById("home"),
    contact: document.getElementById("contact")
};

const links = [nav.home, nav.contact];

//Carga el contenido por primera vez con el home
getContentHTML(currentPage);



//Función para cargar el contenido html
function getContentHTML(pageName) {

    const filepath = `./${pageName}.html`;
    const xhr = new XMLHttpRequest();

    xhr.open("get", filepath);

    xhr.onload = () => {
        if (xhr.status === 200) {
            main.innerHTML = xhr.response;
            executeScript(pageName);
        }
    };

    xhr.send();
};

//Agregar oyente de evento click en cada link.
for (let i = 0; i < links.length; i++) {
    const link = links[i];
    link.addEventListener('click', (e) => {

        /*e.preventDefault();
        let pageName = e.target.id;

        history.pushState({ page: pageName }, pageName, pageName);*/
        getContentHTML(e.target.id);

    });

}

//Activar el link de la página actual.
function setActiveLink(links, linkActive) {
    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        link.className = "";
    }
    linkActive.className = "link-active";

}

//Ejecuta el script de cada sección
function executeScript(page) {

    if (page == "home") {

        const sectionMovies = document.getElementById("section-movies");
        const searchBar = document.getElementById("id-search-product");
        const searchIcon = document.getElementById("search-icon");
        //const yearFilter = document.querySelectorAll(".year-filter");
        const yearFilter = document.querySelector(".year-filter");
        const addMovie = document.getElementById("add-movie")
        const years = Array.from(new Set(movies.map((item) => item.year)));


        movies.forEach(movie => { createCard(movie) });
        setActiveLink(links, nav[page]);

        function createCard(movie) {
            const figure = document.createElement("figure");
            const h3 = document.createElement("h3");
            const img = document.createElement("img");
            const h4 = document.createElement("h4");

            h3.innerText = movie.title;
            img.src = movie.img;
            img.alt = movie.title;
            h4.innerText = movie.year;

            figure.className = "card";
            figure.appendChild(h3);
            figure.appendChild(img);
            figure.appendChild(h4);


            sectionMovies.appendChild(figure);
        }

        //Oyente a boton agregar pelicula
        addMovie.addEventListener('click', (e) => {
            getContentHTML(e.target.id);
        });

        /*Busqueda*/
        //Boton de busqueda
        searchIcon.addEventListener("click", () => {
            searchMovies(searchBar.value);
        });

        //Buscar al apretar enter
        searchBar.addEventListener("keydown", function (event) {
            if (event.keyCode === 13 || event.key === 'Enter') {
                searchMovies(searchBar.value);
            }
        }
        );

        //Funcion para buscar peliculas
        function searchMovies(param) {

            if (document.querySelector(".no-results")) {

                sectionMovies.removeChild(document.querySelector(".no-results"))

            }

            param = param.toLowerCase();
            let results = false;

            const cards = document.querySelectorAll(".card");

            cards.forEach(card => {

                let title = card.innerText.toLowerCase();

                if (title.match(param)) {

                    card.style.display = "grid";
                    results = true;

                } else {
                    card.style.display = "none";
                }

            });

            if (!results) {

                showNoResults();

            }

        }

        //Mostrar mensaje de no se encontraron resultados
        function showNoResults() {

            const h3 = document.createElement("h3");
            h3.innerText = "No se encontraton resultados";
            h3.className = "no-results";
            sectionMovies.appendChild(h3);
        }

        /*filtro por año*/


        years.forEach(year => {

            const p = document.createElement("p");

            p.className = "year-filter-item";
            p.innerText = year;

            yearFilter.append(p);


        });


        yearFilter.childNodes.forEach(year => {

            year.addEventListener("click", (year) => {

                if (year.target.innerText == "Borrar") {

                    getContentHTML(currentPage);

                }

                searchMovies(year.target.innerText);

            });
        });
    }

    if (page == "contact") {
        setActiveLink(links, nav[page]);

    }
    if (page == "add-movie") {

        const inputTitle = document.getElementById("id-title");
        const inputYear = document.getElementById("id-year");
        const inputDescription = document.getElementById("id-desc");
        const inputImg = document.getElementById("id-photo");
        const inputBtnSave = document.getElementById("id-save");

        inputBtnSave.onclick = saveMovie;

        function saveMovie() {

            const newMovie = {
                title: inputTitle.value,
                description: inputDescription.value,
                img: defaultIMG,
                year: inputYear.value

            }


            if (validate()) {

                movies.push(newMovie);
                alert("Pelicula añadida!");
                getContentHTML("home");

            } else {
                alert("Debes completar todos los campos");
            }

        }

        function validate() {

            if (inputTitle.value && inputDescription.value && inputYear.value) {
                return true
            }

            return false;

        }


    }
}

/* ****************** HISTORY  ****************** */
/*const btnBack = document.getElementById("back");
const btnForward = document.getElementById("forward");

btnBack.addEventListener('click', () => {
    history.back();
});

btnForward.addEventListener('click', () => {
    history.forward();
});

window.onpopstate = (e) => {
    if (e.state) {
        getContentHTML(e.state.page);
    } else {
        getContentHTML("home");
    }
};*/