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

document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("start-button");
    const startScreen = document.getElementById("start-screen");
    const gameContainer = document.getElementById("game-container");
    const gameInfo = document.getElementById("game-info");
    const gameImg = document.getElementById("game-img");
    const backgroundImg = document.getElementById("background-img");
    const audio = document.getElementById("audio");
    const previousGame = document.getElementById("previous-game");
    const nextGame = document.getElementById("next-game");

    startButton.addEventListener("click", function() {
        startScreen.style.display = "none";
        gameContainer.classList.remove("hidden");
        audio.play();

        // Cambiar el fondo
        document.body.style.backgroundImage = "url('background.jpg')";

        // Mostrar la primera imagen del carrusel
        const initialGame = games[0];
        gameInfo.innerHTML = `<h2>${initialGame.nombre}</h2>`;
        gameImg.src = initialGame.imagen;

        // Manejar el cambio de juego al hacer clic en las flechas
        previousGame.addEventListener("click", showPreviousGame);
        nextGame.addEventListener("click", showNextGame);
    });

    let currentIndex = 0;

    function showPreviousGame() {
        currentIndex = (currentIndex - 1 + games.length) % games.length;
        const game = games[currentIndex];
        gameInfo.innerHTML = `<h2>${game.nombre}</h2>`;
        gameImg.src = game.imagen;
        previousGame.style.opacity = 0.5;
        nextGame.style.opacity = 1;
    }

    function showNextGame() {
        currentIndex = (currentIndex + 1) % games.length;
        const game = games[currentIndex];
        gameInfo.innerHTML = `<h2>${game.nombre}</h2>`;
        gameImg.src = game.imagen;
        previousGame.style.opacity = 1;
        nextGame.style.opacity = 0.5;
    }
});
