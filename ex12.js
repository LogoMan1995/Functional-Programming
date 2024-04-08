// 12. Используйте sort метод в nonMutatingSort функции для сортировки элементов массива в порядке возрастания. Функция должна возвращать новый массив, а не изменять globalArray переменную.



let globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  return [].concat(arr).sort(function(a, b) {
    return a - b;
  });
}

console.log(nonMutatingSort(globalArray));