// 1.

function calc(num1, num2, operator = '+') {
    
    if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
        return console.log('Ошибка! Введите число');
    } else if (operator === '+') {
        const sum = num1 + num2;
        return sum.toFixed(2);
    } else if (operator === '-') {
        const sum = num1 - num2;
        return sum.toFixed(2);
    } else if (operator === '*') {
        const sum = num1 * num2;
        return sum.toFixed(2);
    } else if (operator === '/') {
        const sum = num1 / num2;
        return sum.toFixed(2);
    } else {
        return console.log('Ошибка! Введите правильный оператор');
    }
}
    console.log(calc(1234, 1.47657, '/'));

// 2.
let b = 0;
function toogle() {
    b = b + 1;
    if (b%2 === 1) {
        return true
    } else {
        return false
    }
}
console.log(toogle());
console.log(toogle());
console.log(toogle());
console.log(toogle());
console.log(toogle());
console.log(toogle());

  
// 3.
let balance = 10;
let a = 0;
function account(numb) {
    if (typeof(numb) !== 'number') {
        return 'Ошибка! Введите число';
    }
    a = a + 1;
    balance = balance + numb;
    if (a%3 === 0) {
        balance = balance - ((balance + numb) * 10 / 100);
    }
    if (a%10 === 0) {
        balance = 0;
    }
    return balance.toFixed(2);
}
    console.log(account(-4));
    console.log(account(-4));
    console.log(account(-4));
    console.log(account(-4));
    console.log(account(-4));
    console.log(account(-4));
    console.log(account(-4));
    console.log(account(-4));
    console.log(account(-4));
    console.log(account(-4));

    

