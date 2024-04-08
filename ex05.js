// 5. Давайте обновим incrementer функцию, чтобы четко объявить ее зависимости.Напишите incrementer функцию так, чтобы она принимала аргумент, а затем возвращала результат после увеличения значения на единицу.

let fixedValue = 4;

function incrementer (value){
    return fixedValue + 1;
}

let differentValue = incrementer(fixedValue); 

console.log(fixedValue);
console.log(differentValue);