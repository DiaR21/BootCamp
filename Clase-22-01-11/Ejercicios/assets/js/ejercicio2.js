let Edad=document.getElementById('Edad');
function CE(){
    let e=prompt('Escriba su año de nacimiento');
    let aux=parseInt(e);
    console.log(aux)
    let ed=2022-aux;
    Edad.textContent='Su edad es: '+ed;
}