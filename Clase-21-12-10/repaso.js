/* condicionales
 *  if(condicion){
 *  bloque de codigo
 *  } else{
 *
 *  }
 *  Funcion
 *  bloque de codigo reutilizable
 *
 */

function procesadorFrutas(manzanas, naranjas) {
	let jugo = "Jugo de " + manzanas + " manzanas y " + naranjas + " naranjas.";
	return jugo;
}

let jugoManzanas = procesadorFrutas(4, 0);
console.log(jugoManzanas);

let jugoNaranjas = procesadorFrutas(0, 5);
console.log(jugoNaranjas);
