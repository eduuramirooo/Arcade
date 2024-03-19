window.onload = () => {
    let indice = 0;
    let etiquetaImg;
    const informacion = 
        [
            {
                nombre: "Tekken",
                imagen: "Tekken.jpg",
                audio: "tekken.mp3"
            },
            {
                nombre: "Metal Slug",
                imagen: "Metal.jpg",
                audio: "metal.mp3"
            },
            {
                nombre: "King Of Fighters",
                imagen: "KOF.jpg",
                audio: "king.mp3"
            },
            {
                nombre: "Sonic",
                imagen: "sonic.webp",
                audio: "sonic.mp3"
            },
            {
                nombre: "Super Mario",
                imagen: "mario.png",
                audio: "mario.mp3"
            },
            {
                nombre: "Puzzle Bobble",
                imagen: "Puzzle.png",
                audio: "Puzzle.mp3"
            }
        ];

    
    const etiquetaAudio = document.querySelector("audio");

    // Si pulso abajo
    const cambiarDeJuego = (direccion) => {
        etiquetaImg.classList.add("a");
        if(direccion==0){
            indice++;
            if(indice>5){
                indice=0;
            }
        }else{
            indice--;
            if(indice<0){
                indice=5;
            }
        }
        etiquetaAudio.setAttribute("src","./audios/"+informacion[indice].audio);
        etiquetaAudio.play();
        const seleccionado = document.querySelector(".seleccionado");
        seleccionado.classList.remove("seleccionado");
        const seleccionadoNuevo = document.querySelectorAll("li");
        seleccionadoNuevo[indice].classList.add("seleccionado");
        etiquetaImg.setAttribute("src","./imagenes/"+informacion[indice].imagen);
    }
    

    const cambiarJuego = (evento) => {
        setInterval(()=>{
            etiquetaImg.classList.remove("a");
        }, 1000)
        
        if(evento.key == "ArrowRight"){
            cambiarDeJuego(0);
        }else if(evento.key == "ArrowLeft"){
            cambiarDeJuego(1);
        }
    }
    const actualizarListado = () => {
        console.log(informacion[0].imagen)
        let contenido = `
        <div>
            <ul>`;
        let primero = true;
        informacion.forEach(juego => {
            if(primero){
                clase="seleccionado"
                primero = false;
            }else{
                clase="";
            }
            contenido += `<li class="${clase}">${juego.nombre}</li>`
        })
        contenido += `</ul>
        </div>
        <div>
            <img src="./imagenes/${informacion[0].imagen}" alt="${informacion[0].nombre}">
        </div>`;

        const divContenido = document.querySelector("#contenido");
        divContenido.innerHTML = contenido;
    }
    

    actualizarListado()
    /*.then(()=>{
        window.onkeydown = cambiarJuego;
        etiquetaImg = document.querySelector("img");
    })*/
    setTimeout(()=>{
        window.onkeydown = cambiarJuego;
        etiquetaImg = document.querySelector("img");
    }, 1000);
}