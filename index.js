/**
 * 1-MASAALA:
 * let month = +prompt("Please enter a month number");
let result = "";
switch (month) {
  case 1:
    result = "January";
    break;

  case 2:
    result = "February";
    break;

  case 3:
    result = "March";
    break;

  case 4:
    result = "April";
    break;

  case 5:
    result = "May";
    break;

  case 6:
    result = "June";
    break;

  case 7:
    result = "July";
    break;

  case 8:
    result = "August";
    break;

  case 9:
    result = "September";
    break;
  case 10:
    result = "November";
    break;
  case 11:
    result = "October ";
    break;
  case 12:
    result = "December";
    break;

  default:
    result = "Invalid data format,Please try again";
    break;
}

document.write(result);
2-MASALA;
let month = +prompt("Please enter a month number");
let result = "";
switch (month) {
  case 1:
    result = "It is winter";
    break;

  case 2:
    result = "It is winter";
    break;

  case 3:
    result = "It is Spring";
    break;

  case 4:
    result = "It is Spring";
    break;

  case 5:
    result = "It is Spring";
    break;

  case 6:
    result = "It is Spring";
    break;

  case 7:
    result = "It is Spring";
    break;

  case 8:
    result = "It is Spring";
    break;

  case 9:
    result = "It is Autumn";
    break;
  case 10:
    result = "It is Autumn";
    break;
  case 11:
    result = "It is Autumn ";
    break;
  case 12:
    result = "Winter";
    break;

  default:
    result = "Invalid data format,Please try again";
    break;
}

document.write(result);
 3-masala:
 let number = +prompt("Enter a number");

for (let i = 2; i < number; i++) {
  let tub = true;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      tub = false;
      break;
    }
  }

  if (tub == true) {
    console.log(i);
  }
}
 4-masala:
 * 
 * 
 * 5-masala:
 * let n = +prompt("Enter a number");

for (let i = n; i >= 1; i--) {
  console.log(i);
}

6-masala:
let n = +prompt("Enter a number");
let result = 1;
for (let i = 1; i <= n; i++) {
  result = result * i;
}
console.log(result);

7-masala:



 */

// let n = +prompt("Enter a number");
// let result = 0;

// let b = 0;
// let o = 0;
// let y = 0;
// let m = 0;
// let on = 0;
// let ym = 0;
// let mm = 0;

// for (let i = 1; i <= n; i++) {
//   b = Math.floor(n / 10);
//   y = Math.floor(n / 100);
//   m = Math.floor(n / 1000);
//   on = Math.floor(n / 10000);
//   ym = Math.floor(n / 100000);
//   mm = Math.floor(n / 1000000);
//   result = result + b + y + o + m + on + ym + mm;
// }

console.log(result);

// Foydalanuvchidan raqamlarni kiritishni so'raymiz
var sonlar = prompt("Qator raqamlarni kiriting (masalan, 12345):");

// Kiritilgan qatorni raqamlarga ajratib olamiz
var raqamlar = sonlar.split("").map(Number);

// Raqamlarni yig'indisi uchun o'zgaruvchini e'lon qilamiz
var yigindi = 0;

// Raqamlarni yig'indisini hisoblaymiz
for (var i = 0; i < raqamlar.length; i++) {
  yigindi += raqamlar[i];
}

// Yig'indini ekranga chiqaramiz
console.log("Kiritilgan raqamlarning yig'indisi: " + yigindi);
