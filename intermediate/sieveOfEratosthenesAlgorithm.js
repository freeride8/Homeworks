/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */

let arr = [];
const number = +gets();

// arr = Array.from({
//     length: number + 1,
// }).fill(true);
// arr[0] = arr[1] = false;

// for (let i = 2; i * i <= number; i += 1) {
//     if (arr[i] === true) {
//         for (let counter = i * 2; counter <= arr.length; counter += i) {
//             arr[counter] = false;
//         }
//     }
// }

// for (let i = arr.length; i >= 0; i -= 1) {
//     if (arr[i] === true) {
//         print(i);
//         break;
//     }
// }
const isPrime = (value) => {
    for (let i = 2; i < value; i += 1) {
        if (value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

for (let i = number; i >= 0; i -= 1) {
    if(isPrime(i)) {
        print(i);
        break;
    }
}


