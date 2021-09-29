let firstNum = '';
do {
    firstNum = +prompt('Введіть перше ціле число:');
} while (isNaN(firstNum) || firstNum % 1 !== 0 || firstNum.length === '');
console.log(firstNum);

let secondNum = '';
do {
    secondNum = +prompt('Введіть друге ціле число:');
} while (isNaN(secondNum) || secondNum % 1 !== 0  || secondNum === '');
console.log(secondNum);

if (firstNum > secondNum) {
    [firstNum, secondNum] = [secondNum, firstNum];
};

const missNumber = confirm('Чи потрібно пропускати парні числа?');

let sum = 0;
for(let i = firstNum; i <= secondNum; i++){
    if (missNumber === true && i % 2 === 0) {
        continue;
    } else {
        sum += i;
    };
};

alert(`Sum is ${sum}`)
console.log(sum);