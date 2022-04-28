// СОЗДАНИЕ МАССИВА
let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

// доступ осуществляется по индексу
newYearsResolutions[0] // Keep a journal

// также можно получить доступ к отдельным символам в строке
const hello = 'Hello World';
console.log(hello[6]); // Output: W

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

let listItem = famousSayings[0];
console.log(listItem); // Fortune favors the brave.
console.log(famousSayings[2]); // Where there is love there is life.
console.log(famousSayings[3]); // undefined

//######################################################################################################################

// ВЛОЖЕННЫЕ МАССИВЫ
const nestedArr = [[1], [2, 3]];
 
console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2

//######################################################################################################################

// ОБНОВЛЕНИЕ ДАННЫХ В МАССИВЕ
let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
 
seasons[3] = 'Autumn';
console.log(seasons); // Output: ['Winter', 'Spring', 'Summer', 'Autumn']

//######################################################################################################################

// let and const
/* Переменные, объявленные с помощью let, могут быть переназначены.
   Переменные, объявленные с const ключевым словом, не могут быть переназначены. 
   Однако элементы в массиве, объявленном с помощью, constостаются изменяемыми. 
   Это означает, что мы можем изменить содержимое const массива, но не можем переназначить новый массив или другое значение.
*/

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments); // [ 'Mayo', 'Mustard', 'Soy Sauce', 'Sriracha' ]
condiments = ['Mayo'];
console.log(condiments); // [ 'Mayo' ]

utensils[3] = 'Spoon';
console.log(utensils); // [ 'Fork', 'Knife', 'Chopsticks', 'Spoon' ]
utensils = []; // TypeError: Assignment to constant variable.

//######################################################################################################################

// .length
const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length); // 3

// .push()
// может принимать один аргумент или несколько аргументов, разделенных запятыми.
const itemTracker = ['item 0', 'item 1', 'item 2'];
 
itemTracker.push('item 3', 'item 4');
 
console.log(itemTracker); // Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];

// .pop()
// удаляет последний элемент массива
const newItemTracker = ['item 0', 'item 1', 'item 2'];
 
const removed = newItemTracker.pop();
 
console.log(newItemTracker); // Output: [ 'item 0', 'item 1' ]
console.log(removed); // Output: item 2

// .shift()
// удаляет первый элемент массива
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice'];
groceryList.shift(); // 'orange juice'
console.log(groceryList); // ['bananas', 'coffee beans', 'brown rice']

// .unshift()
// Метод unshift() добавляет один или более элементов в начало массива и возвращает новую длину массива.
const groceryLists = ['bananas', 'coffee beans', 'brown rice'];
groceryList.unshift('orange juice'); // 5
console.log(groceryLists); // ['orange juice', 'bananas', 'coffee beans', 'brown rice']

// .slice()
// Метод slice() возвращает новый массив, содержащий копию части исходного массива.
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]
console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]
console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]
console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]
console.log(animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

// .indexOf()
// Метод indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.
const array = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
console.log(array.indexOf('pasta')); // 4
console.log(array.indexOf('Hello World')); // -1

// .at()
let fruits = ["Apple", "Orange", "Plum"];
// то же самое, что и fruits[fruits.length-1]
alert( fruits.at(-1) ); // Plum


// для массивов возможен и другой вариант цикла, for..of:
let fruits = ["Яблоко", "Апельсин", "Слива"];

// проходит по значениям
for (let fruit of fruits) {
  alert( fruit );
}
// Цикл for..of не предоставляет доступа к номеру текущего элемента, 
// только к его значению, но в большинстве случаев этого достаточно. 

// forEach
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  alert(`${item} имеет позицию ${index} в ${array}`);
});