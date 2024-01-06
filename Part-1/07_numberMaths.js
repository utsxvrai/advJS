const score = 100
console.log(score) // 101

const balance = new Number(100)
console.log(balance) 


console.log(balance.toString()) // it will convert number to string
console.log(balance.toFixed(2)) // 100.00 precision upto 2 decimal places

const num = 23.83894537
console.log(num.toPrecision(4)) // 23.24
console.log(num.toPrecision(2)) // 24

const num2 = 10000000
console.log(num2.toLocalString(en-IN)) // 1,00,00,000


const n = new Number.MAX_VALUE // 1.7976931348623157e+308
const k = new Number.MIN_VALUE // 5e-324



// Math Object
const h = Math.PI;
console.log(h) // 3.141592653589793

const i = Math.round(3.4)
console.log(i) // 3

const j = Math.round(3.5)
console.log(j) // 4

const f = Math.ceil(3.4)
console.log(k) // 4

const l = Math.floor(3.4)
console.log(l) // 3

const m = Math.floor(3.9)
console.log(m) // 3

const z = Math.floor(-3.9)
console.log(n) // -4

const o = Math.abs(-3.9)
console.log(o) // 3.9

const p = Math.sqrt(9)
console.log(p) // 3

const q = Math.pow(2, 3)
console.log(q) // 8

const r = Math.min(2, 3, 4, 5, 6, 7, 8, 9)
console.log(r) // 2

const s = Math.max(2, 3, 4, 5, 6, 7, 8, 9)
console.log(s) // 9

const t = Math.random()
console.log(t) // 0.123456789

const u = Math.floor(Math.random() * 10) + 1
console.log(u) // 7

const v = Math.floor(Math.random() * 10) + 1
console.log(v) // 10

const w = Math.floor(Math.random() * 10) + 1
console.log(w) // 8


const min = 1
const max = 10
const x = Math.floor(Math.random() * (max - min + 1)) + min 
//what it will do ? - it will generate random number between 1 to 10

console.log(x) // 7



