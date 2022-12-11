//Reto 1

const play= () =>{
    const target = document.querySelector('.target');
    
    if(target != undefined){
        target.className = '';
    }
    
    const circulo = document.getElementById(Math.floor(Math.random()*9+1))
    circulo.className = 'target';
    
    circulo.addEventListener('click', () =>{
        clearTimeout(id);
        alert('you win')
    })
    const id = setTimeout(play, 3000);
    }

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

//Otra respuesta alternativa al Reto 2:
//const tests = document.getElementById("tests");

//tests.addEventListener("keydown", (k)=>{
   // if(k.key=="r"){
      //  tests.className="red"
   // }else if(k.key=="y"){
     //   tests.className=="yellow"
   // }else if(k.key=="w"){
     //   tests.className="white";
   // }
//})

//Reto 3

const formulario = document.getElementById('contacte');

formulario.addEventListener("submit", () => {

    alert("Se ha enviado el formulario");

});

// Otra solución

// function validation(x){
//     alert("validation here")
    
//     }
    
//     document.querySelector('#formbutton').addEventListener("click", validation);
    

//Reto 4
const audio = document.getElementById('reproductor');

//Respuesta alternativa al Reto 4:
//let audio = document.getElementById('reproductor');
//audio.onpause = function(){
    //alert('audio pausado');
//}

audio.addEventListener("pause", () => {

    alert("Se ha pausado la reproducción");

});

//Reto 5

const addButton = document.getElementById('addButton');
const keywordElement = document.getElementById('keyword');
const valElement = document.getElementById('value');


addButton.addEventListener('click',function(){
    localStorage.setItem(keywordElement.value, valElement.value);
    alert('se ha modificado el localstorage desde la página principal')
});

//window.addEventListener('storage',()=>alert(se ha modificado el localstorage'))







