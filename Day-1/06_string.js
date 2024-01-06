const name = "Utsav"
const repoCount = 31

console.log(`my Name is ${name} and i have ${repoCount} repositories on github`)


const gameName = new String("PUBG")

console.log(gameName[0])

console.log(gameName.length) // 4
console.log(gameName.charAt(3)) // G
console.log(gameName.includes("U")) // false
console.log(gameName.toUpperCase()) // PUBG
console.log(gameName.toLowerCase()) // pubg
console.log(gameName.split("")) // ["P", "U", "B", "G"]   // splitter " " => ["PUBG"]

const tsr = gameName.substring(1,3)
console.log(tsr) // UB

const tsr2 = gameName.slice(-1, 2)
console.log(tsr2) // UB


const newStr = "      hi this is me Utsav    "
console.log(newStr) //       hi this is me Utsav
console.log(newStr.trim()) // hi this is me Utsav

const url = "https://www.utsav20%rai.com"

console.log(url.replace("20%" , "-")) // https://www.utsav21rai.com

const iss = url.includes("https") // true