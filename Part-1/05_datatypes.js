// types are classified into two categories on the basis of memory allocation
//  primitive datatypes (call by value)

// 1. Number
// 2. String
// 3. Boolean
// 4. null
// 5. undefined
// 6. symbol
// 7. BigInt


// javascript is a dynamically typed language

const num = 21
const numV = 21.9

let str ; // undefined
const id = Symbol('23')
const id2 = Symbol('23')
const n = 898932546325658623459n // n is used to denote BigInt

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
myFunction()

console.log(typeof null) // object

console.log(typeof array) // output : undefined

console.log(typeof myFunction) // function

console.log(typeof obj) // object

console.log(typeof n) // number



// **************Stack and Heap Memory***************


//  Stack Memory(Primitive Datatypes) | Heap Memory(Reference Datatypes)

//  Stack Memory is used to store the primitive datatypes and Heap Memory is used to store the reference datatypes

// Example :

// let a = 21 // Stack Memory
// let b = a // Stack Memory
// b = 22 // Stack Memory
// console.log(a) // Output : 21

// let a = [1,2,3,4] // Stack Memory
// let b = a // Stack Memory
// b.push(5) // Heap Memory
// console.log(a) // Output : [1,2,3,4,5]
