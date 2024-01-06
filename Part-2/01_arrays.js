//array

const myArr = [1,2,3,4,5,6,7,8,9,10];  // array of numbers

// array of numbers it can be string or boolean or anything
// it is resizable
// it is iterable
// it is ordered
// it is indexed
// it is mutable
// it creates shallow copy means it will not copy the array it will just point to the array, so if you change the array it will change the original array


const myArr2 = new Array(1,2,3,4,5,6,7,8,9,10);  // array of numbers using constructor function of array
console.log(myArr2); // [1,2,3,4,5,6,7,8,9,10]

//Methods of array

// 1. push() - it will add the element at the end of the array
myArr.push(11);
console.log(myArr); // [1,2,3,4,5,6,7,8,9,10,11]

// 2. pop() - it will remove the element from the end of the array
myArr.pop();
console.log(myArr); // [1,2,3,4,5,6,7,8,9,10]

// 3. unshift() - it will add the element at the beginning of the array , it is not good practice to use unshift() because it will change the index of all the elements
myArr.unshift(0);
console.log(myArr); // [0,1,2,3,4,5,6,7,8,9,10]

// 4. shift() - it will remove the element from the beginning of the array , it is not good practice to use shift() because it will change the index of all the elements
myArr.shift();
console.log(myArr); // [1,2,3,4,5,6,7,8,9,10]

// 5. indexOf() - it will give you the index of the element
const index = myArr.indexOf(5);
console.log(index); // 4

// 6. splice() - it will remove the element from the array and it will return the removed element
myArr.splice(4, 1); // it will remove the element from index 4 and it will remove 1 element
console.log(myArr); //  it will return the removed element - 

// 7. reverse() - it will reverse the array
myArr.reverse();
console.log(myArr); // [10,9,8,7,6,4,3,2,1]

// 8. concat() - it will concat two arrays
const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,10];
const arr3 = arr1.concat(arr2);
console.log(arr3); // [1,2,3,4,5,6,7,8,9,10]

// 9. join() - it will join the array elements
const arr4 = arr3.join("-");
console.log(arr4); // 1-2-3-4-5-6-7-8-9-10

// 10. slice() - it will slice the array and return the section of the array
const arr5 = arr4.slice(4, 8); // it will slice the array from index 4 to 8 but it will not include the index 8
console.log(arr5); // 5-6-7-8   

// 11. forEach() - it will iterate over the array
arr5.forEach((element, index) => {
    console.log(element, index);
});
// 5 0
// 6 1
// 7 2
// 8 3

// 12. map() - it will iterate over the array and it will return the new array
const arr6 = arr5.map((element, index) => {
    return element + 1;
});

console.log(arr6); // [6,7,8,9]

// 13. filter() - it will filter the array and it will return the new array
const arr7 = arr6.filter((element, index) => {
    return element > 7;
});
console.log(arr7); // [8,9]

// 14. reduce() - it will reduce the array to single value
const arr8 = arr7.reduce((accumulator, element) => {
    return accumulator + element;
});

console.log(arr8); // 17

// 15. find() - it will find the element in the array
const arr9 = arr7.find((element) => {
    return element > 8;
});
