
let numeros=new Array();

for(let i=0; i<50;i++){numeros.push(i);}
document.write(`Los Numeros generardos son :<br> `+numeros+  `<br>`);

let suma=0;
numeros.forEach(function(elemento){suma +=elemento;});

document.write(`La suma es :<br> `+suma+  `<br>`);
document.write(`El promedio es :<br> `+suma/numeros.length+  `<br>`);
