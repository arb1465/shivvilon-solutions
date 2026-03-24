let mapp = new Map([
    ['Gondal', 'Sahil'],
    ['Nag', 'Akshat'],
    ['Lambu', 'Vinit'],
    ['Bathiyo', 'Parth'],
    ['Venu', 'Sanket'],
    ['Jatiyaro', 'Jenil'],
])

mapp.set('Khaman', 'Niraj')
mapp.set('Makdu', 'Mohhamad')

// for(let nickname of mapp.keys()){
//     console.log(nickname)
// }

let obj = Object.fromEntries(mapp)
// console.log(obj)


let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};

let {size: s, items: itms} = options
// console.log(s, itms)

let now = new Date()
// console.log(now)
// console.log( String(now.getMonth()) )
// console.log(new Date().getTimezoneOffset())

now.setDate(now.getDate() + 83)
// console.log(now)

let date = new Date(2011, 1, 1, 2, 3, 4, 567);
// console.log( date );

// let timestamp = Date.now()
// console.log(timestamp)

let ms = Date.parse(now) // Miliseconds from 1/1/1970
// console.log(ms)

let mine = {
    name : 'Aasutosh',
    age : 21,
    company : "Shivvil'on Solutions",
    isIntern : true,
}
// console.log("Obj:\n", mine)

// jsonData = JSON.stringify(mine);
// console.log("\nJSON data:\n", jsonData)

// obj = JSON.parse(jsonData)
// console.log("\nOriginal obj:\n", obj)

// let updated = {
//     ...mine,
//     college: 'SVNIT'
// }

// console.log(updated)

// let sayHiMixin = {
//   sayHi() {
//     console.log(`Hello ${this.name}!`);
//   },
//   sayBye() {
//     console.log(`Bye ${this.name}`);
//   }
// };

// class User {
//   constructor(name) {
//     this.name = name;
//   }
// }

// Object.assign(User.prototype, sayHiMixin);

// new User("ARB").sayHi()

