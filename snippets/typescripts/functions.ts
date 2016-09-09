function option(name: string, age?: number) {
    console.log(`option: ${name}, ${age}`)
}

function defaults(name: string, color: string="red") {
    console.log(`defaults: ${name}, ${color}`)
}

function deffun(name: string, color: string="red", age: number = (()=>100)()) {
    console.log(`deffun: ${name}, ${color}, ${age}`)
}

function rest(name: string, ...stars:any[]): void {
    console.log(`rest: ${name}, ${stars}`);
}


function foo(p:string):void;
function foo(p:number):void;
function foo(p:any):void {
    if (typeof p === 'string') {
        console.log(`foo got string p ${p}`);
    }
    else if (typeof p === "number") {
        console.log(`foo got number p ${p}`);
    }
}

option("john");
option("adam", 10);

defaults("john");
defaults("adam", "not red");

deffun("john");
deffun("adam", "not red");
deffun("scott", "blue", 11);

rest("john");
rest("adam", "not red");
rest("scott", "blue", 11);

foo("hello");
foo(123);
