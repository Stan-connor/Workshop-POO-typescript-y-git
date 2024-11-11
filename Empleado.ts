import { Persona } from "./Persona";

class Empleado extends Persona{
    salario: number;

    constructor(nombre: string, edad: number, salario: number)
    {
        super(nombre,edad, "Saludo");
        this.salario = salario;
    }
    trabajar() {
        console.log(`${this.nombre} está trabajando 8 horas al día.`);
    }

}