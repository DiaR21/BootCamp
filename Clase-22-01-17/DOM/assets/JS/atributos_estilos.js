let $titulo=document.querySelector("#titulo");
let $texto=document.querySelector(".texto");
$texto.id="texto"; // le coloco el id desde el JS
//$texto.style="color:red; font-size:24px";
//$texto.className="bg-purple";// solo toma una
//$texto.className="h3"  //remplaza todod
$texto.className="bg-purple h3";//agraga varias clases
$texto.classList.add("text-center") // añade
$texto.classList.remove("bg-purple");//quita una clase en especifico.
