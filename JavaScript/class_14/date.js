//dates methods
let currentDate = new Date();
console.log(currentDate);//2026-01-02T05:32:23.173Z

let year = currentDate.getFullYear();
console.log(year);

let date = currentDate.getDate();
console.log(date);

let month = currentDate.getMonth();
console.log(month +1);// becouse it start with 0 index

console.log(year,date,month +1 );

let fullFormattedDate = `date: Day: ${date} Month: ${month+1} Year: ${year} `;
console.log(fullFormattedDate);

const oldDate = new Date(2024, 0, 1);
console.log(oldDate);


let dates = new Date("2020-05-17");
console.log(dates);
console.log(dates.getMonth()+1);

let mintus = currentDate.getMinutes();
let hours = currentDate.getHours();
let seconds = currentDate.getSeconds();
let miliseconds = currentDate.getMilliseconds();

