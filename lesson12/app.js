const isAdmin = true;
const canWrite = true;

console.log(`Системный файл ${isAdmin && canWrite}`); // && = и 
console.log(`Обычный файл ${isAdmin || canWrite}`); // || = или 
console.log(`Инвертируем права админа ${!isAdmin}`); // ! - инвертация 

const isEdited = true;
const isSuperAdmin = true;

console.log(`Системный файл с редактированием ${
    isAdmin && canWrite && (!isEdited || isSuperAdmin)
}`);

a = prompt('Введите число');
if (Number(a) === -8 || Number(a) === 22) {
    console.log('Успех');
} else {
    console.log('Вы робот!');
}