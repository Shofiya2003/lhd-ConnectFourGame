//Selectors

const tableRow=document.getElementsByTagName('tr');

const tableCell=document.getElementsByTagName('td');
// const cell=document.querySelectorAll('.cell')
const reset=document.querySelector('.reset');
const palyerTurn=document.querySelector('.player-turn');
const openModal=document.querySelector('.openModal');
const winnerText=document.querySelector('.winner-text');





for(let i=0;i<tableCell.length;i++){
    tableCell[i].addEventListener('click',(event)=>{
        console.log(event.target.parentElement.rowIndex,tableCell[i].cellIndex);
    })
}


while(!player1){
    var player1=prompt("Player 1: Enter Your Name: You will be red color");
}
const player1Color="red"


while(!player2){
    var player2=prompt("Player 2: Enter Your Name: You will be yellow color");
}

const player2Color="yellow"
var currentPlayer=1;
palyerTurn.textContent=`${player1}'s turn`;

Array.prototype.forEach.call(tableCell,(cell)=>{
    cell.addEventListener('click',changeColor);
})


function changeColor(event){
    let col=event.target.cellIndex;
    let row=[];
   
    for(let i=4;i>=0;i--){
    
        
        if(tableRow[i].children[col].style.backgroundColor===""){
            console.log("uu");
            console.log(tableRow[i].children[col].style.backgroundColor);
            row.push(tableRow[i].children[col]);
            if(currentPlayer===1){
                
                palyerTurn.textContent=`${player2}'s turn`;
                row[0].style.backgroundColor=player1Color;
                
            }else{
               
                palyerTurn.textContent=`${player1}'s turn`;
                row[0].style.backgroundColor=player2Color;
            }
            
            if(checkHorizontal()){
               
                declareWin();
                resetFunction();
                return;
            }
            if(checkVertical()){
                declareWin();
                resetFunction();
            
                return;
            }
            if(checkUpDiagonal()){
                declareWin();
                resetFunction();
                return;
            }
           
            if(checkDownDiagonal()){
                declareWin();
                resetFunction();
                return;
            }    
            
            if(currentPlayer===1){
                currentPlayer=2;
            }else{
                currentPlayer=1;
            }
           
            break;
            
        }
        
    }

    

    
}

function checkWin(one,two,three,four){
    
    if(one!=="" && one===two && one===three && one===four){
        console.log(true)
        return true;
    }else{
        return false;
    }
}

function checkHorizontal(){
    for(let i=0;i<tableRow.length;i++){
        for(let j=0;j<4;j++){
            if(checkWin(getColor(i,j+0),getColor(i,j+1),getColor(i,j+2),getColor(i,j+3))){
                console.log(true);
                return true;
            }
        }
    }

    return false;
}

function checkVertical(){
    for(let i=0;i<tableRow.length;i++){
        for(let j=0;j<2;j++){
            if(checkWin(getColor(j+0,i),getColor(j+1,i),getColor(j+2,i),getColor(j+3,i))){
                console.log(true);
                return true;
            }
        }
    }

    return false;
}

function checkDownDiagonal(){
    for(let i=0;i<2;i++){
        for(let j=0;j<4;j++){
            if(checkWin(getColor(i+0,j+0),getColor(i+1,j+1),getColor(i+2,j+2),getColor(i+3,j+3))){
                console.log(true);
                return true;
            }
        }
    }

    return false;
}


function checkUpDiagonal(){
   
    for(let i=tableRow.length-1;i>2;i--){
        for(let j=0;j<4;j++){
            if(checkWin(getColor(i-0,j+0),getColor(i-1,j+1),getColor(i-2,j+2),getColor(i-3,j+3))){
                return true;
            }
        }
    }

    return false;
}

function getColor(row,col){
    return tableRow[row].children[col].style.backgroundColor;
}

function resetFunction(){
    Array.prototype.forEach.call(tableCell,(cell)=>{
        cell.style.backgroundColor="";
    });
    currentPlayer=1;
    palyerTurn.textContent=`${player1}'s turn`;
    
  
}

function declareWin(){
   winnerText.textContent=`Player ${currentPlayer} wins!!`
   openModal.click();
  
}



reset.addEventListener('click',resetFunction);




