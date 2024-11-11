export class Persona {
    nombre: string;
    edad: number;
    saluda: string;

constructor(nombre: string, edad: number, saluda: string){
    this.nombre = nombre;
    this.edad = edad;
    this.saluda = saluda;
}
saludar(){
    console.log(`hola, me llamo ${this.nombre} y tengo ${this.edad} años`)
}

}
const Persona1 = new Persona(`pedro`, 15, `hola`);
Persona1.saludar();
