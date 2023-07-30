const canvas = document.getElementById('game');
const game = canvas.getContext('2d')

// Variables que se utlizan para el responsive.
let canvaSize;
let elementSize;

window.addEventListener('load', setResponsive);
window.addEventListener('resize', setResponsive)

function starGame(){
    const map = maps[2] 
    const mapRows =  map.trim().split('\n')
    const mapRowsCol = mapRows.map(row => row.trim().split('')) 
    
    for (let row = 1; row <= 10; row++) {
            for (let col = 0; col <= 10; col++) {
             
                
                game.fillText(emojis[mapRowsCol[row - 1][col]],elementSize * col,elementSize*row);   
                
            }
                
        }
        
        console.log(map,mapRows,mapRowsCol)
        
}

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