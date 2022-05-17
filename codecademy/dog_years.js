let myAge = 1;
let myAgeInDogYears;
if (myAge < 3) {
  myAgeInDogYears = myAge * 10.5;
} else {
  let earlyYears = 2;
  earlyYears *= 10.5;
  let laterYears = myAge - 2;
  laterYears *= 4;
  myAgeInDogYears = earlyYears + laterYears;
}
// toLowerCase() - перевод в нижний регистр
let myName = 'Oleg'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
