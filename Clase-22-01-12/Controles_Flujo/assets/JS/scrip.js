/*Orden en el que se ejecutan las declaraciones*/
/*let miVar=10;
console.log(miVar);
//Estructuras de control de flujo
let edad=17;
let tienesINE=true;

if(edad>=18 || tienesINE==true){
    console.log("Puedes entrar");
}


let num1=parseInt(prompt("Num1:"));
let num2=parseInt(prompt("Num2:"));
let sum=suma(num1,num2);

document.write (`la suma de ${num1} y ${num2} es ${sum} <br>`);
resta(num1,num2);
*/

/*Operador ternario
(Condicion a avaluar)? se ejecuta si es verdadero:
                       se ejnecuta si es falso;
*/
/*let edad1=17;
edad1>=18
    ? console.log("Es mayor de edad")
    : console.log("Es menor de edad");*/

/*    let edad1=17
let pregunta=(edad1>=18)
    ? "Es mayor de edad"
    : "Es menor de edad";
    console.log(pregunta);

let preguntaEdad= `tengo ${edad1} años y soy ${ edad1>=18? "mayor": " menor "} de edad`;
console.log(preguntaEdad);*/



//let dia=parseInt(prompt("Núm de dia:"));
let dia=0;
switch(dia){
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
     case 5:
        console.log("Viener");
        break;
    case 6:
        console.log("Sabado");
        break;
    default:
        console.log("ERROR");
        break;
       
}



let cuponDes;
let des;
cuponDes="Oro";
switch(cuponDes) {
    case "Bronce":
        des=5;
        break;
    case "Plata":
        des=10;
        break;
    case "Oro":
        des=15;
        break;
    default:
        console.log("Cupon ERRoR");
        break;
}       
console.log(`Es decuento es ${des}`);