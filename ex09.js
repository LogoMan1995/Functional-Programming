// 9. Используйте slice метод в sliceArray функции, чтобы вернуть часть anim массива с учетом предоставленных beginSlice индексов endSlice. Функция должна возвращать массив.





function sliceArray(anim, beginSlice, endSlice) {
    return anim.slice(beginSlice, endSlice);
  }
let inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
console.log(sliceArray(inputAnim, 1, 3));