let titulo=document.getElementById('titulo');
function CambiarNombre(){
    let nombre=prompt('Escriba su nombre:');
    if (nombre!=null){titulo.textContent='hola '+nombre;}
    else{titulo.textContent='hola ...'}
}