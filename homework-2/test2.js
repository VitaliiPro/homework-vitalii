let firstNum = '';
do {
    firstNum = prompt('Введіть перше ціле число:');
} while (firstNum === NaN || firstNum === null || firstNum === '');
let firstInt = +firstNum;
console.log(firstNum);

let secondNum = '';
do {
    secondNum = prompt('Введіть друге ціле число:');
} while (secondNum === NaN || secondNum === null || secondNum === '');
console.log(secondNum);

const missNumber = confirm('Чи потрібно пропускати парні числа?');

let sum = 0;

    if (missNumber === true) {
        for (let i = firstNum; i <= secondNum; i++) {
            if (i % 2 != 0) {
                sum += +i;
            };
        };
    } else {
        for (let i = firstNum; i <= secondNum; i++) {
            sum += +i;
        };
    };

console.log(sum);