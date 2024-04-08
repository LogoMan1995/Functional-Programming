// 15. Используйте some метод внутри checkPositive функции, чтобы проверить, является ли какой-либо элемент arr положительным. Функция должна возвращать логическое значение.



function checkPositive(arr){
    return arr.some(val => val > 0)
}


console.log(checkPositive([1, 2, 3, -4, 5]));

