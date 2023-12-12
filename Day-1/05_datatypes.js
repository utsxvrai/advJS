//  primitive datatypes

// 1. Number
// 2. String
// 3. Boolean
// 4. null
// 5. undefined
// 6. symbol
// 7. BigInt


const num = 21
const numV = 21.9

let str ; // undefined
const id = Symbol('23')
const id2 = Symbol('23')
const n = 898932546325658623459

console.log(id === id2) // false


// Reference Type or non-primitive datatypes   

// 1. Object
// 2. Array
// 3. Function


const heros = ["Shaktiman" , "Hatim" , "Doga" , "Joker"]


const obj ={
    name : "Utsav",
    age : 21,
    isApproved : true,
    "is-Approved" : true
}

const myFunction = function() {
    console.log("I will become the best programmer in the world")
}

console.log(typeof null) // object

console.log(typeof array) // object

console.log(typeof myFunction) // function

console.log(typeof obj) // object

console.log(typeof n) // number