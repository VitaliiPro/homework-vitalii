let coffee = 15.678;
let meat = 123.965; 
let beer = 90.2345;

let maxPrice = Math.max(coffee, meat, beer);
let minPrice = Math.min(coffee, meat, beer);
console.log(minPrice);
console.log(maxPrice);

let sum = coffee + meat + beer;
console.log(sum);

let roundCoffe = Math.floor(coffee);
let roundMeat = Math.floor(meat);
let roundBeer = Math.floor(beer);

console.log(roundCoffe);
console.log(roundMeat);
console.log(roundBeer);

let roundSum = roundCoffe + roundMeat + roundBeer;
console.log(roundSum);

let sumHund = 0;
let remainder = sum % 100;
    if (remainder >= 50) {
        sumHund = sum - remainder + 100;
    } else {
        sumHund = sum - remainder;
    }
console.log(sumHund);

function isEven (number) {
if (number%2 == 0) {
    return true;
} else {
    return false;
}
};
let parity = isEven(roundSum);
console.log(parity);

 let payment = 500 - sum;
 console.log(payment);

 let averageValue = (sum / 3).toFixed(2);
 console.log(averageValue);

let discount = Math.floor(Math.random() * 101);
let discountPrice = (sum * (1 - discount/100)).toFixed(2);
let cost = ((sum / 2) - ((discount / 100) * sum)).toFixed(2);
console.log(sum);
console.log(discount);
console.log(discountPrice);
console.log(cost);

document.getElementById('min-price').innerHTML = 'Мінімальне Число: ' + minPrice;
document.getElementById('max-price').innerHTML = 'Максимальне Число: ' + maxPrice;
document.getElementById('sum').innerHTML = 'Сума товарів: ' + sum;
document.getElementById('round-sum').innerHTML = 'Сума без копійок: ' + roundSum;
document.getElementById('sum-hund').innerHTML = 'Округлення до сотих: ' + sumHund;
document.getElementById('parity').innerHTML = 'Перевірка на парність: ' + parity;
document.getElementById('payment').innerHTML = 'Здача з 500 грн: ' + payment;
document.getElementById('average-value').innerHTML = 'Середня ціна товарів: ' + averageValue;
document.getElementById('discount').innerHTML = 'Рандомна знижка: ' + discount;
document.getElementById('discount-price').innerHTML = 'Сума зі знижкою: ' + discountPrice;
document.getElementById('cost').innerHTML = 'Чистий прибуток: ' + cost;

