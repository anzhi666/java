console.log('Решите равенство: (7 + 15) или (7 - 15) = ...');
const q = prompt('Введите число');

if (Number(q) === 22) {
    console.log('Успех');
} else if (Number(q) === -8) {
    console.log('Успех');
} else if (q === 'Я не робот') {
    console.log('Успех');
} else {
    console.log('Вы робот!');
}

console.log('Решите равенство: (7 + 15) или (7 - 15) = ...');
let a = prompt('Введите число');

switch (true) {
    case Number(a) === 22:
        console.log('Успех');
    break;
    case Number(a) === -8:
        console.log('Успех');
    break;
    case a === 'Я не робот':
        console.log('Успех');
    break;
    default:
        console.log('Вы робот!');
}