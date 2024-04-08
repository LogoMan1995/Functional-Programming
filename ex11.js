// 11. Используйте sortметод в alphabeticalOrder функции для сортировки элементов arr в алфавитном порядке. Функция должна возвращать отсортированный массив.



function alphabeticalOrder(arr) {
  return arr.sort()
  }
  
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));


// 11.1 Отсортировать числа по порядку


function ascendingOrder (arr){
    return arr.sort(function (a,b){
      return a -b;
  });
  }
  
console.log(ascendingOrder([1, 5, 2, 3, 4]));
