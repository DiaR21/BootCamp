let precio=parseFloat(prompt("Precio :"));
let cupDes=prompt("Cupon :");
let nuevo;

const precioNuevo=(precio, des)=>{
    return precio*(1-des/100);
}

switch(cupDes) {
    case "Bronce":
        des=5;
        nuevo=precioNuevo(precio,des);
        break;
    case "Plata":
        des=10;
        nuevo=precioNuevo(precio,des);
        break;
    case "Oro":
        des=15;
        nuevo=precioNuevo(precio,des);
        break;
    case "Platino":
        des=25;
        nuevo=precioNuevo(precio,des);
        break;      
    default:
        nuevo="h";
        break;
}       

if (nuevo=="h"){
    document.write("ERROR");
}
else{
    document.write(` Precio original ${precio} <br> El descuento es ${des}% <br> Precio con descuento ${nuevo}`);

}

