// Función para reproducir el sonido correspondiente a una tecla
function playSonido (idElementoAudio){
    // Selecciona el elemento de audio usando su ID y reproduce el sonido
    document.querySelector(idElementoAudio).play();
    
}

// Selecciona todas las teclas y las almacena en una lista
const listaDeTeclas = document.querySelectorAll('.tecla');

// Recorre la lista de teclas
for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
     // Obtiene el nombre del instrumento a partir de la segunda clase de la tecla
    const instrumento = tecla.classList[1];
    
    // Crea el ID del audio correspondiente al instrumento
    const idAudio = `#sonido_${instrumento}`;
    console.log(idAudio)

    // Asigna una función al evento 'onclick' de la tecla para reproducir el sonido
    tecla.onclick = function (){
        playSonido(idAudio);
    };

    // Asigna una función al evento 'onkeydown' de la tecla para agregar la clase 'activa' si se presiona 'Space' o 'Enter'
    tecla.onkeydown = function(evento){
        console.log(evento.code == 'Space')
        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('activa');
        }
        console.log(evento.code === 'Space' || evento.code === 'Enter')   
    }

    // Asigna una función al evento 'onkeyup' de la tecla para remover la clase 'activa'
    tecla.onkeyup = function(){
        tecla.classList.remove('activa');
    }

}
