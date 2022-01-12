/*Funcion de flecha*/
/*
function suma(num1, num2){
    //operaciones o codigo a ejecutar
    return num1+num2;
    console.log("Buenos dìas, desde la funciòn");
}*/

/* es contante por que nunca se va a camniar*/
const suma=(num1, num2)=>{
    return num1+num2;
}

/*Se declaran antes de ser utilizadas*/
let num1=parseInt(prompt("Num1:"));
let num2=parseInt(prompt("Num2:"));
let sum=suma(num1,num2);

document.write (`la suma de ${num1} y ${num2} es ${sum} <br>`);