const canvas = document.getElementById('game');
const game = canvas.getContext('2d')

// Variables que se utlizan para el responsive.
let canvaSize;
let elementSize;

window.addEventListener('load', setResponsive);
window.addEventListener('resize', setResponsive)

function setResponsive(){
    
    if(window.innerHeight > innerWidth){
        canvaSize = innerWidth * 0.8;
    }else{canvaSize = innerHeight * 0.7;}
        
    canvas.width = canvaSize 
    canvas.height = canvaSize 

    elementSize = canvaSize / 10;
    game.font = elementSize + 'px Verdana'
    game.textAling = 'end'
    
    starGame()

}

function starGame(){
    const map = maps[2] 
    const mapRows =  map.trim().split('\n')
    const mapRowsCol = mapRows.map(row => row.trim().split('')) 
    
   mapRowsCol.forEach((row, rowI) => {
        row.forEach((col, colI) => {
            const emoji = emojis[col]
            const posY = elementSize * colI
           // const posX = elementSize * (rowI + 1)
            game.fillText(emoji, posY , rowI * 40)
        })
    })
    
     const array1 = ['a', 'b', 'c'];

       // array1.forEach((element) => console.log(element));
        
}


document.addEventListener("keydown", keyDownHandler);

function keyDownHandler(event) {
  console.log(event.key)
}