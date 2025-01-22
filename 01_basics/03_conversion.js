let score = "33"

console.log(typeof(score))

let valueInNumber = Number(score);

console.log(typeof(valueInNumber))

let scores = "33abc"
console.log(scores)
let valueInNumbers = Number(scores);
//let valueInNumber = Number(score);
console.log(valueInNumbers)
console.log(typeof(valueInNumbers))

//NaN is also a type of datatype

let a = null
let b = undefined 
console.log(Number(a)) //0
console.log(Number(b)) //NaN
console.log(typeof(Number(a)));
console.log(typeof(Number(b)));


//"33" = 33
//"33abc" = NaN
//true = 1; false = 0


let isLoggedIn = "Sonali"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 = true ; 0 = false
// "" = false
// "sonali" = true


let someNumber = 33

let StringNumber = String(someNumber)
console.log(StringNumber)
console.log(typeof(StringNumber))