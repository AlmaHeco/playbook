import Viajero from './viajero.js'
import Explorer from './explorer.js'

/*
Este es un ejemplo de como modularizar clases y usarlas mediante módulos.
*/

const viajero1 = new Viajero("Carlo", "LaunchX", "Node JS", "Abril 2022")
console.log(viajero1)
console.log(viajero1.getNameAndUsername()) // Método de la clase padre
console.log(viajero1.getGeneralInfo()) // Método de la clase hija


const viajero2=new Explorer("Alberto","beto","node js");
console.log(viajero2);
console.log(viajero2.getNameAndUsername());
