function startGame() {
    // Clear table 
    for (var i = 1; i <= 9; i++) {
        clearBox(i);
    }
    document.turn = "X";
    document.winner = null;
    setMessage(document.turn + " Gets to start")
}

//creating the user message
function setMessage(msg) {
    document.getElementById("message").innerText = msg;
}

//next move function if a next move can be made
function nextMove(emty) {
    if (document.winner != null) {
        setMessage(document.winner + " Already won the game.");
    } else if (emty.innerText == "") {
        emty.innerText = document.turn;
        switchTurn();
    } else { //cannot move over the other players mark
        setMessage("That is an invalid move!!");
    }
}

//if the game is not won or over change between players
function switchTurn() {
    if (checkForWinner(document.turn)) {
        setMessage("Congratulations, " + document.turn + " You win!");
        document.winner = document.turn;
    } else if (checkForDraw()) {
        setMessage("This is a DRAW!!");
    } else if (document.turn == "X") {
        document.turn = "O";
        setMessage("It's " + document.turn + "'s turn");
    } else if (document.turn == "O") {
        document.turn = "X";
        setMessage("It's " + document.turn + "'s turn");
    }

}

//all posible winning combinations to determine if there is a winner
function checkForWinner(move) {
    var result = false;
    if (checkRow(1, 2, 3, move) ||
        checkRow(4, 5, 6, move) ||
        checkRow(7, 8, 9, move) ||
        checkRow(1, 4, 7, move) ||
        checkRow(2, 5, 8, move) ||
        checkRow(3, 6, 9, move) ||
        checkRow(1, 5, 9, move) ||
        checkRow(3, 5, 7, move)) {

        result = true;
    }
    return result;
}

// if all blocks are full and no winning combinations the game must be a draw
function checkForDraw() {
    for (i = 1; i <= 9; i++) {
        if (document.getElementById("s" + i).innerText == "") {
            return false;
        }
    }
    return true;
}


function checkRow(a, b, c, move) {
    var result = false;
    if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
        result = true;
    }
    return result;
}

function clearBox(number) {
    document.getElementById("s" + number).innerText;
}

function getBox(number) {
    return document.getElementById("s" + number).innerText;
}

function exit() {
    window.close();
}