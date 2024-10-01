export class Persona {
    nombre: string;
    private edad: number;
    saluda: string;

    constructor(nombre: string, edad: number, saluda: string){
        this.nombre = nombre;
        this.edad = edad;
        this.saluda = saluda;
    }
    getEdad(): number {
        return this.edad
    }
    saludar(){
        console.log(`hola, me llamo ${this.nombre} y tengo ${this.edad} años `)
    }
}
