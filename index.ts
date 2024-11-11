import { Empleado } from "./Empleado";
import { Persona } from "./Persona";  

const persona1 = new Empleado("pedro", 15, 1500);
persona1.saludar(); 
persona1.trabajar(); 

const persona2 = new Empleado("luisa", 15, 1600);
persona2.saludar();
persona2.trabajar();

const persona3 = new Empleado("camila", 13, 1700);
persona3.saludar();
persona3.trabajar();

const persona4 = new Empleado("david", 16, 1800);
persona4.saludar();
persona4.trabajar();

const persona5 = new Empleado("carlos", 17, 1900);
persona5.saludar();
persona5.trabajar();

const persona6 = new Empleado("laura", 18, 2000);
persona6.saludar();
persona6.trabajar();

const persona7 = new Empleado("camilo", 16, 2100);
persona7.saludar();
persona7.trabajar();

const persona8 = new Empleado("felipe", 12, 2200);
persona8.saludar();
persona8.trabajar();

const persona9 = new Empleado("yonier", 19, 2300);
persona9.saludar();
persona9.trabajar();

const persona10 = new Empleado("isabel", 17, 2400);
persona10.saludar();
persona10.trabajar();

const empleados = [persona1, persona2, persona3, persona4, persona5, persona6, persona7, persona8, persona9, persona10];
empleados.forEach((empleado) => {
    empleado.saludar();
    empleado.trabajar();
});
