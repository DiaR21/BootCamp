class Pokemon{
    constructor(nombre,tipo){
        this.nombre=nombre;
        this.tipo=tipo;      
    }
    //metodo
    atacar(){
    return document.write(`${this.nombre} esta atacando`);
}
}
class Pikachu extends Pokemon {
    constructor(nombre, tipo, edad) {
        super(nombre,tipo);
        this.edad=edad;
    }
    //medoto
    evolucionar() {
        return document.write(`${this.nombre} esta evolucionando`);
    }
}
 
class Electrico extends Pikachu{
    constructor(nombre, tipo, edad, color) {
        super(nombre, tipo,edad);
        this.color=color;
    }
}

const Electrico1=new Electrico("Pancho", "Electrico", 4, "Gris")
document.write(Electrico1);

const Pikachu1=new Pikachu("Lotty", "Electrico");
document.write(Pikachu1);
Pikachu1.atacar();
Pikachu1.evolucionar();

const Pokemon1=new Pokemon("Charmander", "Fuego");
document.write(Pikachu1);