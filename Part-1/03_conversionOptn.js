score = "21aa"

console.log(typeof score) 
console.log(typeof(score))


// conversion of data types

let value = Number(score)

console.log(typeof value)  
console.log(value) // NaN

//typeof NaN is number
// "21" => 21
// "21abc" => NaN
// true => 1 


let isLoggedIn = 2;


let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true | 0 => false
// " " => false | "a" => true
// [] => false | [1,2,3] => true
// {} => false | {name: "Utsav"} => true


// ================ Operations =================
let v = 21
let negV = -v
console.log(negV) // -21


let str1 = "Hey "
let str2= "Ram"
let str3 = str1 + str2
console.log(str3)

console.log("1" + 2) //Output : 12

console.log(+true) // Output : 1

let gameCounter = 100;
++gameCounter;
console.log(gameCounter) // Output : 101

