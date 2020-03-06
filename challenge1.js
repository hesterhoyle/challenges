// Hester Hoyle
// Challenge 1
// 1 - Create a fruit machine function called Spin that returns three fruits.

let fruits = [
    "banana", "apple", "pear", "grapes", "orange", "lime"]

function spin() {
    spin1 = Math.floor(Math.random()*6);
    spin2 = Math.floor(Math.random()*6);
    spin3 = Math.floor(Math.random()*6);
    if (spin1 == spin2 && spin2 == spin3) {
        console.log(`${fruits[spin1]}, ${fruits[spin2]}, ${fruits[spin3]}`)
        console.log("Winner!")
    } else {
        console.log(`${fruits[spin1]}, ${fruits[spin2]}, ${fruits[spin3]}`)
        console.log("Try again")
    }
}

spin();