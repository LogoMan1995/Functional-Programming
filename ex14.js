// 14. Используйте every метод внутри checkPositive функции, чтобы проверить, является ли каждый элемент arrположительным. Функция должна возвращать логическое значение.




function checkPositive(arr) {
 return arr.every(val => val > 0);
}

console.log(checkPositive([1, 2, 3, 4, 5]));