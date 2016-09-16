(function () {
    console.log("scratch " + this);
    var input = [1, 2];
    var first = input[0], second = input[1];
    console.log("first, second: " + first + ", " + second); // outputs 1, 2
    _a = [first, second], second = _a[0], first = _a[1];
    console.log("first, second: " + first + ", " + second); // outputs 2, 1
    (function foo(_a) {
        var first = _a[0], second = _a[1];
        console.log("foo: first, second: " + first + ", " + second);
    })(input);
    var _b = [1, 2, 3, 4, 5], First = _b[0], rest = _b.slice(1);
    console.log("First, rest: " + First + ", " + rest);
    var _c = [1, 2, 3, 4, 5], F = _c[0], L = _c[4];
    console.log("F: " + F + ", " + L);
    var _d = [1, 2, 3, 4, 5], third = _d[2];
    console.log("third: " + third);
    var o = { a: "foo", b: 12, c: "bar" };
    var o2 = { a: "Foo", b: 112, c: "Bar" };
    var a = o.a, b = o.b;
    console.log("a, b: " + a + ", " + b);
    (a = o2.a, b = o2.b, o2); // need parenthesis around because {a, b} is not a JS block
    console.log("a, b: " + a + ", " + b);
    var A = o2.a, B = o2.b; // new name with type
    console.log("a, b: " + A + ", " + B);
    var _e = { x: 1, y: 2 }, x = _e.x, y = _e.y, _f = _e.z, z = _f === void 0 ? 0 : _f; // default
    console.log("x, y, z: " + x + ", " + y + ", " + z);
    function f(_a) {
        var _b = _a === void 0 ? { a: "bye", b: 123 } : _a, a = _b.a, b = _b.b;
        console.log("in function f: a, b: " + a + ", " + b);
    }
    ;
    f(o); // foo, 12
    f({ a: 'hello' }); // hello, undefined (notice the whole thing or nothing)
    f(); // bye, 123
    function g(_a) {
        var _b = _a === void 0 ? { a: "bye" } : _a, a = _b.a, _c = _b.b, b = _c === void 0 ? -1 : _c;
        console.log("in function g: a, b: " + a + ", " + b);
    }
    ;
    g({ a: 'hello' }); // hello, -1
    g(); // bye, -1
    function h(_a) {
        var _b = _a === void 0 ? { a: "bye", b: 123 } : _a, a = _b.a, _c = _b.b, b = _c === void 0 ? -1 : _c;
        console.log("in function h: a, b: " + a + ", " + b);
    }
    ;
    h({ a: 'hello' }); // hello, -1
    h(); // bye, 123
    var _a;
})();
//# sourceMappingURL=destructuring.js.map