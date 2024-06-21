// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
//DOM - Document Object Model
//
const titleElement = document.getElementById('title');
const paragraphElements = document.querySelectorAll('text');
console.log(paragraphElements);

console.log(titleElement.offsetHeight); // para ver los valores

titleElement.textContent = 'Hola'; // Para modificar el contenido de titleElement

const startpointElement = document.getElementById('start-point');

console.log(
  `Soy un ${startpointElement.tagName} con el id ${startpointElement.id} y la clase ${startpointElement.className}. Mi padre es un ${startpointElement.parentElement.tagName} con el id ${startpointElement.parentElement.id} y la clase ${startpointElement.parentElement.className}. Mi hermano es un ${startpointElement.previousElementSibling.tagName} con el id ${startpointElement.previousElementSibling.id} y la clase ${startpointElement.previousElementSibling.className}. Mi hermano es un ${startpointElement.previousElementSibling.previousElementSibling.tagName} con el id ${startpointElement.previousElementSibling.previousElementSibling.id} y la clase ${startpointElement.previousElementSibling.previousElementSibling.className}.`
);

const changeTextElement = document.getElementById('first-list');

changeTextElement.textContent = 'Second List - Item 1';
console.log(changeTextElement);

const changeTextElement2 = document.getElementById('second-list');

changeTextElement2.textContent = 'First List - Item 1';
console.log(changeTextElement2);
