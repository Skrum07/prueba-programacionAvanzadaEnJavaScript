// import { aguila } from "./aguila.js";
// import { leon } from "./leon.js";
// import { lobo } from "./lobo.js";
// import { oso } from "./oso.js";
// import {serpiente} from "./serpiente.js";

// const animalInvest = [];

// const animalPromise = (async () => {
//     const url = './animales.json';
//     try{
//         let response = await fetch(url);
//         if(!response.ok) throw new Error('HTTP error! status: '+response.status);
//         let data = await response.json();
//         return data.animales;
//     }catch(error){
//         console.log("Error al obtener los animales"); 
//         console.log(error);
//     };
// })();
// animalPromise.then((animal))

// document.getElementById('btnRegistrar').addEventListener('click', () => {
//     let animal = document.getElementById('animal').value;
//     let edad = document.getElementById('edad').value;
//     let comentarios = document.getElementById('comentarios').value;

//     if(document.getElementById('animal')options[0].select ===true){
//         alert(`Seleccione un animal`);
//         return;
//     }
//     if(document.getElementById('edad')options[0].select ===true){
//         alert(`Seleccione una edad`);
//         return;
//     }
//     if(comentarios) === ''){
//         alert(`Agregue un comentario`);
//         return;
//     }

//     let infoAnimal = animal.find((item) => item.name.tolowerCase() ===  animal.toLowerCase());
//     let registro = null;
//     switch(animal.tolowerCase()) {
//         case 'aguila':
//             registro = new aguila(animal, edad, animalData.imagen, comentarios, animalData.sonido);
//             break;
//         case 'leon':
//             registro = new leon(animal, edad, animalData.imagen, comentarios, animalData.sonido);
//             break;
//          case 'lobo':
//             registro = new lobo(animal, edad, animalData.imagen, comentarios, animalData.sonido);
//             break;
//          case 'oso':
//             registro = new oso(animal, edad, animalData.imagen, comentarios, animalData.sonido);
//             break;
//          case 'serpiente':
//             registro = new serpiente(animal, edad, animalData.imagen, comentarios, animalData.sonido);
//             break;

//     })

// });

import { aguila } from "./aguila.js";
import { leon } from "./leon.js";
import { lobo } from "./lobo.js";
import { oso } from "./oso.js";
import { serpiente } from "./serpiente.js";

document.addEventListener('DOMContentLoaded', () => {
    const animalInvest = [];
    
    const animalPromise = (async () => {
        const url = './animales.json';
        try {
            let response = await fetch(url);
            if (!response.ok) throw new Error('HTTP error! status: ' + response.status);
            let data = await response.json();
            return data.animales;
        } catch (error) {
            console.log("Error al obtener los animales");
            console.log(error);
        };
    })().catch(error => console.error(error));
    
    animalPromise.then((animales) => {
        document.getElementById('btnRegistrar').addEventListener('click', () => {
            let animal = document.getElementById('animal').value;
            let edad = document.getElementById('edad').value;
            let comentarios = document.getElementById('comentarios').value;
        
            if (animal === '') {
                alert(`Seleccione un animal`);
                return;
            }
            if (edad === '') {
                alert(`Seleccione una edad`);
                return;
            }
            if (comentarios === '') {
                alert(`Agregue un comentario`);
                return;
            }
        
            let infoAnimal = animales.find((item) => item.nombre.toLowerCase() === animal.toLowerCase());
            let registro = null;
            switch (animal.toLowerCase()) {
                case 'aguila':
                    registro = new aguila(animal, edad, infoAnimal.imagen, comentarios, infoAnimal.sonido);
                    break;
                case 'leon':
                    registro = new leon(animal, edad, infoAnimal.imagen, comentarios, infoAnimal.sonido);
                    break;
                case 'lobo':
                    registro = new lobo(animal, edad, infoAnimal.imagen, comentarios, infoAnimal.sonido);
                    break;
                case 'oso':
                    registro = new oso(animal, edad, infoAnimal.imagen, comentarios, infoAnimal.sonido);
                    break;
                case 'serpiente':
                    registro = new serpiente(animal, edad, infoAnimal.imagen, comentarios, infoAnimal.sonido);
                    break;
                default:
                    alert('Animal no reconocido');
                    return;
            }
            animalInvest.push(registro);
            console.log(animalInvest); // Solo para propósito de demostración, puedes hacer algo más con los registros
        });
    });
});
