//https://github.com/lisakilker/lab-javascript-basic-algorithms

// 1

// function myLanguage(language) {
//  var text;
// //  var language = prompt('What language do you speak?');
//  switch(language) {
//   case 'Spanish':
//     text = 'Hola, Martin!';
//     break;
//   case 'French':
//     text = 'Salut, Martin!';
//     break;
//   case 'English':
//     text = 'Hello, Martin!';
//     break;
//   default:
//     text = 'I am not sure what you are trying to do, sorry!';
//   }
//   console.log(text)
//   // document.getElementById('Your language is: ').innerHTML = text;
// }
// myLanguage('Spanish')

// let language = 'French'

// if(language === 'Spanish') {
//   console.log('Hola, Martin!')
// } else if(language === 'French') {
//   console.log('Salut, Martin!')
// } else if(language === 'english') {
//   console.log('Hello, Martin!')
// } else {
//   console.log('I am not sure what you are trying to do, sorry!')
// }

// 2
// Count from 1 to 50. If number is divisible by 5, it should output IRON, and if number is divisible by 7 it should output HACK. If number is divisible by 5 and 7, it should output IRONHACK. In any other case, it should output number.

// Use for...of:

// Given the iterable let str='hello,dear.friend! nice,to.see you!', replace each dot and comma with space. The final output should be: hello dear friend! nice to see you!.


// Iteration 1: Names and Input
// 1.1 Create a variable `hacker1` with the driver's name.

// 1.2 Print `"The driver's name is XXXX"`.

// 1.3 Create a variable `hacker2` with the navigator's name.

// 1.4 Print `"The navigator's name is YYYY"`.

//1
let hacker1 = "Stefan"
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "Jimmy"
console.log(`The navigator's name is ${hacker2}`)

console.log(hacker1.length)

if (hacker1.length > hacker2.length) {
console.log(`${hacker1} is longer`)

} else if  (hacker1.length < hacker2.length) {
console.log(`${hacker2} is longer`)

} else {
console.log (`${hacker1} and ${hacker2} are the same`)
}

//2
let newHacker1 = "";

for (i = 0; i < hacker1.length; i++) {
  let results = hacker1[i].toUpperCase() + " ";
  newHacker1 += results;
}
console.log(newHacker1);

function reverseString(str) {
    var newHacker2 = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newHacker2 += str[i];
    }
    
    return newHacker2;
}
reverseString("Stefan");

//3
// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?


"Stefan".localeCompare('Jimmy')