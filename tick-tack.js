    let turn = 0;
    
    let boardState = {
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
        9: ""
    };

    function boardStatePosition(position, mark) {
        boardState[position] = mark
    }

    function printBoardState() {
        console.log('\n' +
            ' ' + boardState[1] + ' | ' + boardState[2] + ' | ' + boardState[3] + '\n' +
            ' ---------\n' +
            ' ' + boardState[4] + ' | ' + boardState[5] + ' | ' + boardState[6] + '\n' +
            ' ---------\n' +
            ' ' + boardState[7] + ' | ' + boardState[8] + ' | ' + boardState[9] + '\n');
    }

    function whosTurn () {
        if (turn === 0) {
        turn += 1
        } else {
        turn = 0;
        }
    }

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

printBoardState()

// Missing: 
// - No way to validate move as integer along with board position
// - No logic to check if a player has won or if game is tied after every turn
// - No logic to handle player turns


// Thanks again!! All the best.





