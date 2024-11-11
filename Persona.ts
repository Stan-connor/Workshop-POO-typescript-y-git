export class Persona {
    nombre: string;
    protected  edad: number;
    saluda: string;
    

constructor(nombre: string, edad: number, saluda: string){
    this.nombre = nombre;
    this.edad = edad;
    this.saluda = saluda;
}
saludar(){
    console.log(`hola, me llamo ${this.nombre} y tengo ${this.edad} años`)
}
protected getEdad(): number {
    return this.edad;
}

}

