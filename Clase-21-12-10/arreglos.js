/*
 * Arreglos
 * Coleccion de elementos
 * tiene funciones que nos permite manipular esos elementos
 */

const arre = [];
const arre2 = [1, true, "Hola", [3, 4, 5]];
console.log(arre2);
const arre3 = Array.of(1, 3, true, "Hola");
console.log(arre3);
const arre4 = new Array(1, true, "Hola");
console.log(arre4);

const frutas = ["manzana", "sandia", "naranjas", "uvas"];
//notacion de corchetes
console.log(frutas[2]);

/*
 * Metodos
 * Length = Longitud
 */
const letras = ["A", "B", "C", "D"];
console.log(letras.length);
/*
 * push = añade elementos al final de nuestro arreglo
 */
letras.push("E");
console.log(letras);
/*
 * pop = elimina el ultimo elemento
 */
letras.pop();
console.log(letras);
/*
 * Unshift = agrega un elmeento al inicio del arreglo
 */
letras.unshift(1);
console.log(letras);
//* Shift elimina el primer elemento en el areglo
letras.shift();
console.log(letras);
