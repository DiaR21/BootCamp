//Clase, modelo que nos permite crear objetos 
class Animal{
    nombre;
    especie;
    constructor(nombre, especie){
        console.log('Este es un constructor');
        this.nombre=nombre;
        this.especie=especie; //this es del constructor
    }

    //getters y setters
    get getNombre(){
        return this.nombre;
    }
    set setNombre(nombre){
        this.nombre=nombre;
    }

    get getEspecie(){
        return this.especie;
    }
    set setEspecie(especie){
        this.especie=especie;
    }




    //metodos=funcion
    presentarse(){
        document.write(`Hola soy un ${this.especie} y me llamo ${this.nombre} <br>`);
    }
    cambiarNombre(nuevoNombre){
        this.nombre=nuevoNombre;
        let mensaje=`Mi nombre es ${this.nombre} y soy un ${this.especie} <br>`;
        return mensaje;
    }



    //Metodos estaticos
    static saludar(){
        return document.write("<br> Hola soy un metodo estatico");
    }

}


const Animal1=new Animal("Scooby", "Perro");
console.log(Animal1);
const Animal2=new Animal("Pecar", "Gato");
console.log(Animal2);
const Animal3=new Animal();
console.log(Animal3);
Animal1.presentarse();
Animal2.presentarse();
Animal3.presentarse();
document.write(Animal1.nombre);
Animal1.nombre="Scrappy";
document.write("<br>");
document.write(Animal1.nombre);
document.write("<br>");
document.write(Animal1.cambiarNombre("Odie"));


console.log(Animal1.getNombre);
Animal1.setNombre="Manchas";
document.write(Animal1.getNombre);

Animal.saludar();



