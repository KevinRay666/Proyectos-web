//POO
function Cliente(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

Cliente.prototype.formatearCliente = function(){
    return `El cliente ${this.nombre} ${this.apellido}`
}

function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

Producto.prototype.formatearProducto = function(){
    return `El producto ${this.nombre} tiene el precio de: $${this.precio}`
}

const producto2 = new Producto('Monitor Curvo', 800);
const producto3 = new Producto('Laptop', 400);
const cliente = new Cliente('Kevin', 'Torres');

console.log(producto2.formatearProducto());
console.log(producto3);
console.log(cliente.formatearCliente());
