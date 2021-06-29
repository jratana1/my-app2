let grid = [[0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0]]

const red = 1;
const black = 2;
const blank = 0;
const players = [red, black]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const move = (column, player) => {
    //find the first zero entry in the column array
    //call checkMove
    //replace that entry with players color
    //increment turncounter

}

const checkWin = (grid) => {
    //check 4 in a row
}

const printGrid = (grid) => {
    //loop through grid
    //if  1 put R, elseif 2 put B, else " "
}

const checkMove = (column) => {
    // if column.last != 0 then let play move again
}

const game = () => {


    for ( let turnCounter=0; turnCounter < 35; turnCounter++ ) {
        let column = getRandomInt(6);
        let currentPlayer = players[turnCounter % 2]

        move(column, currentPlayer)

        checkWin(grid)
    }

}


