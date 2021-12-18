
const comidas=["Pozole", "Quesadillas", "Tacos"];
console.log(comidas.length);
comidas.push("Torta");
comidas.pop();
console.log(comidas);
comidas.shift();
console.log(comidas);

console.log(comidas[0]);
console.log(comidas[1]);
console.log(comidas[2]);

comidas.forEach(function(el){
    console.log(el);

})

const numero=[1, 4, 7, 8];
console.log(numero);

comidas.forEach(function(el){
    let suma=el+1;
    console.log(suma);

})


const arr=[];
function suma(num){
    let sumNum=num+1;
    return arr.push(sumNum);
 
}

suma(3);
suma(5);
suma(6);
suma(2);
suma(78);

console.log(arr);

