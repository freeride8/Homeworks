/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */

const length = +gets();
const numbers = gets().split(' ').map(Number);
let counter = 0;

for (let i = 1; i < length - 1; i += 1) {
    if (numbers[i] > numbers[i - 1] && numbers[i] > numbers[i + 1]) {
        counter += 1;
    }
}

print(counter);