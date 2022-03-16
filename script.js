//pregunto la fecha y hora
var laHora = new Date().getHours();
document.querySelector("#hora").innerHTML = laHora;
var elSaludo;
if (5 < laHora && laHora < 12) {
    elSaludo = "Wenos días, tengo un dato interesante para usted";
} else if (11 < laHora && laHora < 19) {
    elSaludo = "Wenas tardes, tengo un dato interesante para usted";
} else if (20 < laHora && laHora < 4){
    elSaludo = "Wenas noches, si te doy este dato ahora no dormiras... pero aun asi te lo dare";
}
// pregunto la ubicación
var dondeEstas;
if (document.body.classList.contains("portada")) {
    dondeEstas = true;
} else {
    dondeEstas = false;
}
//voy a buscar unos datos
var starWars;
function preload() {
    var api = "https://swapi.dev/api/people/?page=3&format=json";
    starWars = loadJSON(api);
}
//tomo el main
var loPrincipal = document.querySelector("main");

function setup() {
    noCanvas();
    createElement("h1", elSaludo).parent(loPrincipal).id("contenido");
    createA("index.html", "index").parent("vinculos");
    createA("page.html", "page").parent("vinculos");
    if (dondeEstas) {
      x = Math.round(random(0,1)*10);
        portada();
    } else {
      y = Math.round(random(0,1)*10);
        pagina();
    }
}

function portada() {
    console.log(x);
    createSpan(" ¿Sabía usted que " + starWars.results[x].name + " nacio el año " + starWars.results[0].birth_year + "?").parent("contenido");
    select("a:nth-child(1)").style("color", "#FFFFFF");
}
function pagina() {
    createSpan(" ¿Sabía usted que " + starWars.results[0].name + " tiene el cabello de color " + starWars.results[0].hair_color + "?").parent("contenido");
    select("a:nth-child(2)").style("color", "#FFFFFF");
}
