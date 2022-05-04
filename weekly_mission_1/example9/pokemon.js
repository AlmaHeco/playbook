export default class MyPokemon {
    constructor (nombre){
        this.nombre=nombre;
    }

    sayHello (){
        console.log(`Mi pokemon ${this.nombre} te saluda`)
    }
}