//#1

const getRandomArray = (length, min, max) => {
    const randomArr = [];
    for(let i = 0; i < length; i++) {
        const randomNumber = Math.floor(min + Math.random() * (max + 1 - min));
        randomArr.push(randomNumber);
    }
    return randomArr;
};

//#2

const getModa = (...numbers) => {
    const arr = numbers.filter(number => Number.isInteger(number));

    const obj = {};
    arr.forEach(number => {
        if (!obj[number]) {
            obj[number] = 1;
        } else {
            obj[number] += 1;
        }
    });

    let highestValue = 0;
    let highestValueKey = -Infinity;

    for (let key in obj) {
        const value = obj[key];
        if (value > highestValue) {
            highestValue = value;
            highestValueKey = key;
        }
    }

    return Number(highestValueKey);
};

//#3

const getAverage = (...numbers) => {
    const arr = numbers.filter(number => Number.isInteger(number));
    const sumNum = arr.reduce((sum, current) => sum + current);
    return +(sumNum / arr.length).toFixed(2);
};

//#4

const getMedian = (...numbers) => {
    const arr = numbers.filter(number => Number.isInteger(number)).sort((a, b) => a - b);
    const partOfTheArray = arr.length / 2;
    if (arr.length % 2) {
        return arr[Math.floor(partOfTheArray)];
    }
    return (arr[partOfTheArray] + arr[partOfTheArray - 1]) / 2;
};

//#5

const filterEvenNumbers = (...numbers) => numbers.filter(number => Number.isInteger(number) && (number % 2));

//#6 

const countPositiveNumbers = (...numbers) => numbers.filter(number => Number.isInteger(number) && (number > 0)).length;

//#7

const getDividedByFive = (...numbers) => numbers.filter(number => Number.isInteger(number) && (number % 5 === 0));

//#8 

const replaceBadWords = (string) => {
    let badWords = ['shit', 'fuck'];
    let clearString = string;
    for(let word of badWords){
        let badWord = '*'.repeat(word.length)
        clearString = clearString.split(word).join(badWord);
    }
    return clearString;
};

//#9

const divideByThree = (word) => {
    if (word.length < 3) {
        return word;
    }
    const wordLowCase = word.toLowerCase().replaceAll(" ", "");
    let arr = [];
    for (let i = 0; i < wordLowCase.length; i += 3) {
        let dividedWord = wordLowCase.slice(i, i + 3);
        arr.push(dividedWord);
    }
    return arr;
};


//#1 
console.log(getRandomArray(18, 1, 100));
//#2
console.log(getModa(6, 2, 55, 11, 78, 55, 77, 57, 87, 23, 2, 56, 3, 2));
//#3
console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
//#4
console.log(getMedian(1, 2, 3, 4, 5));
//#5
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));
//#6
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));
//#7
console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
//#8
console.log(replaceBadWords("Are you fucking kidding? Holy shit! It's bullshit!"));
//#9
console.log(divideByThree("Commander"));