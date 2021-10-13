let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game

// use the value stored in the nextPlayer variable to indicate who the next player is
let nextPlayerlabel = document.querySelector('#next-lbl');
nextPlayerlabel.innerText = nextPlayer;

//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
    let cells = document.querySelectorAll('td');
    for (c in cells){
        cells[c].innerHTML = '<button>[ ]</button>'
    }
}
// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => {takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
   event.target.innerHTML = nextPlayer;

   if (nextPlayer == 'X'){
       nextPlayer = 'O';
   }
   else{
       nextPlayer = 'X';
   }

   nextPlayerlabel.innerText = nextPlayer;

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )
    event.target.disabled = true;
    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        let gameOverLabel = document.querySelector('#game-over-lbl');
        gameOverLabel.innerHTML = '<h1>Game Over</h1>';
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise
    let disabledButtons = 0;
   for (buttons in btns){
       if (btns[buttons].disabled == true){
           disabledButtons++;
       }
   }

   if (disabledButtons == 9){
       return true;
   }
   else {
       return false;
   }
}
