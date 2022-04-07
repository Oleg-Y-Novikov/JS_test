let athleteFinalPosition = 'first place';
switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}

//######################################################################################################################

//УСЛОВНЫЕ ОПЕРАТОРЫ ( if; else;  else if; switch case)

if (true) {
  console.log('This message will print!'); 
}
// Prints: This message will print!
//######################################################################################################################

let sale = true;
sale = false;

if (sale) {
  console.log('Time to buy!');
} else {
  console.log('Time to wait for a sale.')
}
//######################################################################################################################

let stopLight = 'yellow';
if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}
//######################################################################################################################

let groceryItem = 'papaya';
switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}
// Prints 'Papayas are $1.29'
/*Ключевое break слово говорит компьютеру выйти из блока и больше не выполнять код или проверять какие-либо другие 
  случаи внутри блока кода. Примечание. Без break ключевых слов будет выполняться первый совпадающий вариант, 
  а также каждый последующий вариант, независимо от того, совпадает он или нет, включая вариант по умолчанию.*/

//######################################################################################################################

// Операторы сравнения ( <, >, <=, >=, ===, !== )
// Вот список некоторых удобных операторов сравнения и их синтаксис:

// Меньше, чем: <
// Больше чем: >
// Меньше или равно: <=
// Больше или равно: >=
// Равно: ===
// Не равно: !==

let hungerLevel = 7;

if (hungerLevel > 7) {
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
}

//######################################################################################################################

// Логические операторы ( &&, ||, ! )

( true && true )
if (stopLight === 'green' && pedestrians === 0) {
  console.log('Go!');
} else {
  console.log('Stop');
}

//######################################################################################################################

if (day === 'Saturday' || day === 'Sunday') {
  console.log('Enjoy the weekend!');
} else {
  console.log('Do some work.');
}

// ( ! )
let excited = true;
console.log(!excited); // Prints false
 
let sleepy = false;
console.log(!sleepy); // Prints true

//######################################################################################################################

/*
значения являются ложными — или оцениваются false при проверке как условие? В список ложных значений входят:

- 0
- Пустые строки, такие как "" или ''
- null которые представляют, когда нет никакой ценности вообще
- undefined которые представляют, когда объявленная переменная не имеет значения
- NaN, или Не число
Вот пример с цифрами:
*/

let numberOfApples = 0;
 
if (numberOfApples){
   console.log('Let us eat apples!');
} else {
   console.log('No apples left!');
}
// Prints 'No apples left!'

//######################################################################################################################

let username = '';
let defaultName = username || 'Stranger';
console.log(defaultName); // Prints: Stranger

//######################################################################################################################

// Тернарный оператор
let isNightTime = true;
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');
