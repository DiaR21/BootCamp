/*funcion
bloque de codigo reutilizable.
puede tener o no parametros de entrada.
Puede devolver o no un valor
*/

function suma(num1, num2){
    //operaciones o codigo a ejecutar
    return num1+num2;
    console.log("Buenos dìas, desde la funciòn");
}
function resta(num1, num2){
    //operaciones o codigo a ejecutar
    document.write (`la resta de ${num1} y ${num2} es ${num1-num2} <br>`);
}


let num1=parseInt(prompt("Num1:"));
let num2=parseInt(prompt("Num2:"));
let sum=suma(num1,num2);

document.write (`la suma de ${num1} y ${num2} es ${sum} <br>`);
resta(num1,num2);
document.write (`la suma de ` +num1+` y `+num2+ `es ` +sum); 
  