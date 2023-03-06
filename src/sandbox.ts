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
};

// any type

let age: any = 25;

age = '25';
age = true;
age = {number: 34, year: 1989};

// functions

let greet: Function;

greet = () => {
    console.log('hello world')
}

const add = (a: number, b: number, c?: number) => {
    console.log(a+b)
}

add(10, 10)

const minus = (a: number, b: number) => {
    return a + b;
}

// result is inferred to be a number because it is equal to the return of minus
let result = minus(10, 7)

// explicitly declare the return type
const multiply = (a: number, b: number): number => {
    return a * b;
}


// type alias


// without alias
const greetAgain = (user: { name: string, uid: string | number}) => {
    user.name = 'bob'
    user.uid = 3455467
    console.log(`${user.name} says hello, his UID is ${user.uid}`)
}


// with alias
type StringOrNum = string | number;
type objWithName = { name: string, uid: StringOrNum}

const greetAgainAlias = (user: objWithName) => {
    user.name = 'bob'
    user.uid = 3455467
    console.log(`${user.name} says hello, his UID is ${user.uid}`)
}

// function signatures 

// let hello: Function;

// example 1
let hello: (a: string, b: string) => void;

hello = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`)
    
}
 
// example 2 
let calc: (a: number, b: number, c: string) => number;

calc = (num1: number, num2: number, action: string) => {
    if (action === 'add') {
        return num1 + num2;
    } else {
        return num1 - num2;
    }
}


// example 3
let logDetails: (obj: {name: string, age: number}) => void;

type person = {name: string, age: number}

logDetails = (avatar: { name: string, age: number}) => {
    console.log(`${avatar.name} is ${avatar.age} years old`)
}

logDetails = (avatar: person) => {
    console.log(`${avatar.name} is ${avatar.age} years old`)
}







