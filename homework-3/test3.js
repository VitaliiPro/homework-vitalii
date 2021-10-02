//Function #1

const getMaxDigit = (number) => {
    if (number === 0){
        return 0;
    } else {
        return Math.max(number % 10, getMaxDigit(Math.floor(number / 10)));
    };
};

//Function #2

const degreeNumber = (number, degree) => {
    let baseNumber = number;
    for (let i = 1; i < degree; i++) {
        baseNumber *= number;
    };
    return baseNumber;
};

//Function #3

const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};

//Function #4

const nettoSalary = (salary) => {
    let result = salary - ((19.5 * salary) / 100);
    return result;
};

//Function #5

const getRandomNumber = (minNumber, maxNumber) => {
    let rand = minNumber + Math.random() * (maxNumber + 1 - minNumber);
    return Math.floor(rand);
};

//Function #6

const letterInWord = (letter, word) => {
    let count = 0;
    for(let i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() === letter.toLowerCase()) {
            count++;
        }; 
    };
    return count;
};

//Function #7

const convertCurrency = (currency) => {
    if (currency.includes('$')) {
        return parseInt(currency) * 25 + 'UAH'
    } else if (currency.includes('UAH')) {
        return parseInt(currency) / 25 + '$'
    } else {
        alert("Вибери '$' або 'UAH'");
        return 0;
    };
};

//Function #8

const getRandomPassword = (number = 8) => {
    let password = '';
    for (let i = 1; i <= number; i++) {
       password +=  Math.round(Math.random() * 9);
    }
    return password;
};

//Function #9

const deleteWord = (letter, word) => {
    let result = '';
    for(let i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() === letter.toLowerCase()) {
            continue;
        }; 
        result += word[i];
    };
    return result;
};

//Function #10

const isPalyndrom = (str) => {
    str = str.toLowerCase().replaceAll(" ", "");
    let strReverse = str.split('').reverse().join('');
    if (strReverse === str) {
        return 'yes';
    } 
    return 'no';
};

//Function #11

const deleteRepetLetters = (str) => {
    let newString = str.toLowerCase();
    let result = '';

    for(let i = 0; i < newString.length; i++) {
        if (newString.replaceAll(newString[i], "").length === newString.length - 1) {
            result += newString[i];
        };
    };
    return result;
};

console.log(`Function #1: ${getMaxDigit(1236)}`);
console.log(`Function #2: ${degreeNumber(11, 2)}`);
console.log(`Function #3: ${capitalizeFirstLetter('вЛАД')}`);
console.log(`Function #4: ${nettoSalary(1000)}`);
console.log(`Function #5: ${getRandomNumber(1, 10)}`);
console.log(`Function #6: ${letterInWord('а', 'Асталавіста')}`);
console.log(`Function #7: ${convertCurrency("2500UAH")}`);
console.log(`Function #8: ${getRandomPassword(4)}`);
console.log(`Function #9: ${deleteWord('a', 'blablabla')}`);
console.log(`Function #10: ${isPalyndrom('Я несу гусеня')}`);
console.log(`Function #11: ${deleteRepetLetters('Бісквіт був дуже ніжним')}`);
