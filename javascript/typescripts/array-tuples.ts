let a1:string[] = ['here', 'are', 'strings'];
let a2:Array<string> = ['here', 'are', 'strings'];

let t1:[number, string] = [1, 'one'];
let t2:[number, string, boolean] = [1, 'one', true];

t2[2] = false;
t2[3] = 'more';

console.log(`a1 array: ${a1}`);
console.log(`a2 array: ${a2}`);
console.log(`tuple 1: ${t1}`);
console.log(`tuple 2: ${t2}`);
console.log(`tuple 2[2]: ${t2[2]}`);
