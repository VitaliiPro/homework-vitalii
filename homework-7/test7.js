const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

//#1

function getMyTaxes(salary) {
    return +(this.tax * salary).toFixed(2);
};

console.log(getMyTaxes.call(latvia, 1250));

//#2

function getMiddleTaxes() {
    return +(this.tax * this.middleSalary).toFixed(2);
};

console.log(getMiddleTaxes.call(ukraine));

//#3

function getTotalTaxes() {
    return +(this.tax * this.middleSalary * this.vacancies).toFixed(2);
};

console.log(getTotalTaxes.call(ukraine));

//#4 

function getMySalary() {
    const min = 1500;
    const max = 2000;
    const randomSalary = min - 0.5 + Math.random() * (max - min + 1);
    return {
         salary: +randomSalary.toFixed(2),
         taxes: +(this.tax * randomSalary).toFixed(2),
         profit: +(randomSalary - (this.tax * randomSalary)).toFixed(2)
    };
};

console.log(getMySalary.call(latvia));
setInterval(() => console.log(getMySalary.call(latvia)), 10000);
