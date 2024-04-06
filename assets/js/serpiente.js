import animal from './animal.js';

export class serpiente extends animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
siseo(){
    document.getElementById(`auio${this.nombre}`).onplay();
    }
}
