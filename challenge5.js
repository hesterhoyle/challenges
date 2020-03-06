// Hester Hoyle
// 5 - Create a function that reverses every other word in a string

// function reverseStr(str) {
//     x = str.split(" ");
//     for (i = 1 ; i < x.length ; i+=2) {
//         splitStr = x[i].split('');
//         revStr = splitStr.reverse();
//         newStr = revStr.join('');
//         spliced = x.splice(i, 1, newStr);
//         console.log(spliced);
//     } y = x.join(' ');
// }

// console.log(reverseStr("Hello my name is Hester"))


function reverseStr(str) {
    var arr = str.split(' ');
    for (i = 1 ; i < arr.length ; i+=2) {
        strArr = arr[i].split('');
        revArr = strArr.reverse();
        mkWord = revArr.join('');
        arr.splice(i, 1, mkWord);
    } console.log(arr.join(' '))
}

reverseStr("Hello my name is Hester")