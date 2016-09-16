(function () {
    console.log("scratch " + this);
    var a = 4;
    //a.notSure();        // no compiler check since we don't know
    var o = 7; // 0b1121 --> this is 3!
    //o.notSure();        // syntax error
    console.log("o.toString: " + o.toString());
    var vn = null;
    var vu = undefined;
    var v0 = 0; // syntax error, but runs
    console.log("v0:void ==> " + v0);
    function f() {
        var a = 1;
        a = 2;
        var b = g();
        a = 3;
        return b + g();
        function g() {
            return a;
        }
    }
    console.log("2+3, or 3+3?", f()); // returns 5
    console.log("z0: ", z);
    var z;
    console.log("z0: ", z);
    z = 1;
    console.log("z0: ", z);
    (function f2(shouldInitialize) {
        if (shouldInitialize === void 0) { shouldInitialize = true; }
        var x;
        console.log("x0: ", x);
        console.log("x1: " + x);
        if (shouldInitialize) {
            var x = 10;
            console.log("x1: " + x);
        }
        console.log("x1: " + x);
        return x;
    })(true);
    {
        var blocked = 88;
    }
    console.log("blocked: " + blocked); // compile error, but works!
    if (true) {
        var ifblock = 99;
    }
    console.log("blocked: " + ifblock); // compile error, but works!
    console.log("foo() 1: " + xx + ", " + foo()); // undefined; ${xx} syntax error, but capturing is ok.
    function foo() { return xx; }
    console.log("foo() 2: " + foo()); // undefined
    var xx = 101;
    console.log("foo() 3: " + foo()); // 101
    (function f(x) {
        var x = 100; // error: interferes with parameter declaration
        console.log("f(x): " + x); // 100
    })(200);
    (function () {
        for (var i = 0; i < 2; i++) {
            for (var i_1 = 0; i_1 < 3; i_1++) {
                console.log("i: ", i_1); // 0, 1, 2, 0, 1, 2 (six loops correctly)
            }
        }
    })();
    for (var j = 0; j < 3; j++) {
        setTimeout(function () { console.log("in closure A", j); }, 100); // 3, 3, 3
    }
    var _loop_1 = function(j_1) {
        setTimeout(function () { console.log("in closure B", j_1); }, 100); // 0, 1, 2
    };
    for (var j_1 = 0; j_1 < 3; j_1++) {
        _loop_1(j_1);
    }
})();
//# sourceMappingURL=declaration.js.map