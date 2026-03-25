// Promise.any([
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops! Error at 1  ")), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve("Solved promise: 2"), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve("Solved promise: 3"), 3000))
// ]).then(alert)

// console.log(document.body.childNodes);  // all node including text = Empty space
// console.log(document.body.children);
// console.log(document.body.firstChild); // text = Empty space
// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);

// third = document.body.children[0].children[2]
// console.log(third)
// console.log(third.previousElementSibling)

// firstBox = document.querySelector(".box")
// console.log(firstBox);
// firstBox.style.backgroundColor = "blue"
// firstBox.style.color = "white"

// boxList = document.querySelectorAll(".box")
// console.log(boxList);


let box = document.querySelector("#b2")
// console.log(box);
// box.style.color = "red"
// console.log(box.innerHTML);
// console.log(box.outerHTML);
// console.log(box.tagName);
// console.log(box.textContent);
// box.hidden = true

// console.log(box.hasAttribute("id"));
// console.log(box.getAttribute("id"));
// console.log(box.setAttribute("id", "box2"));
// console.log(box.removeAttribute("id"));
// console.log(box.attributes);


// let newBox = document.createElement("div")
// console.log(newBox);
// newBox.setAttribute("class", "box")
// newBox.innerHTML = "This is a new Box"
// document.querySelector(".container").prepend(newBox)

// let cont = document.querySelector(".container")
// cont.insertAdjacentElement("afterend", newBox)


// secBox = document.getElementsByClassName("box2")
// console.log(secBox);
// first = secBox[0]
// console.log(first.classList)
// console.log(first.classList.add("newClass"))
// console.log(first.classList.remove("newClass"))