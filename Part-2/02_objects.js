// Singleton

// Objects literal

// Declaring symbol

const mySymbol = Symbol('mySymbol');

const myObject = {
    name: 'John',
    age: 30,
    city: 'New York',
    country: 'USA',
    [mySymbol]: 'This is my symbol', // Symbol is not iterable
    isMarried: false,
    
};


// To access the object properties, we can use dot notation or bracket notation.

// console.log(myObject.name); // John
// console.log(myObject.age); // 30
// console.log(myObject.city); // New York
// console.log(myObject.country); // USA
// console.log(myObject.isMarried); // false
// console.log(myObject[mySymbol]); // This is my symbol

let na = myObject['name']; // John

myObject['name'] = 'Doe'; // to change the value of the property
// Object.freeze(myObject); // to freeze the object

// console.log(myObject); // {name: "Doe", age: 30, city: "New York", country: "USA", isMarried: false, …}
myObject.getAge = function(){
    console.log(`My age is ${this.age}`);
}

// console.log(myObject.getAge()); // My age is 30


// Object Constructor

const tinderUser = new Object(); //or const tinderUser = {}; it is not sigleton object

tinderUser.Name = 'Utsav';
tinderUser.age = 20;
tinderUser.country = 'Nepal';
tinderUser.city = 'Kathmandu';
tinderUser.isMarried = false;
// console.log(tinderUser); // {Name: "Utsav", age: 20, country: "Nepal", city: "Kathmandu", isMarried: false}


const regularUser = {
    fullname : {
        firstName: 'John',
        lastName: 'Doe'
    },
    age: 30,
    country: 'USA',
}

// console.log(regularUser.fullname.firstName); // here we use ? operator to access the nested object property 

const obj1 = {1 : 'a', 2 : 'b', 3 : 'c'};
const obj2 = {4 : 'd', 5 : 'e', 6 : 'f'};



// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = {...obj1, ...obj2}; // spread operator

// console.log(obj3); // {1: "a", 2: "b", 3: "c", 4: "d", 5: "e", …}

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // ["Name", "age", "country", "city", "isMarried"]
// console.log(Object.values(tinderUser)); // ["Utsav", 20, "Nepal", "Kathmandu", false]
// console.log(Object.entries(tinderUser)); // [["Name", "Utsav"], ["age", 20], ["country", "Nepal"], ["city", "Kathmandu"], ["isMarried", false]] it will return array of array
// console.log(tinderUser.hasOwnProperty('is')); // ["Name", "age", "country", "city", "isMarried"]



// Object Destructuring

const course ={
    name: 'Javascript',
    duration: '2 months',
    price: '200$'
}

const {name, duration, price} = course;

console.log(`I am learning ${name} and it takes ${duration} and it costs ${price}`)



// APIS - Application Programming Interface (Apna Kam kisi or k sir pe de dena)

// {
//     "coursname": 'Javascript',
//     "instructor" : "Histesh"
// }

[
    {

    },
    {}
]

// JSON Formatter it is used to format the json data