// 2. Приготовьте 27 чашек зеленого чая и 13 чашек черного чая и храните их в переменных tea4GreenTeamFCC и tea4BlackTeamFCC соответственно. Обратите внимание, что getTea функция была изменена и теперь принимает функцию в качестве первого аргумента.



const prepareGreenTea = () => 'greenTea';

const prepareBlackTea = () => 'blackTea';

const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};


const tea4GreenTeamFCC =getTea(prepareGreenTea,27) ;
const tea4BlackTeamFCC =getTea(prepareBlackTea,13) ;


console.log(tea4GreenTeamFCC,tea4BlackTeamFCC);