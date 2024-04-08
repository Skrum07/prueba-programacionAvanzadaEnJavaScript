import Animal from './animal.js';

export class Oso extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
gruñido(){
    document.getElementById(`audio${this.nombre}`).play();
    }
}
