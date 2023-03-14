const puntaje = 1000;

// if(puntaje === 1000){
//     console.log('Si el puntaje es 1000')
// } else {
//     console.log('No es igual')
// }

// if(puntaje !== 1000){
//     console.log('No es igual')
// } else {
//     console.log('Si el puntaje es 1000')
// }

// const efectivo = 1000;
// const carrito = 800;

// if (efectivo > carrito){
//     console.log('Si puedes compar')
// } else {
//     console.log('te falta varo')
// }

const rol = 'EDITOR';
if(rol === 'ADMINISTRADOR'){
    console.log('Acceso a todo el sistema');
    
} else if (rol ==='EDITOR') {
    console.log('Eres editor');
}else {
    console.log('No tienes acceso')
}