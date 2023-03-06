declare let names: string[];
declare let mixed: (string | number | boolean)[];
declare let character: {
    name: string;
    armor: string;
    age: number;
};
declare let sidekick: string;
declare let height: number;
declare let isLoggedIn: boolean;
declare let characterTraits: string[];
declare let characters: string[];
declare let mixedArr: (string | number | boolean)[];
declare let uid: string | number;
declare let characterOne: object;
declare let characterTwo: {
    name: 'two';
    age: 30;
};
declare let age: any;
declare let greet: Function;
declare const add: (a: number, b: number, c?: number) => void;
declare const minus: (a: number, b: number) => number;
declare let result: number;
declare const multiply: (a: number, b: number) => number;
declare const greetAgain: (user: {
    name: string;
    uid: string | number;
}) => void;
type StringOrNum = string | number;
type objWithName = {
    name: string;
    uid: StringOrNum;
};
declare const greetAgainAlias: (user: objWithName) => void;
declare let hello: any;
