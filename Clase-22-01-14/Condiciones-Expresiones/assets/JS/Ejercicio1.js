//Ejercicio

let nuevaCad=prompt("Incerte la cadena:");
document.write("Su palabra es: <br>"+nuevaCad);

function invertirEje1(cadena){
    let arreglo=cadena.split("");
    return arreglo.reverse();
}

function invertirEje2(cadena){
    let arreglo=cadena.split("");
    return arreglo.join();
}

document.write("La palabra "+nuevaCad+" usando split & reverse es:<br>"+invertirEje1(nuevaCad));

document.write("<br>La palabra "+nuevaCad+" usando join es:<br> "+invertirEje2(nuevaCad));