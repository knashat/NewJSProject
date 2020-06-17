//First problem

function printFullName(firstName, lastName) {
  console.log(firstName, lastName);
}

printFullName("Amr", "Elsekilly");

//Second problem
function ageToToday(day, month, year) {
  let birthday = new Date(year, month, day);
  let today = new Date();
  let ageMiliseconds = today - birthday;
  let ageSeconds = ageMiliseconds / 1000;
  let ageMinutes = ageSeconds / 60;
  let ageHours = ageMinutes / 60;
  let ageDays = ageHours / 24;
  let ageWeeks = ageDays / 7;
  let ageDay;
  let remainingDays;

  if (
    birthday.getMonth() > today.getMonth() &&
    birthday.getDate() > today.getDate()
  ) {
    ageYear = today.getFullYear() - birthday.getFullYear() - 1;
    ageMonth = today.getMonth() - birthday.getMonth() + 12;
  } else if (
    birthday.getMonth() === today.getMonth() &&
    birthday.getDate() > today.getDate()
  ) {
    ageYear = today.getFullYear() - birthday.getFullYear() - 1;
    ageMonth = today.getMonth() - birthday.getMonth();
  } else {
    ageYear = today.getFullYear() - birthday.getFullYear();
    ageMonth = today.getMonth() - birthday.getMonth() + 1;
  }

  //I should define months days with 30 or 31 days
  if (today.getDate() <= birthday.getDate()) {
    ageDay = today.getDate() + 30 - birthday.getDate();
  } else {
    ageDay = today.getDate() - birthday.getDate();
  }

  if (ageDay >= 7) {
    remainingDays = ageDay % 7;
    ageWeeks = Math.floor(ageWeeks);
  } else {
    remainingDays = ageDay;
    ageWeeks = Math.floor(ageWeeks);
  } // else doesn't work

  console.log(`Age:
${ageYear} years ${ageMonth} months ${ageDay} days
Or ${ageMonth} months ${ageDay} days
Or ${ageWeeks} weeks ${remainingDays} days
Or ${ageDay} days
Or ${ageHours.toFixed()} hours
Or ${ageMinutes.toFixed()} minutes
Or ${ageSeconds.toFixed()} seconds`);
}

ageToToday(24, 6, 1993);

//Third problem
function capitalizeString(string) {
  string = string.split(". ");
  let newSentence = string.map(capitalize);
  function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  /*let i;
  for (i = 0; i < string.length; i++) {
    string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
  }*/
  console.log(newSentence.join(". "));
}
capitalizeString("hello world!");
capitalizeString("hello world. it's a lovely day. i should go out");

//Fourth problem
function oddishOrEvenish(number) {
  number = number.toString();
  number = number.split("");
  let sumNumber = number.map(convertToNumber);
  function convertToNumber(num) {
    return parseInt(num, 10);
  }

  let sum = 0;
  sumNumber.forEach(total);
  function total(item) {
    sum += item / 2;
  }
  var integer = "";
  integer = integer + Number.isInteger(sum);
  if (integer === "true") {
    console.log("Evenish");
  } else if (integer === "false") {
    console.log("Oddish");
  }
}

oddishOrEvenish(34);
oddishOrEvenish(373);
oddishOrEvenish(4433);

//Fifth problem

function sevenBoom(array) {
  let found = array.find(findSeven);
  function findSeven(seven) {
    return seven === 7;
  }
  if (found === 7) {
    console.log("Boom!");
  } else {
    console.log("there is no 7 in the array");
  }

  /*
  let i;

  for (i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      console.log("Boom!");
    } else {
      let find = "there is no 7 in the array";
    }
  }
  console.log(find);*/
}
sevenBoom([1, 2, 3, 4, 5, 6, 7]);

sevenBoom([8, 6, 33, 100]);

sevenBoom([2, 55, 60, 97, 86]);

//Sixth problem
//I couldn't solve
function countIdenticalArrays(arr1, arr2, arr3, arr4) {
  let array = [arr1, arr2, arr3, arr4];
  /*let i;
  let arrayCount = [];
  for (i = 0; i < array.length; i++) {
    if (array.indexOf(array[i]) !== array.lastIndexOf(array[i])) {
      console.log(array[i]);
    }
  }
  console.log(arrayCount);
  */
  let arrayCount = [];
  let i;
  let k;
  for (i = 0; i < array.length; i++) {
    if (array[i] === array[i++]) {
      console.log(array[i]);
    }
  }
}

countIdenticalArrays(2, 1, 1, 1);

//Seventh problem
function getDays(firstDate, secondDate) {
  let diff = (secondDate - firstDate) / (1000 * 60 * 60 * 24);
  console.log(diff);
}

getDays(new Date("June 14, 2019"), new Date("June 20, 2019"));
getDays(new Date("December 29, 2018"), new Date("January 1, 2019"));
getDays(new Date("July 20, 2019"), new Date("July 30, 2019"));
