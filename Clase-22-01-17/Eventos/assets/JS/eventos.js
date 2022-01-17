let $titulo=document.querySelector('#titulo');
let $mensaje=document.querySelector('#mensaje');
let $btnMesaje=document.querySelector('#btnMensaje');
let $spanError=document.querySelector('span');
//edd

$btnMesaje.addEventListener('click', ()=>{
    console.log('No me presiones');
});

$mensaje.addEventListener('keyup',(e)=>{
    console.log(e.target.value);
    if(e.target.value.length<3){
        $spanError.classList.remove('hide');
        $spanError.classList.add('error');
    }else{      
        $spanError.classList.add('hide');
        $spanError.classList.remove('error');
    }
  
    //console.log(e);
});

/*
$mensaje.addEventListener('keydown',mostrarConsole);
function mostrarConsole(){
    console.log('No me presiones');
}
*/