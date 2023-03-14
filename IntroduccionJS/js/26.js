const reservacion = {
    nombre : 'Kevin',
    apellido : 'Gomez',
    total : 5000,
    pagado : false,
    informacion: function(){
        console.log(`El Cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.apellido}`)
    }
}

const reservacion2 = {
    nombre : 'Alexa',
    apellido : 'Gomez',
    total : 5000,
    pagado : false,
    informacion: function(){
        console.log(`El Cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.apellido}`)
    }
}

reservacion.informacion();
reservacion2.informacion();
