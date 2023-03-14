const numeros = [10,20,30,40,50];



const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');



// const arreglo = ["Hola", 19, true, "si", {nombre: "Kevin", trabajo: "Programador"}, [1,2,3,4]];
// console.log(arreglo);
// console.table(arreglo);


// //Acceder a los valores del arreglo
// console.log("El valor del arreglo es: " + numeros[0]);
// console.log("El valor del arreglo es: " + numeros[1]);
// console.log("El valor del arreglo es: " + numeros[2]);
// console.log("El valor del arreglo es: " + numeros[3]);
// console.log("El valor del arreglo es: " + numeros[4]);


// // Conocer la extension de un arreglo
// console.log(numeros.length);

// //Acceder a los valores del arreglo
// numeros.forEach(function(num){
//     console.log("El valor del arreglo es: " + num);
// })


//Modificar arreglo
numeros[5] = 60;

//Agrega al final del arreglo
numeros.push(70,80,90);

//Agrega al inicio del arreglo
numeros.unshift(-10,-20,-30);

console.table(numeros);

// meses.pop(); //Elimina al final del arreglo
// meses.shift(); //Elimina al inicio del arreglo
meses.splice(2,1); //Elimina enmedio del arreglo
console.table(meses);


// // Se crea un nuevo arreglo para no modificar el original
// const nuevoArreglo1 = [...meses, 'Junio']; //Agrega al final del arreglo
// const nuevoArreglo2 = ['Junio',...meses ]; //Agrega al inicio del arreglo
// console.log(nuevoArreglo1);
// console.log(nuevoArreglo2);


