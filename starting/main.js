const prompt = require('prompt-sync')({sigint: true});

const question = prompt('What is your name? ');
console.log(`Your name is ${question}`);

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
