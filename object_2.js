// this
// Ключевое слово this ссылается на вызывающий объект, который обеспечивает доступ к свойствам вызывающего объекта.
// В приведенном выше примере вызывающий объект — это goat и с помощью this мы получаем доступ к goat самому объекту, 
// а затем к dietType свойству goat с помощью точечной нотации свойства.
const goat = {
  dietType: 'herbivore', // dietType - это свойство объекта goat
  makeSound() {          // makeSound - это метод объекта goat
    console.log('baaa');
  },
  diet() {
    console.log(this.dietType); // this типо self используется для доступа к свойствам объекта
  }
};
goat.diet(); 
// Output: herbivore

//*********************************************************************************************************************/
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() { 
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
  }
};

console.log(robot.provideInfo()); // Output: I am 1E78V2 and my current energy level is 100.

//######################################################################################################################

// Стрелочные функции
// Стрелочные функции по своей сути связывают уже определенное this значение с самой функцией, 
// которая НЕ является вызывающим объектом. В приведенном ниже фрагменте кода значением this 
// является глобальный объект или объект, существующий в глобальной области, который не имеет dietType свойства 
// и поэтому возвращает значение undefined.
const goats = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet: () => {                // стрелочная функция!!!
    console.log(this.dietType); // можно вместо this использовать сам объект goats - тогда получим доступ к dietType: 'herbivore'
  }                             // console.log(goats.dietType); // Prints herbivore
};
 
goats.diet(); // Prints undefined

//######################################################################################################################

// Конфиденциальность
// Некоторые языки имеют встроенную конфиденциальность для объектов, но JavaScript не имеет этой функции
// JavaScript следуют соглашениям об именах, которые сигнализируют другим разработчикам, как взаимодействовать со свойством. 
// Одним из распространенных соглашений является размещение подчеркивания _перед именем свойства, что означает, 
// что свойство не должно быть изменено. Вот пример использования _для добавления свойства.

const bankAccount = {
  _amount: 1000
}
// В приведенном выше примере объект _amount не предназначен для прямого манипулирования.
// Тем не менее, все еще возможно переназначить _amount:

bankAccount._amount = 1000000;

//######################################################################################################################

// ГЕТТЕРЫ
// get
// - Геттеры могут выполнять действие над данными при получении свойства.
// - Геттеры могут возвращать разные значения, используя условные операторы.
// - В геттере мы можем получить доступ к свойствам вызывающего объекта, используя this.
// - Функциональность нашего кода легче понять другим разработчикам.
// - свойства не могут иметь то же имя, что и функция получения/установки. 
    //Одним из обходных путей является добавление подчеркивания перед именем свойства, как мы сделали в примере.
const robo = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel === 'number') {
      return `My current energy level is ${this._energyLevel}`;
    } else {
      return 'System malfunction: cannot retrieve energy level';
    }
  }
};

console.log(robo.energyLevel); // My current energy level is 100
robot._energyLevel = '50';
console.log(robo.energyLevel); // System malfunction: cannot retrieve energy level
console.log(robo._energyLevel); // 50


// СЕТТЕРЫ
const person = {
  _age: 37,
  set age(newAge){
    if (typeof newAge === 'number'){
      this._age = newAge;
    } else {
      console.log('You must assign a number to age');
    }
  }
};
person.age = 30; // используем сеттер для установки значения

//******************************************************************************************************************* */
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num) {
    if (typeof num === 'number' && num >= 0) {
      this._numOfSensors = num;
    } else {
      console.log('Pass in a number that is greater than or equal to 0');
    }
  }
};

robot.numOfSensors = 100;
console.log(robot.numOfSensors);

//######################################################################################################################

// Фабричная функция
// Фабричная функция - это функция, которая возвращает объект и может быть повторно использована 
// для создания нескольких экземпляров объекта. Заводские функции также могут иметь параметры, 
// позволяющие нам настраивать возвращаемый объект.
const monsterFactory = (name, age, energySource, catchPhrase) => {
  return { 
    name: name,
    age: age, 
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    } 
  }
};

const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'

// СОКРАЩЁННАЯ ЗАПИСЬ!
// В ES6 появилось несколько новых способов присвоения свойств переменным, известных как деструктуризация.
function robotFactory(model, mobile) {
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
};

//######################################################################################################################

// Деструктурированное назначение
// В деструктурированном присваивании мы создаем переменную с именем ключа объекта, заключенного в фигурные скобки { },
// и присваиваем ей объект. 
const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};

// обычное присваивание
const residence = vampire.residence; 
console.log(residence); // Prints 'Transylvania' 

// Деструктурированное назначение
const { residence } = vampire; 
console.log(residence); // Prints 'Transylvania'

const { day } = vampire.preferences; 
console.log(day); // Prints 'stay inside'

//******************************************************************************************************************* */

const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

const { functionality } = robot; // лежит 2 функции beep() и fireLaser()
functionality.beep(); // можно вызвать

// Встроенные методы объекта
const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys); // [ 'model', 'mobile', 'sentient', 'armor', 'energyLevel' ]

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot);

console.log(robotEntries); // [ [ 'model', 'SAL-1000' ],[ 'mobile', true ],[ 'sentient', false ],[ 'armor', 'Steel-plated' ],[ 'energyLevel', 75 ] ]

// Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);

console.log(newRobot); //  новый объект { laserBlaster: true, voiceRecognition: true, model: 'SAL-1000', mobile: true, sentient: false, armor: 'Steel-plated', energyLevel: 75 }

console.log(robot); // объект не изменился
