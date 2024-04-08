import Animal from './animal.js';

export class Lobo extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
aullar(){
    document.getElementById(`audio${this.nombre}`).play();
    }
}