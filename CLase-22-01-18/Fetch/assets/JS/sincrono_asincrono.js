/*COdigo sincrono*/
let varSincrona;
varSincrona=10*3;
console.log(varSincrona);

/*Codigo Asincrono*/
let varAsincrona;
setTimeout(()=>{
    varAsincrona=10-3;
    console.log("Hola "+varAsincrona);
}, 2000); // espera un tiempo para ejecutarse 
// tiempo en milisegundos
console.log(varAsincrona);
