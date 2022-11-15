//Reto 4
const audio = document.getElementById('reproductor');

audio.addEventListener("pause", () => {

    alert("Se ha pausado la reproducción");

});

//Reto 3

const formulario = document.getElementById('contacte');

formulario.addEventListener("submit", () => {

    alert("Se ha enviado el formulario");

});