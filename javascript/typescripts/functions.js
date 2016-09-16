function option(name, age) {
    console.log("option: " + name + ", " + age);
}
function defaults(name, color) {
    if (color === void 0) { color = "red"; }
    console.log("defaults: " + name + ", " + color);
}
function deffun(name, color, age) {
    if (color === void 0) { color = "red"; }
    if (age === void 0) { age = (function () { return 100; })(); }
    console.log("deffun: " + name + ", " + color + ", " + age);
}
function rest(name) {
    var stars = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        stars[_i - 1] = arguments[_i];
    }
    console.log("rest: " + name + ", " + stars);
}
function foo(p) {
    if (typeof p === 'string') {
        console.log("foo got string p " + p);
    }
    else if (typeof p === "number") {
        console.log("foo got number p " + p);
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
//# sourceMappingURL=functions.js.map