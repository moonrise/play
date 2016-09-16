(function () {
    var sym1 = Symbol(); // ambient type Symbol not found, but compiles (verbatim) and runs ok
    var sym2 = Symbol("key"); // optional string key
    var sym3 = Symbol("key"); // optional string key
    console.log("smy1/2/3", sym1 !== sym2 !== sym3); // true
    console.log(sym1, sym2, sym3); // Symbol(), Symbol(key), Symbol(key)
    var obj = (_a = {
            x: 1
        },
        _a["y"] = 2,
        _a[sym1] = 3,
        _a
    );
    console.log("obj", obj, obj[sym1]); // {x:1, y:2} 3
    var greeting = Symbol('printGreeting');
    var C = (function () {
        function C() {
        }
        C.prototype[greeting] = function (greet) { console.log(greeting, "greeting: " + greet); };
        return C;
    }());
    var myC = new C();
    myC[greeting]("hello");
    var _a;
})();
//# sourceMappingURL=symbols.js.map