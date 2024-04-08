import { Aguila } from './aguila.js';
import { Leon } from './leon.js';
import { Lobo } from './lobo.js';
import { Oso } from './oso.js';
import { Serpiente } from './serpiente.js';

const url = './animales.json';

const investigatedAnimals = [];

const animals = await (async () => {
    try {
        let response = await fetch(url);
        if (!response.ok) throw new Error('HTTP error! status: ' + response.status);

        let data = await response.json();
        return data.animales;
    } catch (error) {
        console.log("Error al obtener los animales");
    }
})();

//Eventos
// Registro de animales

document.getElementById('btnRegistrar').addEventListener('click', () => {
    let animal = document.getElementById('animal').value;
    let edad = document.getElementById('edad').value;
    let comentario = document.getElementById('comentarios').value;

    // Validar campos
    if (animal === "") {
        alert(`Seleccione un animal`);
        return;
    }
    if (edad === "") {
        alert(`Seleccione una edad`);
        return;
    }
    if (comentario === "") {
        alert(`Escriba un comentario`);
        return;
    }

    let animalData = animals.find((item) => item.name.toLowerCase() === animal.toLowerCase());

    switch (animal.toLowerCase()) {
        case 'aguila':
            investigatedAnimals.push(new Aguila(animal, edad, animalData.imagen, comentario, animalData.sonido));
            break;
        case 'leon':
            investigatedAnimals.push(new Leon(animal, edad, animalData.imagen, comentario, animalData.sonido));
            break;
        case 'lobo':
            investigatedAnimals.push(new Lobo(animal, edad, animalData.imagen, comentario, animalData.sonido));
            break;
        case 'oso':
            investigatedAnimals.push(new Oso(animal, edad, animalData.imagen, comentario, animalData.sonido));
            break;
        case 'serpiente':
            investigatedAnimals.push(new Serpiente(animal, edad, animalData.imagen, comentario, animalData.sonido));
            break;
        default:
            alert('Animal fuera del catálogo');
            break;
    }
    resetInputValues();
    displayInvestigatedAnimals(investigatedAnimals);
});

document.getElementById('animal').addEventListener('change', (event) => {
    const animalData = animals.find((item) => item.name.toLowerCase() === event.target.value.toLowerCase());

    const img = document.getElementById('img');
    img.setAttribute('src', `./assets/imgs/${animalData.imagen}`);

    const previewSection = document.getElementById('preview');
    previewSection.innerHTML = '';
    previewSection.appendChild(img);
});

// Funciones
const displayInvestigatedAnimals(investigatedAnimals) => {
    const animalsContainer = document.getElementById('animales');
    animalsContainer.innerHTML = '';

    investigatedAnimals.forEach((animal) => {
        const animalCard = document.createElement('div');
        const cardImg = document.createElement('img');
        const cardBtn = document.createElement('button');
        const icon = document.createElement('i');
        const audio = document.createElement('audio');

        animalCard.setAttribute('class', 'animal-card');
        animalImage.setAttribute('src', `./assets/imgs/${animal.img}`);
        animalAudio.setAttribute('id', `audio${animal.nombre}`);
        animalAudio.setAttribute('src', `./assets/sounds/${animal.sonido}`);

        cardBtn.appendChild(icon);
        cardBtn.appendChild(audio);

        animalCard.appendChild(cardImg);
        animalCard.appendChild(cardBtn);

        cardImg.addEventListener('click', () => {
            displayModalAnimal(animal);
        });

        cardBtn.addEventListener('click', () => {
            switch (animal.nombre.toLowerCase()) {
                case 'aguila':
                    animal.chillar();
                    break;
                case 'leon':
                    animal.rugir();
                    break;
                case 'lobo':
                    animal.aullar();
                    break;
                case 'oso':
                    animal.grunir();
                    break;
                case 'serpiente':
                    animal.sisear();
                    break;
                default:
                    console.log('Sonido de animal no encontrado');
            }
        });
        animalContainer.appendChild(animalCard);
    });
}

const displayModalAnimal = (animal) => {
    const animalModal = document.getElementById('animalModal');

    const modalBody = animalModal.querySelector('.modal-body');
    modalBody.innerHTML = '';

    const img = document.createElement('img');
    const h5 = document.createElement('h5');
    const edadP = document.createElement('p');
    const comentarioP = document.createElement('p');

    img.setAttribute('src', `./assets/imgs/${animal.img}`);
    h5.innerText = animal.nombre;
    edadP.innerText = animal.edad;
    comentarioP.innerText = animal.comentarios;

    modalBody.appendChild(img);
    modalBody.appendChild(h5);
    modalBody.appendChild(edadP);
    modalBody.appendChild(comentarioP);

    const modal = new bootstrap.Modal(animalModal);
    modal.show();
}

const resetInputValues = () =>{
    document.getElementById('animal').options[0].selected = true;
    document.getElementById('edad').options[0].selected = true;
    document.getElementById('comentarios').value = '';
    document.getElementById('preview').innerHTML = '';
};
