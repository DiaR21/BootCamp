let cadema1="hola";
console.log(cadema1);
let cadena2=new String("Adiòs")
console.log(cadena2);

let arrglo=new Array(1);
console.log(arrglo);
//nusca ya cadema
console.log(cadena2.toLocaleLowerCase());
console.log(cadena2.toLocaleUpperCase());
//rcibe una cadena
let palanra="Hola Mundo";
let arreglo=palanra.split(" ");
console.log(arreglo);
console.log(arreglo.reverse());

console.log(arreglo.reverse().join(""));
function invertir(cadena){
    let arreglo=cadena.split("");
    arreglo.reverse();
    let cadInv=arreglo.join();
    return console.log(cadInv);

}
invertir("Generation");




