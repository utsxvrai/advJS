score = "21aa"

console.log(typeof score) 
console.log(typeof(score))


// conversion of data types

let value = Number(score)

console.log(typeof value)
console.log(value) // NaN

// "21" => 21
// "21abc" => nan
// true => 1 


let isLoggedIn = 1;


let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)


// ================ Operations =================
let v = 21
let negV = -v



let str1 = "Hello "
let str2= "Chutiye"
let str3 = str1 + str2
console.log(str3)

console.log("1" + 2) //Output : 12

console.log(+true) // Output : 1

let gameCounter = 100;
++gameCounter;
console.log(gameCounter) // Output : 101

