//Objetos
const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}
Object.freeze(producto); //Freze No permite eliminar, agregar ni modificar
producto.imagen = 'imagen.jpg';
console.log(Object.isFrozen(producto))

Object.seal(producto);  //Sealed solo permite modificar
producto.imagen = 'imagen.jpg';
console.log(Object.isSealed(producto))

console.log(producto);