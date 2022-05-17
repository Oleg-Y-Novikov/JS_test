// ОБЛАСТЬ ВИДИМОСТИ //

// ГЛОБАЛЬНО!
// В глобальной области видимости переменные объявляются вне блоков. 
// Эти переменные называются глобальными переменными. 
// Поскольку глобальные переменные не связаны внутри блока, 
// к ним может обращаться любой код в программе, включая код в блоках.

const color = 'blue'; // глобально! вне блока
 
const returnSkyColor = () => {
  return color; // blue 
};
console.log(returnSkyColor()); // blue

//***************************************************

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

const callMyNightSky = () => 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
console.log(callMyNightSky()); // Night Sky: The Moon, North Star, and The Milky Way

//######################################################################################################################

// ЛОКАЛЬНО!
// область действия блока. Когда переменная определена внутри блока, 
// она доступна только для кода внутри фигурных скобок {}. 
// Мы говорим, что переменная имеет область действия блока , 
// потому что она доступна только для строк кода внутри этого блока.

// Переменные, объявленные с областью действия блока, называются локальными переменными , 
// поскольку они доступны только для кода, являющегося частью того же блока.

const logSkyColor = () => {
  let color = 'blue'; // ЛОКАЛЬНО! внутри блока
  console.log(color); // blue 
};
 
logSkyColor(); // blue 
console.log(color); // ReferenceError

//######################################################################################################################

const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  if (region === 'The Arctic') {
    let lightWaves = 'Northern Lights'; // создали новую локальную переменную lightWaves для блока if
    console.log(lightWaves);
  }
  console.log(lightWaves); // локальная переменная lightWaves функции осталась не изменной
};
logVisibleLightWaves();
// Northern Lights
// Moonlight
