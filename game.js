// Crea un elemento canvas con el id "game" y obtiene su contexto 2D.
const canvas = document.getElementById('game');
const game = canvas.getContext('2d');

//Selecciona los id de los botones para obtener el movimiento del jugador por medio del click.
const btnUp = document.querySelector('#up')
const btnleft = document.querySelector('#left')
const btnRight = document.querySelector('#right')
const btnDown = document.querySelector('#down')

// Declara dos variables: canvaSize y elementSize.
let canvaSize;
let elementSize;

// Agrega un evento listener al elemento window para el evento "load" y al evento "resize". La función que se llama cuando se produce uno de estos eventos es setResponsive().
window.addEventListener('load', setResponsive);
window.addEventListener('resize', setResponsive);

// Agrega un evento listener'click' para los botones de la pagina  
btnUp.addEventListener('click', moveUp);
btnDown.addEventListener('click', moveDown);
btnleft.addEventListener('click', moveleft);
btnRight.addEventListener('click', moveRight);

//Ejecuta el evento listener cuando se presiona una tecla y evalua para ejecutar algunas de la fuciones de movimiento
document.addEventListener('keydown', function(event) {
    if(event.key == 'ArrowUp'){
        moveUp()
    }
    else if(event.key == 'ArrowDown'){
        moveDown()
    }
    else if(event.key == 'ArrowRight'){
        moveRight()
    }
    else if(event.key == 'ArrowLeft'){
        moveleft()
    }
    else return false;
    
    
  });



// La función setResponsive() determina el tamaño del lienzo en función de la altura y el ancho de la ventana del navegador.
function setResponsive(){
    
    // Si la altura de la ventana es mayor que el ancho, el tamaño del lienzo se establece en el 80% del ancho de la ventana.
    if(window.innerHeight > innerWidth){
        canvaSize = innerWidth * 0.8;
    }else{canvaSize = innerHeight * 0.7;}

    // El ancho y el alto del lienzo se establecen en el tamaño calculado anteriormente.
    canvas.width = canvaSize 
    canvas.height = canvaSize 

    // La variable elementSize se establece en el tamaño del lienzo dividido por 10.
    elementSize = canvaSize / 10;

    // Se establece la fuente del contexto 2D en Verdana de un tamaño igual a elementSize.
    game.font = elementSize + 'px Verdana'

    // Se establece el alineamiento del texto en "end".
    game.textAling = 'end'

    // Se llama a la función starGame().
    starGame()
}

// La función starGame() carga el mapa del juego y lo dibuja en el lienzo.
function starGame(){

    // Se obtiene el mapa del juego a partir del array maps[2].
    const map = maps[2] 
    
    // El mapa se divide en filas y columnas.
    const mapRows =  map.trim().split('\n')
    const mapRowsCol = mapRows.map(row => row.trim().split('')) 
    
    // Se recorren las filas y columnas del mapa.
    mapRowsCol.forEach((row, rowI) => {
        row.forEach((col, colI) => {
    
            // Se obtiene el emoji correspondiente a la celda actual del mapa.
            const emoji = emojis[col]
    
            // Se calculan las coordenadas Y y X del texto a dibujar.
            const posY = elementSize * colI
            const posX = elementSize * (rowI + 1)
    
            // Se dibuja el texto en el lienzo.
            game.fillText(emoji, posY , posX)
        })
    })
    }
    
//funciones de movimiento del jugador    
function moveUp(){
    console.log('Arriba')
}    
function moveDown(){
    console.log('Abajo')
}
function moveRight(){
    console.log('Derecha')
}
function moveleft(){
    console.log('Izquierda')
}
