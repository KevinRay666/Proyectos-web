const usuarioAutenticado = new Promise( (resolve, reject)=>{
    const auth = true;
    if(auth){
        resolve('Usuario Audenticado');
    } else{
        reject('No se pudo iniciar sesion');
    }
})

usuarioAutenticado
    .then( (resultado) => console.log(resultado) )
    .catch((error) => console.log(error))

    //Los 3 estados del Promise
//Pending: No se ha cumplido pero tampoco se ha rechazado
//Fulfilles: Ya se cumplio
//Reject: Se ha rechazado o no se  pudo cumplir