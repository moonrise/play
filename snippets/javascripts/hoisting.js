//'use strict';

// var z hoisted to the top, so no references to z will cause ReferenceError runtime error
console.log("z0: ", z, typeof z);     // undefined
var z;
console.log("z1: ", z, typeof z);     // undefined
z = 1;
console.log("z2: ", z, typeof z);     // 1, number

(function () {
    console.log("f0: ", f);
    var f;
    console.log("f1: ", f);
    f = 1;
    console.log("f2: ", f);
})();

(function () {
    //console.log("g0: ", g); // runtime error (ReferenceError: g is not defined)
    g = 1;      // global 'g'; not hoisted without var keyword in a function scope
    console.log("g1: ", g);
})();

(function () {
    'use strict'
    //console.log("x0: ", x);   // won't work --> Reference Error (no hosting)
    let x = 1;
    console.log("x1: ", x);
})();

console.log("g, and z: ", g, z);
delete g;       // deleted since it is a global
delete z;       // no error, not deleted
console.log("z: ", z);

var a = 0, b = 0;
console.log("a and b: ", a, b);

var a, b = a = 9;
console.log("a and b: ", a, b);     // 9, 9

var x = y, y = 9;
console.log("x and y: ", x, y);     // undefined, 9

(function f(){
    var a = c = 1; // x is declared locally. y is not!
})();
console.log("a and c:", a, c); // 9, 1

(function () {
    for (var i = 0; i < 2; i++) {
        for (var i = 0; i < 3; i++) {
            console.log("i: ", i);      // 0, 1, 2 (three loops)
        }
    }
})();

(function (i) {
    for (i = 0; i < 2; i++) {
        for (i = 0; i < 3; i++) {
            console.log("i: ", i);      // 0, 1, 2 (three loops)
        }
    }
})(99);

