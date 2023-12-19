let currentPage = "home";
const sectionMovies = document.getElementById("section-movies");
const nav = {
    home: document.getElementById("home"),
    contact: document.getElementById("contact")
};
const links = [nav.home, nav.contact];

//carga el contenido por primera vez con el home
getContentHTML(currentPage);

//Función para cargar el contenido html
function getContentHTML(pageName) {
    const filepath = `./${pageName}.html`;

    const xhr = new XMLHttpRequest();

    xhr.open("get", filepath);

    xhr.onload = () => {
        if (xhr.status === 200) {
            sectionMovies.innerHTML = xhr.response;
            setActiveLink(links, nav[pageName]);
            //Si la pagina que se debe cargar es el home, genero las cards con las movies
            if (pageName == "home") {
                movies.forEach(movie => { createCard(movie) });
            }
        }
    };

    xhr.send();
};

//Agregar oyente de evento click en cada link.
for (let i = 0; i < links.length; i++) {
    const link = links[i];

    link.addEventListener('click', (e) => {
        getContentHTML(e.target.id);
    });
}

// Activar el link de la página actual.
function setActiveLink(links, linkActive) {
    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        link.className = "";
    }
    linkActive.className = "link-active";
}

/*Movies*/

const movies =
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
        }
    ];

function Movie(name, description, img, year) {
    this.name = name
    this.description = description;
    this.img = img;
    this.year = year;
}

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
