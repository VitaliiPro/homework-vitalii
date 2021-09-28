let firstNum = '';
do {
    firstNum = +prompt('Введіть перше ціле число:');
} while (isNaN(firstNum) || firstNum % 1 !== 0 || firstNum == '');
console.log(firstNum);

let secondNum = '';
do {
    secondNum = +prompt('Введіть друге ціле число:');
} while (isNaN(secondNum) || secondNum % 1 !== 0  || secondNum == '');
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