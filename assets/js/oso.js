import animal from './animal.js';

export class oso extends animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
gruñido(){
    document.getElementById(`auio${this.nombre}`).onplay();
    }
}
