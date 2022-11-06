var muestraFoto = document.getElementById("visor");

document.getElementById("boton-angelica").addEventListener("click", function(){
    muestraFoto.src = "images/vidal.jpg";
});

document.getElementById("boton-carla").addEventListener("click",function(){
    muestraFoto.src = "images/gloria1.jpg";
});

document.getElementById("boton-diana").addEventListener("click", function(){
    muestraFoto.src = "images/rolando1.jpg";
});

document.getElementById("boton-ivan").addEventListener("click", function(){
    muestraFoto.src = "images/david.jpg";
});

document.getElementById("boton-juan").addEventListener("click", function(){
    muestraFoto.src = "images/ugel02.jpg";
});

/***********************************/

let bOscuro = document.getElementById("boton-oscuro");
let bClaro = document.getElementById("boton-claro");
let nosotros = document.getElementById("nosotros");

bOscuro.addEventListener("click", function(){
    nosotros.style.backgroundColor = "#000000";
    nosotros.style.color = "#FFFFFF";
});

bClaro.addEventListener("click", function(){
    nosotros.style.backgroundColor = "#F78B6D";
    nosotros.style.color = "#333333";
});

let frases = [];
frases[0] = "Rodéate de personas que te hagan crecer. María Teresa Arnal, Directora de Google México";
frases[1] = "Los líderes deben luchar por la autenticidad más que por la perfección. Sheryl Sandberg, COO de Facebook";
frases[2] = "Me levanto cada mañana y pienso. Leah Busque, fundadora de TaskRabbit";
frases[3] = "Siempre hice algo para lo que no me sentía completamente lista. Marissa Mayer, directora ejecutiva de Yahoo";

let botonFrase1 = document.getElementById("frase1");
let botonFrase2 = document.getElementById("frase2");
let botonFrase3 = document.getElementById("frase3");
let botonFrase4 = document.getElementById("frase4");
let fraseDia = document.getElementById("frase-dia");

botonFrase1.addEventListener("click", function(){
    fraseDia.innerHTML = frases[0];
})
botonFrase2.addEventListener("click", function(){
    fraseDia.innerHTML = frases[1];
})
botonFrase3.addEventListener("click", function(){
    fraseDia.innerHTML = frases[2];
})
botonFrase4.addEventListener("click", function(){
    fraseDia.innerHTML = frases[3];
})

//NUMEROS ALEATORIOS
//console.log(Math.floor(Math.random() * 20 ));
let nombrePersonaje = document.getElementById("nombre-personaje");
let personajes = [];
personajes[0] = "Laura Esther Rodríguez Dulanto, primera médica peruana";
personajes[1] = "María Luisa Aguilar, primera astrónoma del Perú";
personajes[2] = "LAracely Quispe Neira, ingeniera peruana de la NASA";
personajes[3] = "Carla Gonzales, investigadora de productos andinos";
personajes[4] = "Gisella Orjeda, bióloga y genetista"; 

let aleatorio = Math.floor(Math.random() * 5 )
nombrePersonaje.innerHTML = personajes[aleatorio];

//INTERVALOS DE TIEMPO - setTimeout
let personajedia = document.getElementById("personajedia");
function cambiarColorPersonaje(){
    personajedia.style.backgroundColor = "#000000";
    personajedia.style.color = "#FFFFFF";
}
setTimeout(cambiarColorPersonaje, 3000);

//INTERVALOS DE TIEMPO - setInterval
function cambiarPersonaje(){
    let aleatorio = Math.floor(Math.random() * 5 )
    nombrePersonaje.innerHTML = personajes[aleatorio];
}
setInterval(cambiarPersonaje, 1000);


//GALERIA con botones
let paisajes = [];
paisajes[0] = "images/steam arte1.jpg";
paisajes[1] = "images/steam ciencias.jpg";
paisajes[2] = "images/steam ingenieria.jpg";
paisajes[3] = "images/steam matematicas.jpg";
paisajes[4] = "images/steam tecnologia.jpg";

let bRetroceder = document.getElementById("boton-retroceder");
let bAvanzar = document.getElementById("boton-avanzar");
let muestra = document.getElementById("muestra");
let cajaP = document.getElementById("caja-posicion");
let posicion = 0;

actualizarImagen();

function actualizarImagen(){
    cajaP.innerHTML = posicion + 1;
    muestra.src = paisajes[posicion];
}

bAvanzar.addEventListener("click", function(){
        posicion++;
        if(posicion == 5){
            posicion = 0;
        }
        actualizarImagen();
}); 

bRetroceder.addEventListener("click", function(){
        posicion--;
        if(posicion == -1){
            posicion = 4;
        }
        actualizarImagen();
}); 


