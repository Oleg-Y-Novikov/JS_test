// ЦИКЛЫ

// for
/* Цикл for содержит три выражения, разделенные ;скобками:

1. инициализация запускает цикл и может также использоваться для объявления переменной итератора.
2. условие остановки — это условие, по которому оценивается переменная итератора: если условие соответствует true 
   результату, блок кода будет запущен, а если он соответствует false— код остановится.
3. оператор итерации используется для обновления переменной итератора в каждом цикле.

Синтаксис for цикла выглядит следующим образом:
*/
for (let counter = 0; counter < 4; counter++) {
  console.log(counter); // 0 1 2 3
}

for (let counter = 3; counter >= 0; counter--) {
  console.log(counter);
}; // 3 2 1 0

//######################################################################################################################

// FOR ARRAY
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpots.length; i++) {
  console.log(`I would love to visit ${vacationSpots[i]}`);
}


// ВЛОЖЕННЫЙ ЦИКЛ for
// Одно из применений вложенного for цикла — сравнение элементов двух массивов. 
// Для каждого раунда внешнего for цикла внутренний for цикл будет выполняться полностью.

const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both loops have the number: ' + yourArray[j])
    }
  }
};

//**********************************************************************************************************************

let bobsFollowers = ['Jane', 'Sam', 'Joe', 'Stive'];
let tinasFollowers = ['Sam', 'Oleg', 'Joe'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
       mutualFollowers.push(bobsFollowers[i]);
    }
  }
}
console.log(mutualFollowers);

//######################################################################################################################

// ЦИКЛ WHILE
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}
//**************************************************************** */
const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard;
while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

// ЦИКЛ DO...WHILE
// цикл while и do...while отличается! В отличие от while цикла, do...while будет выполняться хотя бы один раз, 
// независимо от того, оценивается ли условие как true.
const firstMessage = 'I will print!';
const secondMessage = 'I will not print!'; 
 
// A do while with a stopping condition that evaluates to false
do {
 console.log(firstMessage)
} while (true === false);
 
// A while loop with a stopping condition that evaluates to false
while (true === false){
  console.log(secondMessage)
};

//*********************************************************************** */
let countString = '';
let i = 0;
 
do {
  countString = countString + i;
  i++;
} while (i < 5);
 
console.log(countString); // 01234

//*************************************************************************** */
let cupsOfSugarNeeded = 0;
let cupsAdded = 0;

do {
  cupsAdded++
  console.log(cupsAdded);
} while (cupsAdded < cupsOfSugarNeeded);
// 1

// break
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
  if (rapperArray[i] === "Notorious B.I.G.") {
    break;
  }
}
console.log("And if you don't know, now you know.");
// Lil' Kim
// Jay-Z
// Notorious B.I.G.
// And if you don't know, now you know.
