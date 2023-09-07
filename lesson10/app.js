const bmwX3Price = 100000;
const fordFocusPrice = 10000;
const budget = 20000;

let message;
if(budget > 100000) {
     message = 'BMW';
} else if (budget > fordFocusPrice) {
     message = 'Focus';
} else {
     message = 'Велосипед';
}

10 > 0 ? console.log('Больше 0') : console.log('Не больше');


console.log(`Я хочу купить ${message}`);