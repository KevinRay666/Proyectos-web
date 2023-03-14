//Clases

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProducto(){
        return `El producto ${this.nombre} tiene el precio de: $${this.precio}`
    }
    obtenerPrecio(){
        return this.precio;
    }
}

class Libro extends Producto{
    constructor(nombre,precio,isbn){
        super(nombre,precio);
        this.isbn = isbn;
    }

    formatearProducto(){
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`
    }

    obtenerPrecio(){
       return super.obtenerPrecio();
    }

}

const libro = new Libro('JS', 120,'231231231');
console.log(libro.obtenerPrecio());

const producto2 = new Producto('Monitor Curvo', 800);
const producto3 = new Producto('Laptop', 400);

console.log(producto2.formatearProducto());