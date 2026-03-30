let mode = localStorage.getItem("mode");
let player1 = localStorage.getItem("player1");
let player2 = localStorage.getItem("player2");
console.log("From script.js: ", mode, player1, player2);

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let winnerName = document.querySelector(".winnerName");
let msg = document.querySelector("#msg");


let play1Ele = document.getElementById("p-1")
let play2Ele = document.getElementById("p-2")
play1Ele.innerText = player1
play2Ele.innerText = player2

play1Ele.style.background = "linear-gradient(135deg, #f87171, #dc2626)";
play1Ele.style.color = "white";

let turnO = true;
let winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

const addCSS = (inp) => {
    // dark navy (better contrast)
    inp.style.fontSize = "38px";
    inp.style.fontWeight = "700";
    inp.style.padding = "6px 14px";
    inp.style.borderRadius = "8px";
    inp.style.transition = "all 0.3s ease";
    inp.style.boxShadow = "0 4px 12px rgba(0,0,0,0.25)";
}

addCSS(play1Ele)

let selected = [];
const generateOutput = (boxNo) => {
    selected.push(Number(boxNo))

    console.log("Selected pos by p-1: ", boxNo);
    console.log("Total: ", selected);

    let oppWinningPos = new Set()

    for (let pt of winningPattern) {
        // console.log('Box no: ', no, " and pattern: ", pt);

        if (selected.length == 1) {
            let no = selected[0]
            if (pt.includes(no)) {
                pt.forEach(pos => oppWinningPos.add(pos));
            }
        }
        else {
            for (let i = 0; i < selected.length - 1; i++) {
                let no1 = selected[i]
                let no2 = selected[i + 1]

                console.log(no1, no2)
                if (pt.includes(no1) && pt.includes(no2)) {
                    pt.forEach(pos => oppWinningPos.add(pos));
                    break;
                }
            }
        }

    }

    let options = [...oppWinningPos];
    options = options.filter(pos => !boxes[pos].disabled);
    console.log(options)

    if (options.length === 0) {
        let all = [...Array(9).keys()];
        options = all.filter(pos => !boxes[pos].disabled);
    }

    if (options.length === 0) return;

    let move = options[Math.floor(Math.random() * options.length)];

    console.log('Bot chooses: ', move);
    boxes[move].click();
}

const resetGame = () => {
    turnO = true;
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
    selected = [];
    count = 0;

    winnerName.classList.add("hide");
}

let count = 0;
let prv
let firstClick = true

boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
        if(firstClick){
            resetBtn.innerText = "Reset Game"
            firstClick = false
        }

        let bx = e.target;
        let boxNo = bx.getAttribute("class").split(" ")[1][1];
        console.log("Curr selection: ", boxNo);

        if (turnO) {
            console.log(`Box was clicked by ${player1}`);
            box.innerText = "O";
            box.style.color = "red";
            turnO = false;

            addCSS(play2Ele)
            play2Ele.style.background = "linear-gradient(135deg, #38bdf8, #0ea5e9)";
            play2Ele.style.color = "white"
            
            play1Ele.style.color = "#0f172a";
            play1Ele.style.fontSize = "30px"
            prv = boxNo
        }
        else {
            console.log(`Box was clicked by ${player2}`);
            box.innerText = "X";
            box.style.color = "blue";
            turnO = true;
            addCSS(play1Ele)
            play1Ele.style.background = "linear-gradient(135deg, #f87171, #dc2626)";
            play1Ele.style.color = "white";
            
            play2Ele.style.color = "#0f172a"
            play2Ele.style.fontSize = "30px"
        }

        count++;
        box.disabled = true;
        if (!turnO && mode != '2') {
            setTimeout(() => generateOutput(prv), 1000);
        }

        checkWinner();
    })
})

const showWinner = (winner) => {
    winner = winner == "O" ? player1 : player2

    msg.innerText = `Congratulations\nWinner is ${winner}`;
    winnerName.classList.remove("hide");
    resetBtn.innerText = "New Game"

    for (let box of boxes) {
        box.disabled = true;
    }
}

const drawGame = () => {
    msg.innerText = `Match is draw`;
    winnerName.classList.remove("hide");
    resetBtn.innerText = "Reset Game"

    for (let box of boxes) {
        box.disabled = true;
    }
}

const checkWinner = () => {
    let flag = 0;
    for (let pattern of winningPattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val == pos2val && pos2val == pos3val) {
                // console.log("Winner is player -", pos1val);
                flag = 1;
                showWinner(pos1val);
            }
            if (flag == 0 && count == 9) {
                drawGame();
            }
        }
    }
}

resetBtn.addEventListener("click", resetGame);

document.getElementById("go-back").addEventListener("click", () => {
    window.location.href = "./index.html"
} )