// constanta
const kelvin = 293;

// преобразуем кельвины в градусы цельсия
let celsius = kelvin - 273;

// вычисляем фарингейты по формуле
let fahrenheit = celsius * (9/5) + 32;
// Math.floor() - округляет до целого числа в меньшую сторону
fahrenheit = Math.floor(fahrenheit);

// преобразуем цельсии в шкалу Ньютона
let newton = celsius * (33/100);
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
