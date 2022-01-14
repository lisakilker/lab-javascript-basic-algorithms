// 1
// For this activity, create a new variable called language . Then create a conditional that handles printing:

// Hola, Martin if language is equal to "spanish"
// Salut, Martin if language is equal to "french"
// Hello, Martin if language is equal to "english"
// I am not sure what are you trying to do, sorry! 🍺 if language is equal to anything else.
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

let language = 'French'

if(language === 'Spanish') {
  console.log('Hola, Martin!')
} else if(language === 'French') {
  console.log('Salut, Martin!')
} else if(language === 'english') {
  console.log('Hello, Martin!')
} else {
  console.log('I am not sure what you are trying to do, sorry!')
}

// 2
// Count from 1 to 50. If number is divisible by 5, it should output IRON, and if number is divisible by 7 it should output HACK. If number is divisible by 5 and 7, it should output IRONHACK. In any other case, it should output number.

// Use for...of:

// Given the iterable let str='hello,dear.friend! nice,to.see you!', replace each dot and comma with space. The final output should be: hello dear friend! nice to see you!.
