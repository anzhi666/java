const userName = 'Вася';
const moneyUSD = 12000;
const persentMoney = 0.07;
const moneyHouse = 13500;
const period = 24;

const sumBank = moneyUSD * (1 + persentMoney / 12) ** period;
console.log(sumBank);


if (sumBank > moneyHouse) {
    console.log('Вася сможет купить дом')
    const remainder = sumBank - moneyHouse;
    console.log('Остаток: ' + remainder + '$');
}

else {
    console.log('Купить не можем');
}