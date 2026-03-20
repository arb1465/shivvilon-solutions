console.log("Hello World!")

console.log(2
-    3
)

let inp = prompt("Enter your age here ", 'For example 21')
console.log(typeof(inp))  // String

let isBoss = confirm("Are you the boss?");
alert( isBoss ); // true if OK is pressed

console.log(5 ** (1/2))

let counter = 1;
console.log( 2 * ++counter ); 

a = null
b = undefined
console.log(a ?? b)

const obj = {
    name: "Aasutosh Baraiya",
    company: "Shivvilon Solutions",
    age: 21,
    isIntern: true,
    null: "This is null",
}

console.log(obj.name);
console.log(obj["company"]);
console.log(obj.null)

console.log("isIntern" in obj)

for(k in obj){
    console.log(k," : " ,obj[k])
}

obj["city"] = 'Rajkot'
console.log(obj)

let newObj = obj;

newObj.age = 22
console.log(newObj)

let num = 255
console.log(num)
console.log(num.toString(16))
console.log(String(num))
console.log(.1.toString(2))

let num1 = 123.8846612
console.log(num1.toFixed(4))

console.log(parseInt("61684px"))

let arr = []
arr[5] = 'ARB'

console.log("Length: ", arr.length)

for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    console.log(ele)
}


let arr = [1, 2, 3];

let details = {
  fn: 'Aasutosh',
  ln: 'Baraiya',
  nn: 'ARB',
};

concatedArr = arr.concat(details)
console.log(concatedArr)
