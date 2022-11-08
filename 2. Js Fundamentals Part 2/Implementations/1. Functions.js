
// ! 1. Activating strict mode

// Def : This mode helps to identify the type of error occurs in our code on the console of webpage

// 'use strict'

// let hasDriversLicense = false;
// const passTest = true;

// // Error lines to test strict mode (1. wrong variables) (2. reserved names variable)
// if (passTest) hasDriverLicense = true;
// // const interface ='Audio';
// // const private = 777;

// // if (passTest) hasDriversLicense = true;

// if (hasDriversLicense) console.log(`You can drive ;)`);



//! 2. Functions

function consolelogger() {
  
  console.log(`Allah Hu Akbar`);

}

// calling / running /invoking function
const undefine = consolelogger();
consolelogger();
console.log(undefine);


//? Parametrized Function

function juiceMachine(apples, oranges) {
  
  console.log(apples, oranges);

  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const juice = juiceMachine(2, 3);
console.log(juice);

//? Pre Defined Function

//converts the string to number
const numb = Number('77');
console.log(typeof (numb));



//? Declared with named

function calcDob(dob) {
  
  return 2022 - dob;
}
console.log(calcDob(1998));

//? Expression or Anonymous Function

const age = function (dob) {
  return 2021 - dob;
}
console.log(age(1998));


//? Arrow Functions

const age2 = dob => 2022 - dob;
console.log(age2(2000));

const retirementYearsLeft = (dob, firstName) => {
  const age = 2022 - dob;
  const yearleft = 65 - age;

  return `${firstName} has left ${yearleft} in his retirement`;
}
console.log(retirementYearsLeft(1998, 'Adnan'));


//? Calling Function into Function

function cutFruitsIntoPieces(fruite) {
  
  return fruite * 4;

}

function Juicer(apple, oranges) {

  const applesPieces = cutFruitsIntoPieces(apple);
  const orangesPieces = cutFruitsIntoPieces(oranges);
  const juice = `Juice with ${applesPieces} apples pieces and ${orangesPieces} oranges pieces.`;
  return juice; 
}

console.log(Juicer(4, 2)); 
