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

let mixed = ['bob', 1337, 'steve', true]
mixed.push(12, 'dan')

console.log(mixed)

// objects

let character = {
    name: 'master chief',
    armor: 'red',
    age: 40
};

character.age = 50;


// explicit types
let sidekick: string;
let height: number;
let isLoggedIn: boolean;

// arrays

// can't use array methods unless the array has been initialized

let characterTraits: string[] = []; // correct 
characterTraits.push('mage')

let characters: string[];   // incorrect
// characters.push('Arbiter')


// union types

let mixedArr: (string|number|boolean)[] = [];
mixedArr.push('yo');
mixedArr.push(10);
mixed.push(false)

let uid: string|number;

uid = '123';
uid = 123;


// objects 


let characterOne: object;
characterOne = {name: 'one', age: 20}

let characterTwo: {
    name: 'two',
    age: 30,
}