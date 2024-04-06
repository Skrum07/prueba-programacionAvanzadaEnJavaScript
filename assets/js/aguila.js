import animal from './animal.js';

export class aguila extends animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
chillido(){
    document.getElementById(`auio${this.nombre}`).onplay();
    }
}
