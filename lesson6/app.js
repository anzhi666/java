const age = '18';
console.log(Number(age) + 5);
console.log(age - 3);
const userName = 'Вася';
console.log(Number(userName) + 5);
console.log(typeof NaN);
console.log(String(4) + 7);
console.log(Boolean('') + 10);
console.log(true + 2);

const a = 2 + '10';
console.log(a - 10);

// false 

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(Number('sx')));

// if else 

const money = 10;
const canBay = money > 50;

if (canBay) {
    console.log('Может купить наш продукт');
} else if (money > 5) {
    console.log('Куплен mini продукт');  
}

else {
    console.log('Не хватает баланса');
}

console.log('Итог');