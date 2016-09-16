(function() {
    console.log(`scratch ${this}`);

    let input:[number, number] = [1, 2];
    let [first, second] = input;
    console.log(`first, second: ${first}, ${second}`); // outputs 1, 2
    [second, first] = [first, second];
    console.log(`first, second: ${first}, ${second}`); // outputs 2, 1

    type fs = [number, number];
    (function foo([first, second]: fs) {
        console.log(`foo: first, second: ${first}, ${second}`);
    })(input);

    let [First, ...rest] = [1, 2, 3, 4, 5];
    console.log(`First, rest: ${First}, ${rest}`);

    let [F, , , , L] = [1, 2, 3, 4, 5];
    console.log(`F: ${F}, ${L}`);

    let [,,third] = [1, 2, 3, 4, 5];
    console.log(`third: ${third}`);


    let o = { a: "foo", b: 12, c: "bar" }
    let o2 = { a: "Foo", b: 112, c: "Bar" }
    let {a, b} = o;
    console.log(`a, b: ${a}, ${b}`);

    ({a, b} = o2);      // need parenthesis around because {a, b} is not a JS block
    console.log(`a, b: ${a}, ${b}`);

    let {a: A, b: B} : { a: string, b: number } = o2;    // new name with type
    console.log(`a, b: ${A}, ${B}`);

    let {x, y, z=0} = { x: 1, y: 2 };       // default
    console.log(`x, y, z: ${x}, ${y}, ${z}`);

    type C = {a: string, b?: number}
    function f({a, b}: C = {a: "bye", b: 123 }): void {
        console.log(`in function f: a, b: ${a}, ${b}`);
    };
    f(o);               // foo, 12
    f({a: 'hello'});    // hello, undefined (notice the whole thing or nothing)
    f();                // bye, 123

    function g({a, b = -1}: C = {a: "bye" }): void {
        console.log(`in function g: a, b: ${a}, ${b}`);
    };
    g({a: 'hello'});    // hello, -1
    g();                // bye, -1

    function h({a, b = -1}: C = {a: "bye", b: 123}): void {
        console.log(`in function h: a, b: ${a}, ${b}`);
    };
    h({a: 'hello'});    // hello, -1
    h();                // bye, 123
})();
