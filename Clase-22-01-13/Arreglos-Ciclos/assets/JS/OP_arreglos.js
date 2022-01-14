
let numeros=[1,2,3,4,5,6,7,8,9];
/*numeros.forEach(function(numero, indice){ //Funcion anonima
   // document.write(numero+" , ");
   document.write(numero+" , "+indice+" - ");
});

let num2=numeros.map(function(elemento){
    return elemento*2;
});

document.write( `<br> `+ num2);*/
/*

let fru=["mango","uva","piña"]; // informacion compartida
let fru2=fru;
document.write( `<br> `+ fru+`<br> `);
document.write( `<br> `+ fru2+`<br> `);
fru2.push("pera");
document.write( `<br> `+ fru+`<br> `);
document.write( `<br> `+ fru2+`<br> `);*/

/*
let fru=["mango","uva","piña"]; // informacion compartida
let fru2=fru.map(function(elemento){ // pan crea un nuevo arreglo
    return elemento;
});
document.write( `<br> `+ fru+`<br> `);
document.write( `<br> `+ fru2+`<br> `);
fru2.push("pera");
document.write( `<br> `+ fru+`<br> `);
document.write( `<br> `+ fru2+`<br> `);*/


/*INCLUDE*/
document.write(`<br>`+numeros.includes("Hola")+ `<br>`);
let numPar=numeros.filter((elemento)=>{
  /*  if(elemento%2==0){
        return true;
    }else{
        return false;
    }*/
   console.log(elemento%2==0);
   // return elemento%2==0;
});
document.write(`<br>`+numPar+ `<br>`);


let frutas=["mango","uva","piña","mandarina","manzana", "aguacate"];
let fruFiltro=frutas.filter((fruta)=>{
  /* if(fruta.contains("i")==true){
        return true;
    }*/
 //   return fruta.toLowerCase().includes("m");

});
document.write(`<br> `+fruFiltro+  `<br>`);

document.write(`<br> `+numeros.sort()+  `<br>`);

document.write(`<br> `+numeros.reverse()+  `<br>`);

let frutaEncontrar=frutas.find((elemento)=>{
    return elemento.toLowerCase().includes('ma');

});
document.write(`<br> `+frutaEncontrar+  `<br>`);