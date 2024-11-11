import { Persona } from "./Persona";
export class Empleado extends Persona{
    salario: number;

    constructor(nombre: string, edad: number, salario: number)
    {
        super(nombre,edad, "Saludo");
        this.salario = salario;
    }
    trabajar() {
        console.log(`${this.nombre} está trabajando 8 horas al día.`);
    }
    saludar() {
        console.log(`Empleado: Hola ${this.nombre}, tu edad es ${this.getEdad()} y tu salario es de ${this.salario}`);
    }

}

