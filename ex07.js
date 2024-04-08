// 7. Напишите свой собственный Array.prototype.myMap(), который должен вести себя точно так же Array.prototype.map(). Не следует использовать встроенный map метод. Доступ к экземпляру Array можно получить в myMap методе, используя this.



Array.prototype.myMap = function(callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
      newArray.push(callback(this[i], i, this));
    }
    return newArray;
  };




