let button = document.getElementById("chng-btn")
console.log(button);

// button.addEventListener("click", () => {
//     cont = document.querySelector(".box")
//     cont.innerText = "This content is changed after your click"

//     console.log('Content is change');
// })

button.addEventListener("dblclick", (e) => {
    cont = document.querySelector(".box")
    cont.innerText = "This content is changed after your double click"

    console.log('You can open folder');
    console.log('Event obj:\n', e); 
})
