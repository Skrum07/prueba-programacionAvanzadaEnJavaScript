import animal from './animal.js';

export class lobo extends animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
aullar(){
    document.getElementById(`auio${this.nombre}`).onplay();
    }
}