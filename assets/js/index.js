import { Aguila } from './aguila.js';
import { Leon } from './leon.js';
import { Lobo } from './lobo.js';
import { Oso } from './oso.js';
import { Serpiente } from './serpiente.js';

const url = './animales.json';
const animalInvestigado = [];

const animales = (async () => {
    try {
        let response = await fetch(url);
        if (!response.ok) throw new Error('HTTP error! status: ' + response.status);
        let data = await response.json();
        return data.animales;
    } catch (error) {
        console.log("Error al obtener los animales");
    }
})();

// Registro de animales

document.getElementById('btnRegistrar').addEventListener('click', () => {
    let animalName = document.getElementById('animal').value;
    let edad = document.getElementById('edad').value;
    let comentarios = document.getElementById('comentarios').value;

    // Validar campos
    if (animalName === "") {
        alert(`Seleccione un animal`);
        return;
    }
    if (edad === "") {
        alert(`Seleccione una edad`);
        return;
    }
    if (comentarios === "") {
        alert(`Escriba un comentario`);
        return;
    }

    let infoAnimal = animales.find((item) => item.name.toLowerCase() === animalName.toLowerCase());

    switch (animalName.toLowerCase()) {
        case 'aguila':
            animalInvestigado.push(new Aguila(animalName, edad, infoAnimal.imagen, comentarios, infoAnimal.sonido));
            break;
        case 'leon':
            animalInvestigado.push(new Leon(animalName, edad, infoAnimal.imagen, comentarios, infoAnimal.sonido));
            break;
        case 'lobo':
            animalInvestigado.push(new Lobo(animalName, edad, infoAnimal.imagen, comentarios, infoAnimal.sonido));
            break;
        case 'oso':
            animalInvestigado.push(new Oso(animalName, edad, infoAnimal.imagen, comentarios, infoAnimal.sonido));
            break;
        case 'serpiente':
            animalInvestigado.push(new Serpiente(animalName, edad, infoAnimal.imagen, comentarios, infoAnimal.sonido));
            break;
        default:
            alert('Animal fuera del catálogo');
            break;
    }
    resetInputValues();
    displayAnimalInvestigado(animalInvestigado);
});

document.getElementById('animal').addEventListener('change', (event) => {
    const infoAnimal = animales.find((item) => item.name.toLowerCase() === event.target.value.toLowerCase());

    const img = document.getElementById('img');
    img.setAttribute('src', `./assets/imgs/${infoAnimal.imagen}`);

    const previewSection = document.getElementById('preview');
    previewSection.innerHTML = '';
    previewSection.appendChild(img);
});

// Funciones
function displayAnimalInvestigado(animalInvestigado) {
    const animalContainer = document.getElementById('animales');
    animalContainer.innerHTML = '';

    animalInvestigado.forEach((animal) => {
        const animalCard = document.createElement('div');
        const animalImage = document.createElement('img');
        const animalBtn = document.createElement('button');
        const animalIcon = document.createElement('i');
        const animalAudio = document.createElement('audio');

        animalCard.setAttribute('class', 'animal-card');
        animalImage.setAttribute('src', `./assets/imgs/${animal.img}`);
        animalAudio.setAttribute('id', `audio${animal.nombre}`);
        animalAudio.setAttribute('src', `./assets/sounds/${animal.sonido}`);

        animalBtn.appendChild(animalIcon);
        animalBtn.appendChild(animalAudio);

        animalCard.appendChild(animalImage);
        animalCard.appendChild(animalBtn);

        animalImage.addEventListener('click', () => {
            displayModalAnimal(animal);
        });
        animalBtn.addEventListener('click', () => {
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

function displayModalAnimal(animal) {
    const animalModal = document.getElementById('animalModal');

    const modalBody = animalModal.querySelector('.modal-body');
    modalBody.innerHTML = '';

    const img = document.createElement('img');
    const h5 = document.createElement('h5');
    const edadP = document.createElement('p');
    const comentarioP = document.createElement('p');

    img.setAttribute('src', `./assets/imgs/${animal.img}`);
    h5.innerText = animal.nombre;
    edadP.innerText = `Edad: ${animal.edad}`;
    comentarioP.innerText = `Comentarios: ${animal.comentarios}`;

    modalBody.appendChild(img);
    modalBody.appendChild(h5);
    modalBody.appendChild(edadP);
    modalBody.appendChild(comentarioP);

    const modal = new bootstrap.Modal(animalModal);
    modal.show();
}

function resetInputValues() {
    document.getElementById('animal').selectedIndex = 0;
    document.getElementById('edad').selectedIndex = 0;
    document.getElementById('comentarios').value = '';
    document.getElementById('preview').innerHTML = '';
}
