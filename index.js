// EXAMPLE 1 - Convert Minutes to Hours and Minutes in JavaScript

function toHoursAndMinutes(totalMinutes) {
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);

  return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;
}

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

console.log(toHoursAndMinutes(90)); // 👉️ 01:30
console.log(toHoursAndMinutes(60)); // 👉️ 01:00
console.log(toHoursAndMinutes(115)); // 👉️ 01:55

// ------------------------------------------------------------------

// // EXAMPLE 2 - Convert Minutes to Hours and Minutes without formatting

// function toHoursAndMinutes(totalMinutes) {
//   const minutes = totalMinutes % 60;
//   const hours = Math.floor(totalMinutes / 60);

//   return {hours, minutes};
// }

// // 👇️ { hours: 1, minutes: 30 }
// console.log(toHoursAndMinutes(90));

// // 👇️ { hours: 1, minutes: 0 }
// console.log(toHoursAndMinutes(60));

// // 👇️ { hours: 1, minutes: 55 }
// console.log(toHoursAndMinutes(115));
