function cambiar() {
    let variable =document.getElementById("noche");
    let hojaEstilo = document.getElementById("hoja-estilo");

    variable.classList.toggle("dia")
    if (hojaEstilo.getAttribute("href") === "css/styles.css") {
        hojaEstilo.setAttribute("href", "css/styles_dark.css");
    } else {
        hojaEstilo.setAttribute("href", "css/styles.css");
    }
}

// Obtenemos referencia al input de la calculadora
let pantalla = document.querySelector('input[type="text"]');

// Función para agregar números y operadores a la pantalla
function agregarAlPantalla(valor) {
    pantalla.value += valor;
}

// Función para borrar el contenido de la pantalla
function borrar() {
    pantalla.value = '';
}

// Función para calcular el resultado de la operación
function calcular() {
    try {
        pantalla.value = eval(pantalla.value);
    } catch (error) {
        pantalla.value = 'Error'; // Si ocurre un error en la evaluación, muestra "Error"
    }
}




// Event listeners para los botones de la calculadora
document.getElementById('ac').addEventListener('click', borrar); // Botón AC, limpia la pantalla
document.getElementById('borrar').addEventListener('click', () => {
    pantalla.value = pantalla.value.slice(0, -1); // Botón de borrar, elimina el último carácter de la pantalla
});
document.getElementById('porcentaje').addEventListener('click', () => {
    agregarAlPantalla('/100'); // Botón de porcentaje
});
document.getElementById('dividir').addEventListener('click', () => {
    agregarAlPantalla('/'); // Botón de división
});
// Y así sucesivamente para cada botón numérico y operador


document.getElementById('siete').addEventListener('click', () => {
    agregarAlPantalla('7');
});
document.getElementById('ocho').addEventListener('click', () => {
    agregarAlPantalla('8');
});
document.getElementById('nueve').addEventListener('click', () => {
    agregarAlPantalla('9');
});
document.getElementById('multiplicar').addEventListener('click', () => {
    agregarAlPantalla('*');
});
document.getElementById('cuatro').addEventListener('click', () => {
    agregarAlPantalla('4');
});
document.getElementById('cinco').addEventListener('click', () => {
    agregarAlPantalla('5');
});
document.getElementById('seis').addEventListener('click', () => {
    agregarAlPantalla('6');
});
document.getElementById('restar').addEventListener('click', () => {
    agregarAlPantalla('-');
});
document.getElementById('uno').addEventListener('click', () => {
    agregarAlPantalla('1');
});
document.getElementById('dos').addEventListener('click', () => {
    agregarAlPantalla('2');
});
document.getElementById('tres').addEventListener('click', () => {
    agregarAlPantalla('3');
});
document.getElementById('sumar').addEventListener('click', () => {
    agregarAlPantalla('+');
});
document.getElementById('cero').addEventListener('click', () => {
    agregarAlPantalla('0');
});
document.getElementById('punto').addEventListener('click', () => {
    agregarAlPantalla('.');
});

document.getElementById('igual').addEventListener('click', calcular); // Botón de igual, realiza el cálculo

