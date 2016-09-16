(function() {
    console.log(`scratch ${this}`);

    let a:any = 4;
    //a.notSure();        // no compiler check since we don't know

    let o:Object = 0b111;   // 0b1121 --> this is 3!
    //o.notSure();        // syntax error
    console.log(`o.toString: ${o.toString()}`);

    let vn:void = null;
    let vu:void = undefined;
    let v0:void = 0;        // syntax error, but runs
    console.log(`v0:void ==> ${v0}`);

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

    (function f2(shouldInitialize: boolean = true) {
        var x;
        console.log("x0: ", x);
        console.log(`x1: ${x}`);
        if (shouldInitialize) {
            var x = 10;
            console.log(`x1: ${x}`);
        }

        console.log(`x1: ${x}`);
        return x;
    })(true);

    {
        let blocked = 88;
    }
    console.log(`blocked: ${blocked}`);     // compile error, but works!

    if (true) {
        let ifblock = 99;
    }
    console.log(`blocked: ${ifblock}`);     // compile error, but works!

    console.log(`foo() 1: ${xx}, ${foo()}`);   // undefined; ${xx} syntax error, but capturing is ok.
    function foo() { return xx; }
    console.log(`foo() 2: ${foo()}`);   // undefined
    let xx = 101;
    console.log(`foo() 3: ${foo()}`);   // 101

    (function f(x) {            // compile error, but runs ok
        let x = 100; // error: interferes with parameter declaration
        console.log(`f(x): ${x}`);   // 100
    })(200);

    (function () {
        for (let i = 0; i < 2; i++) {
            for (let i = 0; i < 3; i++) {   // shadowing
                console.log("i: ", i);      // 0, 1, 2, 0, 1, 2 (six loops correctly)
            }
        }
    })();

    for (var j = 0; j < 3; j++) {
        setTimeout(function() {console.log("in closure A", j); }, 100);    // 3, 3, 3
    }
    for (let j = 0; j < 3; j++) {
        setTimeout(function() {console.log("in closure B", j); }, 100);    // 0, 1, 2
    }

})();
