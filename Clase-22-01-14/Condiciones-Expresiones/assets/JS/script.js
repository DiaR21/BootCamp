/*Operadores Aritmeticos*/
let ope=3*5+(10+5);
document.write(ope);
let ope1=3-5/2*4;
document.write("<br>"+ope1);

/*Operadores Relacionales*/
//<,>,>=,<=,==,===,!=,!==
//bool

console.log(7>7);
console.log(7>=7);
console.log(7=="7");//campara el valor no el tipo
console.log(7==="7");//operador extricto, compara el tipo de dato

console.log(7!="7");//campara el valor no el tipo
console.log(7!=="7");//operador extricto, compara el tipo de dato

/*Incremento y Decremento*/
// += -= *= /=

let incremento=5;
incremento +=5;
console.log(incremento);

incremento-=5;
console.log(incremento);

incremento *=5;
console.log(incremento);

incremento/=5;
console.log(incremento);



/*Operadores Unarios*/
// ++ --
let sumar=0;
sumar++
console.log(sumar);
console.log(sumar+ " suma");
sumar--;
console.log(sumar+ " resta");


for (let i=0;i<10;i++){}
let nume=5;
console.log(++nume);
// ++var preincremento
// --var porincremento


for (let i=0;i<10;i++){ 
    console.log("Ciclo padre"+i);
    for (let j=0;j<5;j++){
        console.log("Ciclo hijo"+j);
     }}