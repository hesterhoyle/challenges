// Hester Hoyle
// Challenge 4
// 4 - You will set an array containing a number of colours for example [“red”,”blue”,”blue”,”red”]
// These represent coloured gloves in a drawer. Create a function called getPairs that takes in 
// this array and returns the number of possible pairs of gloves.
// (A pair is two gloves of the same colour)

// let gloveDraw = ["green", "red", "blue", "blue", "red"]
let gloveDraw = ["purple", "red", "blue", "blue", "red", "green", "yellow", "green", "red", "yellow", "red", "green"]

// let red = gloveDraw.filter(a => a == "red");
// redNum = Math.floor(red.length / 2);

// let count = 0;

// function getPairs() {
//     for (i = 0 ; i < gloveDraw.length ; i++) {
//         for (j = i+1 ; j < gloveDraw.length ; j++) {
//             if (gloveDraw[i] == gloveDraw[j]) {
//                 count = count + 1;
//                 gloveDraw.splice(i, 1);
//                 gloveDraw.splice((j-1), 1);
//                 console.log(gloveDraw)
//             }
//         }
//     } console.log (count)
// }

// getPairs();

// let count = 0
// function getPairs() {
//     for (i = 1 ; i < gloveDraw.length ; i++) {
//         if (gloveDraw[0] == gloveDraw[i]) {
//             count = count + 1;
//             gloveDraw.splice(0, 1);
//             gloveDraw.splice((i-1), 1);
//             console.log(gloveDraw);
//             getPairs();
//         }
//     } console.log(count);
// } 

let count = 0
function getPairs() {
    for (i = 0 ; i < gloveDraw.length ; i++) {
        for (j = i+1 ; j < gloveDraw.length ; j++) {
            if (gloveDraw[i] == gloveDraw[j]) {
                count = count + 1;
                gloveDraw.splice(i, 1);
                gloveDraw.splice((j-1), 1);
                console.log(gloveDraw);
                getPairs();
            }
        }
    }
}

getPairs();
console.log(count)