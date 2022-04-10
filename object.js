let spaceships = {}; // spaceships пустой объект

let fasterShip = {
  'Fuel Type': 'Turbo Fuel',
  color: 'silver'
};

// Доступ к свойствам
// 1. Через точку
let spaceship = {
  homePlanet: 'Earth',
  color: 'silver'
};
spaceship.homePlanet; // Returns 'Earth',
spaceship.color; // Returns 'silver',

// если мы попытаемся получить доступ к свойству, которое не существует в этом объекте, undefined будет возвращено.
spaceship.favoriteIcecream; // Returns undefined

let spaceshi = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

let crewCount = spaceshi.numCrew;
let planetArray = spaceshi.flightPath;

// Доступ к свойствам
// 2. Через []
let spaceShip = {
  'Fuel Type': 'Turbo Fuel',
  'Active Duty': true,
  homePlanet: 'Earth',
  numCrew: 5
};
spaceShip['Active Duty'];   // Returns true
spaceShip['Fuel Type'];   // Returns  'Turbo Fuel'
spaceShip['numCrew'];   // Returns 5
spaceShip['!!!!!!!!!!!!!!!'];   // Returns undefined

//######################################################################################################################

// ДОБАВЛЕНИЕ ИЗМЕНЕНИЕ И УДАЛЕНИЕ
const spaceshipp = {type: 'shuttle'};
spaceshipp = {type: 'alien'}; // TypeError: Assignment to constant variable.
spaceshipp.type = 'alien'; // Changes the value of the type property
spaceshipp.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'
spaceshipp['fuel'] = 100;

// delete
const spaces = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
  mission: 'Explore the universe' 
};
 
delete spaces.mission;  // Removes the mission property

//######################################################################################################################

// МЕТОДЫ
// Мы можем включать методы в литералы наших объектов, создавая обычные пары ключ-значение, разделенные запятыми. 
// Ключ служит именем нашего метода, а значение — выражением анонимной функции.

const alienship = {
  invade: function () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};

// С новым синтаксисом метода, представленным в ES6, мы можем опустить двоеточие и function ключевое слово.
const alienShip = {
  invade () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};
// Методы объекта вызываются путем добавления к имени объекта оператора точки, 
// за которым следует имя метода и круглые скобки:
alienShip.invade(); // Prints 'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'


let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
const alienShips = {
  retreat: function () { 
    console.log(retreatMessage);
  },
  takeOff: function () {
    console.log('Spim... Borp... Glix... Blastoff!');
  }
};

alienShips.retreat();
alienShips.takeOff();

//######################################################################################################################

let spacEship = {
  passengers: [
    {name: 'Oleg', age: 30}, 
    {name: 'Katy', age: 22}
  ],
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 
let capFave = spacEship.crew.captain['favorite foods'][0];
let firstPassenger = spacEship.passengers[0]; // { name: 'Oleg', age: 30 }

//######################################################################################################################

let spaceeship = {
  homePlanet : 'Earth',
  color : 'red'
};
let tryReassignment = obj => {
  obj = {
    identified : false, 
    'transport type' : 'flying'
  }
  console.log(obj) // создали новый объект!!! переменная spaceeship осталась не изменённой! Т.е мы не обращались к объекту 
  // на прямую... если так =>
  /*
  const spaceship = {
    homePlanet : 'Earth',
    color : 'silver'
  };
 
  let paintIt = obj => {
    obj.color = 'glorious gold' // => здесь мы конкретно меняем объект который передали в функцию
  };
 
  paintIt(spaceship);
 
  spaceship.color // Returns 'glorious gold'
  */
};
tryReassignment(spaceeship) // The attempt at reassignment does not work.
spaceship // Still returns {homePlanet : 'Earth', color : 'red'};
 
spaceeship = {
  identified : false, 
  'transport type': 'flying'
}; // Если так то spaceeship изменится!!!

//######################################################################################################################

// ИТЕРАЦИЯ ПО ОБЪЕКТУ
let spaceshipy = {
  crew: {
    captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
    },
    'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
    },
    medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } 
    },
    translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
    }
  }
}; 

for (let crewMember in spaceshipy.crew) {
console.log(`${crewMember}: ${spaceshipy.crew[crewMember].name}`);
};

for (let crewMember in spaceshipy.crew) {
console.log(`${spaceshipy.crew[crewMember].name}: ${spaceshipy.crew[crewMember].degree}`);
};
