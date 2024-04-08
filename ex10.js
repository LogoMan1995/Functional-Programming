// 10. Используйте concat метод в nonMutatingConcat функции для объединения attach в конец original. Функция должна возвращать объединенный массив.



function nonMutatingConcat(original, attach) {
  return original.concat(attach)
}

const first = [1, 2, 3];
const second = [4, 5];
console.log(nonMutatingConcat(first, second));


