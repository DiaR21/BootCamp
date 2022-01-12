
let hora=parseInt(prompt("Cual es la hora"));

/*
Buenos dias 6 - 11
Buenas tardes 12 - 18
Buenas noches 19 - 23
Dejame dormir 0 - 5
*/
if(hora>=6 && hora<12){
    document.write("Buenos dias" );
}else if(hora>=12 && hora<19){
    document.write("Buenas tardes" );
}else if(hora>=19 && hora<24){
    document.write("Buenas noches" );
} else if(hora>=0 && hora<6){
    document.write("Dejame dormir" );
}
else{
    document.write("ERROR" );
}