console.log('labas');

let name = 'Jonas';
console.log(name);

name = '5';
console.log(name);

const lastname: string = 'Jonaitis';
const age: number = 99;
const isMarried: boolean = true;

console.log(lastname, age, isMarried);

const marks = [10, 2, 8, 4, 6];
const x = marks.join('');

const students: string[] = ['Jonas', 'Maryte'];
students.push('Petras', 'Ona');

function sum(a: number, b: number) {
    return a + b;
}
sum(7, 5);

function diff(a: number, b: number, convertToString: boolean): string | number {
    if (convertToString === true) {
        return '' + (a + b);
    } else {
        return a + b;
    }
}

const c = diff(7, 5, true);
const d = diff(7, 5, false);
console.log(c, d);

if(typeof c === 'string') {
    console.log('C skaitmenu turi:', c.length);
}
if(typeof d === 'string') {
    console.log('D skaitmenu turi:', d.length);
}

const mix = ['asd', 184];
const mix2: (number | string | boolean)[] = [45518, 'asd', 5148, 'ewrgs', true, false];

const mix3: number[] | string[] = ['fsd', 'wewr', 'der', '2514'];

const str = 'Labas rytas'.split('').map(x =>x.toUpperCase());
console.log(str);
