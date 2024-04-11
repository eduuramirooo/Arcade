// Definición de la lista de juegos con sus nombres e imágenes
const games = [
    {
        nombre: "Tekken",
        imagen: "Tekken.jpg",
    },
    {
        nombre: "Metal Slug",
        imagen: "Metal.jpg",
    },
    {
        nombre: "King Of Fighters",
        imagen: "KOF.jpg",
    },
    {
        nombre: "Sonic",
        imagen: "sonic.webp",
    },
    {
        nombre: "Super Mario",
        imagen: "mario.png",
    },
    {
        nombre: "Puzzle Bobble",
        imagen: "Puzzle.png",
    }
];

// Variable para rastrear el índice del juego actual en el carrusel
let currentIndex = 0;

// Variable para rastrear si el audio del menú ya ha sido iniciado
let menuAudioStarted = false;

// Obtención de referencias a elementos del DOM
const gameImg = document.getElementById("game-img");
const gameName = document.getElementById("game-name");
const previousImg = document.querySelector(".previous-img");
const nextImg = document.querySelector(".next-img");
const menuAudio = document.getElementById("menu-audio");

// Función para mostrar un juego en el carrusel
function showGame(index) {
    // Calcula el índice del juego teniendo en cuenta el tamaño del array de juegos
    currentIndex = (index + games.length) % games.length;

    // Obtiene el juego actual basado en el índice
    const game = games[currentIndex];

    // Oculta la imagen principal y el nombre del juego con una transición
    gameImg.style.opacity = 0;
    gameName.style.opacity = 0;

    // Utiliza setTimeout para esperar un tiempo antes de mostrar el juego,
    // lo que da lugar a una transición más suave
    setTimeout(() => {
        // Actualiza la imagen principal y el nombre del juego
        gameImg.src = "../imagenes/" + game.imagen;
        gameName.textContent = game.nombre;

        // Muestra la imagen principal y el nombre del juego con una transición
        gameImg.style.opacity = 1;
        gameName.style.opacity = 1;

        // Calcula los índices de los juegos anterior y siguiente
        const previousIndex = (currentIndex - 1 + games.length) % games.length;
        const nextIndex = (currentIndex + 1) % games.length;

        // Actualiza las imágenes de los juegos anterior y siguiente
        previousImg.src = "../imagenes/" + games[previousIndex].imagen;
        nextImg.src = "../imagenes/" + games[nextIndex].imagen;

        // Difumina las imágenes de los juegos anterior y siguiente
        previousImg.style.opacity = 0.5;
        nextImg.style.opacity = 0.5;
    }, 500); // Espera 500 milisegundos antes de mostrar el juego
}

// Función para mostrar el siguiente juego en el carrusel
function showNextGame() {
    showGame(currentIndex + 1);
    previousImg.classList.remove("focus"); // Quita el foco de la imagen anterior
    nextImg.classList.add("focus"); // Enfoca la imagen siguiente
}

// Función para mostrar el juego anterior en el carrusel
function showPreviousGame() {
    showGame(currentIndex - 1);
    nextImg.classList.remove("focus"); // Quita el foco de la imagen siguiente
    previousImg.classList.add("focus"); // Enfoca la imagen anterior
}

// Función para reproducir el audio del menú
function playMenuSound() {
    menuAudio.play();
}

// Agregar eventos de teclado para cambiar entre juegos
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        showPreviousGame();
    } else if (event.key === "ArrowRight") {
        showNextGame();
    }
});

// Mostrar el primer juego al cargar la página
showGame(0);
