// Hester Hoyle
// Challenge 2
// 2 - Create a function that takes in an array of numbers (Ints) and a 
// target number. Check to see if any two numbers in the array can be added 
// together to make the target number. Return the indexes of these numbers

function checkSum(arr, targetNum) {
    additions = [];
    for (i = 0 ; i < arr.length ; i++) {
        for (j = i+1 ; j < arr.length ; j++) {
            if (arr[i] + arr[j] == targetNum) {
                additions.push(i);
                additions.push(j);
            }
        }
    } return additions;
}

console.log(checkSum([5, 21, 7, 103], 110));