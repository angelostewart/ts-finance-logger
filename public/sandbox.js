"use strict";
// const character = 'luigi';
// console.log(character);
// const inputs = document.querySelectorAll('input');
// console.log(inputs);
// inputs.forEach(input => {
//     console.log(input);
// });
// let character = 'mario';
// let age = 30;
// let isBlackBelt = false;
// const circ = (diameter: number) => {
//     return diameter * Math.PI;
// }
// console.log(circ(7.5))
// arrays
let names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
// names.push(3);
let mixed = ['bob', 1337, 'steve', true];
mixed.push(12, 'dan');
console.log(mixed);
// objects
let character = {
    name: 'master chief',
    armor: 'red',
    age: 40
};
character.age = 50;
// explicit types
let sidekick;
let height;
let isLoggedIn;
// arrays
// can't use array methods unless the array has been initialized
let characterTraits = []; // correct 
characterTraits.push('mage');
let characters; // incorrect
// characters.push('Arbiter')
// union types
let mixedArr = [];
mixedArr.push('yo');
mixedArr.push(10);
mixed.push(false);
let uid;
uid = '123';
uid = 123;
// objects 
let characterOne;
characterOne = { name: 'one', age: 20 };
let characterTwo;
// any type
let age = 25;
age = '25';
age = true;
age = { number: 34, year: 1989 };
// functions
let greet;
greet = () => {
    console.log('hello world');
};
const add = (a, b, c) => {
    console.log(a + b);
};
add(10, 10);
const minus = (a, b) => {
    return a + b;
};
// result is inferred to be a number because it is equal to the return of minus
let result = minus(10, 7);
// explicitly declare the return type
const multiply = (a, b) => {
    return a * b;
};
// type alias
// without alias
const greetAgain = (user) => {
    user.name = 'bob';
    user.uid = 3455467;
    console.log(`${user.name} says hello, his UID is ${user.uid}`);
};
const greetAgainAlias = (user) => {
    user.name = 'bob';
    user.uid = 3455467;
    console.log(`${user.name} says hello, his UID is ${user.uid}`);
};
// function signatures 
let hello;
