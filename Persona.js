"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, edad, saluda) {
        this.nombre = nombre;
        this.edad = edad;
        this.saluda = saluda;
    }
    saludar() {
        console.log(`hola, me llamo ${this.nombre} y tengo ${this.edad} años`);
    }
}
exports.Persona = Persona;
const Persona1 = new Persona(`pedro`, 15, `hola`);
Persona1.saludar();
