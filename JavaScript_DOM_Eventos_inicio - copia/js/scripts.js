 //Query Selector
 
 const heading = document.querySelector('a'); // 0 o 1 Elementos
//  console.log(heading);
//heading.textContent = 'Nuevo Heading';

 //QuerySelectorAll

 const enlaces = document.querySelectorAll('.navegacion a');
//  console.log(enlaces);

 enlaces[0].textContent = 'Nuevo texto para Enlace';
 enlaces[0].classList.add('nueva-clase');
 //enlaces[0].classList.remove('navegacion__enlace');

 //Generar nuevo enlace

const nuevoEnlace = document.createElement('A');

// Agregar Href

nuevoEnlace.href = 'nuevo-enlace.html';

// Agregar text

nuevoEnlace.textContent = 'Un nuevo enlace';

// la clase

nuevoEnlace.classList.add('navegacion__enlace');

//Agregarlo al documento

const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);


//Eventos

console.log(1);

window.addEventListener('load', function(){
    console.log(2);
})

window.onload = function(){
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function(){
    console.log(4);
})

console.log(5);

window.onscroll = function(){
    console.log('scrolling...');
}

//Seleccionar elementos y asociarles un evento

// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento){
//     console.log(evento);
//     evento.preventDefault();
//     //Validar formulario
//     console.log('enviando formulario');
// });


//Eventos de los inputs y Textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const nombre = document.querySelector('#nombre');
const formulario = document.querySelector('.formulario');
// nombre.addEventListener('input', function(e){
//     console.log(e.target.value
//         );
// })
// email.addEventListener('input', function(e){
//     console.log(e.target.value
//         );
// })
// mensaje.addEventListener('input', function(e){
//     console.log(e.target.value
//         );
// })

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// Evento de Submit
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    const { nombre, email, mensaje} = datos;
    if(nombre == '' || email == '' || mensaje == ''){
        mostrarAlerta('Todos los campos son obligatorios', true);
        return;
    } 
    mostrarAlerta('Enviando formulario');
})

function leerTexto(e){
    // console.log(e.target.value);
    datos[e.target.id] = e.target.value;
    console.log(datos)
}

function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    console.log(error)

    if(error){
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);

    setTimeout (() => {
        alerta.remove();
    },5000)

}
