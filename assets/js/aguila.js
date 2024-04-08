import Animal from './animal.js';

export class Aguila extends animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    chillido() {
        document.getElementById(`audio${this.nombre}`).play();
    }
}
