import Animal from './animal.js';

export class Serpiente extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
siseo(){
    document.getElementById(`auio${this.nombre}`).onplay();
    }
}
