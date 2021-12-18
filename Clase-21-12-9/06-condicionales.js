/**
 * CONDICIONALES
  * 
 */
let edad=parseInt(prompt("ingresa tu edad:\n"));

if(edad>=18 && edad<30 ) 
    document.write("Eres joven");  
else if(edad>=30 && edad<60 ) 
    document.write("Eres adulto");
else if(edad>=60 && edad<60 )
    document.write("Eres adultomayor");
else 
    document.write("Eres un niñor");
