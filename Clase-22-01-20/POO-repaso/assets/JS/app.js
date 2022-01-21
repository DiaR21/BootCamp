class Animalito{
    constructor(nombre, edad, especie,revisado){
        this.nombre=nombre;
        this.edad=edad;
        this.especie=especie;
        this.enfermo=false;
        this.revisado=revisado;
    }
    saludar(){
        return document.write(`<br> Hola mi nombre es ${this.nombre} <br>`)
    }
}

class Vetenrinario{
    constructor(){
        this.cantidadPacientes=0;
        this.pacientesRevisados=0;
        this.listaPacientes=[]; 
    }
    agregarPaciente(paciente){
        this.listaPacientes.push(paciente);
        this.cantidadPacientes++;
        let mensaje=`Paciente Agregar paciente <br>`;
        return document.write(mensaje);
        }

     modificarPacientesRevidados(){
         return this.pacientesRevisados++;
     }   

    revisarPaciente(paciente){
        if(paciente.revisado===false){
            paciente.revisado=true;
            this.modificarPacientesRevidados();
            //this.pacientesRevisados++;
            document.write("<br> Paciente ha sido revisado");
        }else{
            document.write("<br> Este paciente fue revidado");
        }

    }    

    mostarLista(){
        for(let i=0;i<this.listaPacientes.length;i++){
            document.write("<br> "+this.listaPacientes[i].nombre)
        }
        document.write(`<br> Cantidad de pacientes ${this.cantidadPacientes} <br> Pacientes revidados ${this.pacientesRevisados}<br>`);
    }    
}

const veterinariaPanchito=new Vetenrinario();
const Animalito1=new Animalito("Manchas",5,"Perrito",true);
const Animalito2=new Animalito("Galletita",3,"Gatito",true);
console.log(Animalito1);
console.log(Animalito2);

veterinariaPanchito.agregarPaciente(Animalito1);

veterinariaPanchito.agregarPaciente(Animalito2);

console.log(veterinariaPanchito.listaPacientes);

veterinariaPanchito.mostarLista();
veterinariaPanchito.revisarPaciente(Animalito1);
veterinariaPanchito.mostarLista();

//Operador de corto circuito
let variable=0;
console.log