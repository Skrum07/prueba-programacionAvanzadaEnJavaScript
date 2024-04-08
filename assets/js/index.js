import {aguila} from './aguila.js';
import {leon} from './leon.js';
import {lobo} from './lobo.js';
import {oso} from './oso.js';
import {serpiente} from './serpiente.js';

const url = './animales.json'
const animalInvestigado = [];


const animales = await (async () => {
    try{
        let response = await fetch(url);
        if(!response.ok) throw new Error('HTTP error! status: '+response.status);
        let data = await response.json();
        return data.animales;
    }catch(error){
        console.log("Error al obtener los animales");
    }
})();

//Registro de animales

document.getElementById('btnRegistrar').addEventListener('click', () => {
    let animal = document.getElementById('animal').value;
    let edad = document.getElementById('edad').value;
    let comentarios = document.getElementById('comentarios').value;


    //validar campos
    if(document.getElementById('animal').options[0].select ===true){
        alert(`Seleccione un animal`);
        return;
    }
    if(document.getElementById('edad').options[0].select ===true){
        alert(`Seleccione una edad`);
        return;
    }
    if(!comentarios){
        alert(`Escriba un comentario`);
        return;
    } 
    

    let infoAnimal = animal.find((item) => item.name.tolowerCase() ===  animal.toLowerCase());
   
    switch(animal.tolowerCase()) {
        case 'aguila':
            animalInvestigado.push(new aguila(animal, edad, animalData.imagen, comentarios, animalData.sonido));
            break;
        case 'leon':
            animalInvestigado.push(new leon(animal, edad, animalData.imagen, comentarios, animalData.sonido));
            break;
         case 'lobo':
            animalInvestigado.push(new lobo(animal, edad, animalData.imagen, comentarios, animalData.sonido));
            break;
         case 'oso':
            animalInvestigado.push(new oso(animal, edad, animalData.imagen, comentarios, animalData.sonido));
            break;
         case 'serpiente':
            animalInvestigado.push(new serpiente(animal, edad, animalData.imagen, comentarios, animalData.sonido));
            break;
    
        default:
        alert('Animal fuera del catalogo');
            break;      
    });  