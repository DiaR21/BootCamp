/*let titulo=document.getElementById("titulo");
titulo.textContent="Tìtulo escrito desde JS..."*/

// .clase
// #id
// etiqueta
let $titulo=document.querySelector("#titulo");
$titulo.textContent="Tìtulo escrito desde JS...";

let $parrafo=document.querySelector("p");
//console.log($parrafo.textContent);

let $parrafos=document.querySelectorAll("p");
//console.log($parrafos[1].textContent);

let subtitulo=document.createElement("h3"); //crea elementos en memoria
subtitulo.textContent="Subtitulo de JS...";
document.body.append(subtitulo);
//document.body.insertAdjacentElement("beforebegin",subtitulo);
$titulo.insertAdjacentElement("afterend",subtitulo);
$titulo.remove();


let $contenido=document.querySelector("#contenido");
/*
console.log($contenido.textContent="<br>"); //lo muestra como texto
console.log($contenido.innerHTML="<br>");// para que sea una etiqueta
console.log($contenido.outerHTML="HOla");
*/
let contenidoParrafo=document.createElement("p");
contenidoParrafo.textContent="Contenido de mi nuevo parrafo";
$contenido.appendChild(contenidoParrafo);