var numero=40;  // variable global
console.log(numero);
if(true){
    var numero=50;
    console.log(numero);
}
console.log(numero);

var texto="Bootcamp Java"; // variable global siempre es la misma afuera de 
                           // fuera de los bucles
if(true){
    let texto="Cohorte 8"; // es relativa solo existe en ese momento
                            // variable local,  variable de contexto 
                            // se delimita por llaves
                            //para que las variables esten acotadas y solo vivan en una parte
    console.log(texto);    // solo vive aqui
}
console.log(texto);
