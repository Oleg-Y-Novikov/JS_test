let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;
let runnerAge = 18;

if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
}

if (runnerAge > 18 && registeredEarly) {
  console.log(`Вы (участник под номером ${raceNumber}) участвуете в гонке в 9:30`);
} else if (runnerAge > 18 && !registeredEarly) {
  console.log(`Вы (участник под номером ${raceNumber}) участвуете в гонке в 11:00`);
} else if (runnerAge < 18) {
  console.log(`Вы (участник под номером ${raceNumber}) участвуете в гонке в 12:30`);
} else {
  console.log(`Вы (участник под номером ${raceNumber}) пройдите на стойку регистрации`);
}
