
let nameInp = document.querySelector(".take-names");
let pla_1_inp = document.getElementById("inp-1");
let pla_2_inp = document.getElementById("inp-2");

let selectInp = document.querySelector(".select-opt")
let pla_1_btn = document.getElementById("p-1")
let pla_2_btn = document.getElementById("p-2")

let mode = 0

console.log(pla_1_btn.innerHTML);

pla_1_btn.addEventListener("change", () => {
    mode = 1;

    nameInp.style.display = "flex";
    pla_2_inp.style.display = "none";

    console.log("Mode: 1");
});

pla_2_btn.addEventListener("change", () => {
    mode = 2;

    nameInp.style.display = "flex";
    pla_2_inp.style.display = "block";

    console.log("Mode: 2");
});

let pla1 = ""
let pla2 = ""

function redirect() {
    pla1 = pla_1_inp.value.trim()
    pla2 = pla_2_inp.value.trim()

    if (mode === 1) {
        if(pla1 == ""){
            alert("Enter the name")
            return
        }
    }
    else {
        if(pla1 == "" || pla2 == ""){
            alert("Enter both names")
            return
        }
    }
    
    localStorage.setItem("mode", mode);
    localStorage.setItem("player1", pla1);
    localStorage.setItem("player2", pla2 || "Computer");

    console.log(mode, pla1, pla2)
    window.location.href = "game.html"
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();

        redirect()
    }
});