// ИТЕРАТОРЫ

// .forEach()
// .forEach() будет выполнять один и тот же код для каждого элемента массива.
// Возвращаемое значение .forEach() всегда будет undefined.
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

// Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве.
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
fruits.forEach(iterate);

function iterate(el) {
  console.log(`I want to eat a ${el}`);
};
// равнозначно 
fruits.forEach((el) => {
  console.log(`I want to eat a ${el}`);
}); // стрелочная функция

//######################################################################################################################

// .map
// Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});
console.log(squareNumbers); // [ 1, 4, 9, 16, 25 ]

//**********************************************************************************************************************
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map((el) => el[0]); // Тело функции, состоящее из однострочного блока, не нуждается в фигурных скобках.
console.log(secretMessage.join('')); // HelloWorld

// равнозначно
const secretMessage2 = animals.map((el) => {
  return el[0];
});
console.log(secretMessage2.join('')); // HelloWorld

//######################################################################################################################

// .filter
// .filter() возвращает массив элементов после фильтрации определенных элементов из исходного массива. 
const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});
console.log(onlyNumbers); // [ 5, 3.14, 100 ]

//**********************************************************************************************************************
const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
 
const shortWords = words.filter((word) => { // стрелочная функция (argument) => { тело функции }
  return word.length < 6;
});

//######################################################################################################################

// .findIndex()
// Метод findIndex() возвращает индекс в массиве, если элемент удовлетворяет условию проверяющей функции. 
// В противном случае возвращается -1.
// Также смотрите метод find(), который возвращает значение найденного в массиве элемента вместо его индекса.

const jumbledNums = [123, 25, 78, 5, 9]; 
 
const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});
console.log(lessThanTen); // 3 - индекс первого найденного элемента в массиве удовлетворяющего условию

const animal = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animal.findIndex((word) => word === 'elephant');

const startsWithS = animal.findIndex((word) => word.startsWith('s'));

//######################################################################################################################

// .reduce()
// Метод reduce() применяет функцию reducer к каждому элементу массива (слева-направо), 
// возвращая одно результирующее значение.
const numbersA = [1, 2, 4, 10];
 
const summedNumsA = numbersA.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})
console.log(summedNumsA) // Output: 17

// также может принимать необязательный второй параметр для установки начального значения accumulator
const numbersB = [1, 2, 4, 10];
 
const summedNumsB = numbersB.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100)  // <- Second argument for .reduce()
console.log(summedNumsB); // Output: 117


const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);
/*
The value of accumulator:  10
The value of currentValue:  1
The value of accumulator:  11
The value of currentValue:  3
The value of accumulator:  14
The value of currentValue:  5
The value of accumulator:  19
The value of currentValue:  7
26
*/

//######################################################################################################################

// .some()
// Метод some() проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.

// .every()
// Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.

const wordss = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
// .some()
console.log(wordss.some((word) => {
  return word.length < 6; // true
}));

// .filter()
const interestingWords = wordss.filter((word) => word.length > 5);
// .every()
console.log(interestingWords.every((word) => word.length > 5)); // true
