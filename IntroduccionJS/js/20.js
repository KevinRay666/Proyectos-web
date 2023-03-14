const reproductor = {
    reproducir : function(id){
        console.log(`Reproduciendo Canción con el ID: ${id}`)
    },
    pausa : function(){
        console.log('Pausando');
    },
    crearPlaylist: function(nombre){
        console.log(`Creando la playlist: ${nombre}`)
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproducir la playlist: ${nombre}`)
    }
}

reproductor.borrarCancion = function(id){
    console.log(`Eliminando la cancion${id}`)
}

reproductor.reproducir(3840);
reproductor.pausa();
reproductor.borrarCancion(20);
reproductor.crearPlaylist('Metal');
reproductor.reproducirPlaylist('Metal');