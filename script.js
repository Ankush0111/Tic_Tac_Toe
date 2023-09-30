console.log("Welcome to tic tac toe");
let turn = "x";
let gameover = false;

// Function to change turn
const changeturn = () => {
    return turn === "x" ? "0" : "x";
}

// Function to check win
const checkwin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    let isTie = true; // Assume a tie initially

    win.forEach(e => {
        if (
            (boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[0]].innerText !== '')
        ) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " won";
            gameover = true;
            isTie = false; // If a win is found, it's not a tie
        }
    });

    // Check for a tie
    if (isTie) {
        let isBoardFull = true;
        for (let i = 0; i < boxtext.length; i++) {
            if (boxtext[i].innerText === '') {
                isBoardFull = false;
                break;
            }
        }
        if (isBoardFull) {
            document.querySelector('.info').innerText = 'It\'s a tie!';
            gameover = true;
        }
    }
}

// Logic for handling clicks on boxes
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '' && !gameover) {
            boxtext.innerText = turn;
            turn = changeturn();
            checkwin();
            if (!gameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    });
});

// Reset button
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "x";
    gameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
});
