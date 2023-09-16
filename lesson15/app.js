function logName(name, surname) {
    console.log(`Мое имя ${name} ${surname}`);
};


logName('Андрей', 'Жижич');

function countDepositSum(depositInUSD, month, rate) {
    const sum = depositInUSD * (1 + rate / 12) ** month;
    return sum;
};

const example1 = countDepositSum(1000, 24, 0.12);
console.log(example1);

const example2 = countDepositSum(1000, 48, 0.10);
console.log(example2);

///////////////////////////////////////////////////

function powerOfTwo(num) {
    return num * num;
};
console.log(powerOfTwo(5));

const poft = function (num) {
    return num * num;
};
console.log(poft(6));

////////////////////////////////////////////////////

function powerOfTwo1(num) {
    console.log(num);
    return num * num;
};

console.log(powerOfTwo(5));

const poft1 = num => { 
    console.log(num);
    return num * num;
};

console.log(poft1(6));