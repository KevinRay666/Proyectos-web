//Objetos

const nombreProducto = "Monitor 20 pulgadas";
const precio = 300;
const disponible = true;

const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}

console.log(producto);

/*
console.log(producto.nombreProducto);
console.log(producto.precio);
console.log(producto.disponible);
console.log(producto["precio"]);
*/

// agregar nuevas propiedades
producto.imagen = "imagen.jpg";
console.log(producto);

// eliminar propiedades
delete producto.disponible;
console.log(producto);