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

let currentIndex = 0;
const gameImg = document.getElementById("game-img");
const gameName = document.getElementById("game-name");
const previousImg = document.querySelector(".previous-img");
const nextImg = document.querySelector(".next-img");
const menuAudio = document.getElementById("menu-audio");

function showGame(index) {
    currentIndex = (index + games.length) % games.length;
    const game = games[currentIndex];
    gameImg.style.opacity = 0; // Oculta la imagen principal
    gameName.style.opacity = 0; // Oculta el nombre del juego
    setTimeout(() => {
        gameImg.src = "../imagenes/" + game.imagen;
        gameName.textContent = game.nombre;
        gameImg.style.opacity = 1; // Muestra la imagen principal con animación de transición
        gameName.style.opacity = 1; // Muestra el nombre del juego con animación de transición
        const previousIndex = (currentIndex - 1 + games.length) % games.length;
        const nextIndex = (currentIndex + 1) % games.length;
        previousImg.src = "../imagenes/" + games[previousIndex].imagen;
        nextImg.src = "../imagenes/" + games[nextIndex].imagen;
        previousImg.style.opacity = 0.5; // Difumina la imagen anterior
        nextImg.style.opacity = 0.5; // Difumina la imagen siguiente
    }, 500); 
}

function showNextGame() {
    if (!menuAudio.paused) { // Si el audio ya está reproduciendo, no lo vuelvas a reproducir
        showGame(currentIndex + 1);
    } else {
        playMenuSound();
        showGame(currentIndex + 1);
    }
    previousImg.classList.remove("focus"); // Quita el foco de la imagen anterior
    nextImg.classList.add("focus"); // Enfoca la imagen siguiente
}

function showPreviousGame() {
    if (!menuAudio.paused) { // Si el audio ya está reproduciendo, no lo vuelvas a reproducir
        showGame(currentIndex - 1);
    } else {
        playMenuSound();
        showGame(currentIndex - 1);
    }
    nextImg.classList.remove("focus"); // Quita el foco de la imagen siguiente
    previousImg.classList.add("focus"); // Enfoca la imagen anterior
}

function playMenuSound() {
    menuAudio.play();
}

// Agregar eventos de teclado
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        showPreviousGame();
    } else if (event.key === "ArrowRight") {
        showNextGame();
    }
});


showGame(0);