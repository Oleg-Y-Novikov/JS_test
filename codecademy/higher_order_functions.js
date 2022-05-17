// Функция высшего порядка — это функция, которая либо принимает функции в качестве параметров, 
// либо возвращает функцию, либо и то, и другое! 

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes; // Обратите внимание, как мы 
// checkThatTwoPlusTwoEqualsFourAMillionTimes без скобок присваиваем значение isTwoPlusTwo переменной. 
// Мы хотим присвоить значение самой функции, а не значение, которое она возвращает при вызове.
isTwoPlusTwo();
console.log(isTwoPlusTwo.name); // checkThatTwoPlusTwoEqualsFourAMillionTimes

//******************************************************************************************************* */
const higherOrderFunc = param => {
  param(); // вызов функции
  return `I just invoked ${param.name} as a callback function!`
}
 
const anotherFunc = () => {
  return 'I\'m being invoked by the higher-order function!';
}
 
higherOrderFunc(anotherFunc);

//********************************************************************************************************* */
// В этом примере мы вызвали функцию более высокого порядка higherOrderFunc() с анонимной функцией (функцией без имени), 
// которая считается до 10. Анонимные функции тоже могут быть аргументами!
higherOrderFunc(() => {
  for (let i = 0; i <= 10; i++){
    console.log(i);
  }
});

//********************************************************************************************************* */
const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
  let checkA = val + 2;
  let checkB = func(val);
  return checkA === checkB ? checkB : 'inconsistent results';
}

console.log(checkConsistentOutput(addTwo, 5)); // 7
