//Arrow Funcion
const sumar2 = (n1, n2) => console.log(n1 + n2);

sumar2(5,10);

const aprendiendo = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`)

aprendiendo('JS')

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito =[
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Television 20 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800}
];

meses.forEach( mes => {
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});

let resultado;

//Some ideal para arreglo de objetos

resultado = carrito.some(producto => producto.nombre == 'Celular a')

console.log(resultado);

//Reduce
//Sacamos el total del precio del producto
resultado = carrito.reduce( (total, producto) => total + producto.precio ,1);

console.log(resultado);

//Filter
//Filtra el arreglo
resultado = carrito.filter( producto => producto.precio > 400)

console.log(resultado);

resultado = carrito.filter( producto => producto.nombre !== 'Celular')

console.log(resultado);