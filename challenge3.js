// Hester Hoyle
// Challenge 3
// 3 - Create a function called softwareUpdate that takes a string of a 
// version number and returns the next version. For example 1.3.2 becomes 
// 1.3.3 However only the first number can be greater then 10 so 1.4.9 
// becomes 1.5.0


function softwareUpdate(version) {
    arr = version.split(".");
    if (arr[2] < 9) {
        a = (Number(arr[2])) + 1;
        arr.splice(-1, 1, a);
        console.log(arr.join("."));
    } else if (arr[2] == 9 && arr[1] < 9) {
        b = (Number(arr[1])) + 1;
        arr.splice(-2, 2, b, 0);
        console.log(arr.join("."));
    } else if (arr[1] == 9 && arr[2] == 9) {
        c = (Number(arr[0])) + 1;
        arr.splice(0, 3, c, 0, 0);
        console.log(arr.join("."));
    }
}

softwareUpdate("10.8.9")