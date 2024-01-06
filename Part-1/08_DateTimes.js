// TC39 is proposal for new Date and Time API

const now = new Date();
console.log(now);

console.log(now.toString());  // Wed Jun 09 2021 12:03:04 GMT+0545 (Nepal Time)
console.log(now.toDateString()); // Wed Jun 09 2021
console.log(now.toTimeString()); // 12:03:04 GMT+0545 (Nepal Time)
console.log(now.toLocaleString()); // 6/9/2021, 12:03:04 PM
console.log(now.toLocaleDateString());  // 6/9/2021
console.log(now.toLocaleTimeString());  // 12:03:04 PM


const myCreatedDate = new Date(2023, 3 ,20, 12, 30, 30); // month starts from 0 
console.log(myCreatedDate.toDateString()); 

const myCreatedDate2 = new Date("02-12-2009");  // month-day-year format
console.log(myCreatedDate2.toLocaleDateString()); 


let myTime = Date.now(); // it will give you time in milliseconds
console.log(myTime); // 1623192780231
console.log(myDate.getTime()); // it will give you time in milliseconds and it is same as above
console.log(myDate.getFullYear()); // it means it will give you year
console.log(myDate.getMonth()); // it will give you month
console.log(myDate.getDate()); // it will give you date
console.log(myDate.getDay()); // it will give you day
console.log(myDate.getHours()); // it will give you hour

myTime.toLocaleString('default', { 
    month: 'long' , // June
    day: 'numeric', // 9
    year: 'numeric',    // 2021
    hour: 'numeric',    // 12
    minute: 'numeric',  // 03
});



