// 'use strict'


console.log("is this global? ", this === global);   // NO

function foo() {
    console.log("is foo/this global? ", this === global);
    console.log("");
}

function normal() {
    function foo() { return this; }
    var fooThis = foo();

    console.log("is normal/this global? ", this === global);
    console.log("is normal/foo/this global? ", fooThis === global);
    console.log("");
}

function strict() {
    'use strict'

    function foo() { return this; }
    var fooThis = foo();


    console.log("is strict/this undefined? ", this === undefined);
    console.log("is strict/foo/this undefined? ", fooThis === undefined);
    console.log("");
}


foo();
strict();
normal();

// syntax error, not runtime error
// var o = {x: 1, y: 2, x:3 };
// console.log("property x:", o.x);


// runtime errors follow

//var octalNumber = 011;    //"0nnn" no longer supported in strict mode
var octalNumber = 0o11;
console.log("octalNumber:", octalNumber);

// duplicate param names
//(function bar(x, x) { console.log("bar x:", x); })(1, 2);

// missing declaration
// glow = 100;
//console.log("glow:", glow);

// Assignment to a non-writable property
var obj1 = {};
Object.defineProperty(obj1, "x", { value: 42, writable: false });
//obj1.x = 9; // throws a TypeError

// Assignment to a getter-only property
var obj2 = { get x() { return 17; } };
//obj2.x = 5; // throws a TypeError

// Assignment to a new property on a non-extensible object
var fixed = {};
Object.preventExtensions(fixed);
//fixed.newProp = "ohai"; // throws a TypeError

//delete Object.prototype; // throws a TypeError

// primitive type properties not allowed
// false.true = 'ignored';
// (14).prop = 'ignored';
// "hello".prop = 'ignored';
new String("hello").prop = "ok";

var obj = { x: 1}
var x = 2;
// with (obj) { console.log("x:", x); }

// bleeding eval
var ex = eval("var x = 99; x")
console.log("x, ex:", x, ex);   // 99,99 in normal mode, but 2,99 in strict

var y = 1;
var ey = eval("'use strict'; var y = 10; y")
console.log("y, ey:", y, ey);   // 1,10 in both modes

//delete y; // syntax error (aborts runtime)

// Syntax error: can't use eval and argumetns as binding variables
// eval = 17;
// arguments++;

// arguments tracking parameters - not in strict mode
function f(a){
    a = 42;
    return [a, arguments[0]];
}
var pair = f(17);
console.log(pair[0], pair[1]);      // 42, 42 in normal, 17, 42 in strict

// no more arguments.callee;
// var f = function A()  { return arguments.callee; };
// console.log("callee:", f().name); // throws a TypeError

this.whoami = 'the root';
//var bar = () => this;
var bar = function () { return this; }
//console.log("bar/this:", bar());
//console.log("bar.call(undefined)/this:", bar.call(undefined));      // global in normal, undefined in strict
console.log("bar.call({})/this:", bar.call({}));
console.log("bar.call(1)/this:", bar.call(1));      // [Number 1] in normal, 1 in strict  ==> no boxing
console.log("bar.apply(2)/this:", bar.apply(2));      // [Number 2] in normal, 2 in strict  ==> no boxing
console.log("bar.bind(3)/this:", bar.bind(3)());      // [Number 3] in normal, 3 in strict  ==> no boxing
console.log("bar.bind(this)/this:", bar.bind(this)());

(function fun() {
    console.log('-------------------------')
    // console.log("caller:", fun.caller);      // not allowed in strict mode - security
    console.log('-------------------------')
    // console.log("args:", fun.arguments);     // not allowed in strict mode - security
})();

// reserved words
// var private = 0;
// console.log("private: ", private)

if (true) {
    function xyz() {        // syntax error in design time only - runs ok
        console.log("I'm a function in if block");
    }
    xyz();
}