/*
// Selección de elementos

const button = document.querySelector('button');
const paragraph = document.getElementById('color');


// Crear la función que iterará sobre los posibles colores hexadecimales

function generateHex() {
    // Definimos las variables a utilizar para modificar el código hexadecimal.
    let digits = '0123456789ABCDEF';
    let colorHex = '#';
    
    // Iteramos sobre cada caracter aleatorio, considerando 6 caracteres en total ó 6 iteraciones.
    for (let i = 0; i < 6; i++) {
        let getRandom = Math.floor(Math.random() * 16); //Obtenemos un número aleatorio.
        colorHex += digits[getRandom]; // Ese númemro aleatorio será el número del índice que se añadirá al color hexadecimal final,  generando un código aleatorio.
    }
    return colorHex;
}


// Ahora necesitamos añadir el evento donde se llamará a nuestra función.

button.addEventListener('click', function() {
    let randomColor = generateHex();
    paragraph.textContent = randomColor;
    document.body.style.backgroundColor = randomColor;
});
*/

// Selección de elementos

const lightButton = document.querySelector('.light');
const darkButton = document.querySelector('.dark');
const body = document.body;
const navbar = document.getElementById('navbar');



// Creación de función de cambio de modo

darkButton.addEventListener('click', function() {
    body.style.backgroundColor = 'var(--dark-color)';
    navbar.style.backgroundColor = 'var(--secondary-color)';
    lightButton.style.backgroundColor = 'var(--light-color)';
    darkButton.style.backgroundColor = 'var(--light-color)';
});

lightButton.addEventListener('click', function() {
    body.style.backgroundColor = 'var(--primary-color)';
    navbar.style.backgroundColor = 'var(--light-color)';
    lightButton.style.backgroundColor = 'var(--primary-color)';
    darkButton.style.backgroundColor = 'var(--primary-color)';
});


