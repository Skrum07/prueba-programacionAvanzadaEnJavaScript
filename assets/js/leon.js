import Animal from './animal.js';

export class Leon extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
rugir(){
    document.getElementById(`auio${this.nombre}`).play();
    }
}
