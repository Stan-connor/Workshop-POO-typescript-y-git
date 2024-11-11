export class Persona {
    nombre: string;
    private edad: number;
    saluda: string;

constructor(nombre: string, edad: number, saluda: string){
    this.nombre = nombre;
    this.edad = edad;
    this.saluda = saluda;
}
saludar(){
    console.log(`hola, me llamo ${this.nombre} y tengo ${this.edad} años`)
}
getedad(): number {
    return this.edad;
}

}
const Persona1 = new Persona(`pedro`, 15, `hola`);
Persona1.saludar();
