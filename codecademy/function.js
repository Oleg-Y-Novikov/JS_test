// Функция обладает полным доступом к внешним переменным и может изменять их значение.
// Если одноимённая переменная объявляется внутри функции, тогда она перекрывает внешнюю. 
// Например, в коде ниже функция использует локальную переменную userName. Внешняя будет проигнорирована:

let userName = 'Вася';

function showMessage() {
  let userName = "Петя"; // объявляем локальную переменную

  let message = 'Привет, ' + userName; // Петя
  alert(message);
}
// функция создаст и будет использовать свою собственную локальную переменную userName
showMessage();

alert( userName ); // Вася, не изменилась, функция не трогала внешнюю переменную

//######################################################################################################################

// функия без аргументов
function sayThanks() {
  console.log('Thank you for your purchase! We appreciate your business.');
}
sayThanks();

//######################################################################################################################

// функция принимающая аргумент
function sayThanks(name) {
  console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}
sayThanks('Cole');

//######################################################################################################################

// функция с аргументом по умолчанию
function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`);
}
greeting('Nick'); // Output: Hello, Nick!
greeting(); // Output: Hello, stranger!

//######################################################################################################################

// return
// по умолчанию функция возвращает значение undefined
function rectangleArea(width, height) {
  let area = width * height;
}
console.log(rectangleArea(5, 7)) // Prints undefined

// Чтобы вернуть информацию из вызова функции, мы используем оператор return.
// Когда return оператор используется в теле функции, выполнение функции останавливается,
// а код, следующий за ним, выполняться не будет. Посмотрите на пример ниже:

function rectangleArea(width, height) {
  if (width < 0 || height < 0) {
    return 'You need positive integers to calculate area!';
  }
  return width * height;
}
// Если аргумент для width или height меньше 0, 
// то rectangleArea() будет возвращено 'You need positive integers to calculate area!'.
// Второй оператор return width * height не будет выполняться.

function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(count) {
  return count * 200;
}

const totalCost = costOfMonitors(monitorCount(5, 4));
console.log(totalCost);

//######################################################################################################################

// АНОНИМНЫЕ ФУНКЦИИ

const plantNeedsWater = function(day) {
  return day === 'Wednesday' ? true : false;
}
console.log(plantNeedsWater('Tuesday'));

// СТРЕЛОЧНЫЕ ФУНКЦИИ
/* Стрелочные функции устраняют необходимость вводить ключевое слово function каждый раз, 
   когда вам нужно создать функцию. Вместо этого вы сначала включаете параметры внутри, ( ) 
   а затем добавляете стрелку =>, указывающую на тело функции, окруженное { } следующим образом:
*/
const rectangleArea = (width, height) => {
  let area = width * height;
  return area;
};

// КРАТКИЕ ФУНКЦИИ
/* 1. Функции, которые принимают только один параметр, не должны заключать этот параметр в круглые скобки. 
      Однако, если функция принимает ноль или несколько параметров, круглые скобки обязательны.

      ZERO PARAMETERS
      const functionName = () => {};

      ONE PARAMETER
      const functionName = paramOne => {};

      TWO OR MORE PARAMETERS
      const functionName = (paramOne, paramTwo) => {};

   2. Тело функции, состоящее из однострочного блока, не нуждается в фигурных скобках. 
      Без фигурных скобок все, что оценивает эта строка, будет автоматически возвращено. 
      Содержимое блока должно следовать сразу за стрелкой =>, а return ключевое слово можно удалить. 
      Это называется неявным возвратом.

      SINGLE-LINE BLOCK
      const functionName = number => number + number;

      MULTI-LINE BLOCK
      const functionName = number => {
        const sum = number + number;
        return sum; # RETURN STATEMENT
      };
*/
