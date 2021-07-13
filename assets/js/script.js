const gameBoard = document.getElementById('game-board');
const boxes = document.querySelector('#game-board .cell');
const rematchBtn = document.getElementById('rematch')

let board = ['', '', '', '', '', '', '', '', ''];
let mainPlayer;
let gameStart = true;


//resets game on win,lose or draw**********************************

rematchbtn.addEventListener('click', function rematch() {
    for (i = 0; i < board.length; i++) {
        board[i].classList.remove('x', 'o')
    }
});

// shows Avaliable winninng combinations on the board by [index]*********************************

const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


// game progress**********************
for (i = 0; i <= winningPatterns.length; i++) {
    let updates = winningPatterns[i];


}
if (winningPatters === true) {
    return "Winner" + mainPlayer;
} else {
    return 'Tie Game'
}


/*
1: create board.
2: Add functionality
3: create player interaction with the board giving player x or o.
4: make it so that a box cannot be clicked on once a selection has already been added.
5: add winning combinations
6: apply winning combinations to the board to be updated once confirmed.
7: apply a messeage if winning combination is not confirmed.
8: regadless of win or loss apply a message to reset the game upon a win,loss or draw. */