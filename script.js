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

//Reto 2

const cuadrado = document.getElementById('tests');

cuadrado.addEventListener("keydown", (evento) => {

    console.log(evento);

    if (evento.key === "r") {
        return cuadrado.className = "red";
    }

    if (evento.key === "y") {
         return cuadrado.className = "yellow";
    }

    if (evento.key === "w") {
         return cuadrado.className = "white";
    }

});
