// 1. В редакторе кода функции prepareTea и getTea уже определены. Вызовите getTea функцию, чтобы получить 40 чашек чая для команды, и сохраните их в tea4TeamFCC переменной.



const prepareTea = () => "greenTea";

const getTea = numOfCups => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

const tea4TeamFCC = getTea(40); 

console.log(tea4TeamFCC);

