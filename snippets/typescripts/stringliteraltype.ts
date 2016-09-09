(function() {
    type Easing = "ease-in" | "ease-out" | "ease-in-out";
    class UIElement {
        animate(dx: number, dy: number, easing: Easing) {
            if (easing === "ease-in") {
                // ...
            }
            else if (easing === "ease-out") {
            }
            else if (easing === "ease-in-out") {
            }
            else {
                // error! should not pass null or undefined.
            }
        }
    }

    let button = new UIElement();
    button.animate(0, 0, "ease-in");
    //button.animate(0, 0, "uneasy"); // error: "uneasy" is not allowed here

    function overloadMe(p: boolean):void;
    function overloadMe(p: number):void;
    function overloadMe(p: any):void {
        return p;
    }

    console.log(`overload Me: bool: ${overloadMe(true)}`);
    console.log(`overload Me: number: ${overloadMe(100)}`);
    console.log(`overload Me: string: ${overloadMe("hi")}`);     // syntax error, but runs

    function overloadYou(p: "a"):any;               // syntax error, but should not be!
    function overloadYou(p: "b"):string;            // syntax error, but should not be!
    function overloadYou(p: string):any {
        if ("b" == p) {
            return "bb";
        }
        return p;
    }

    console.log(`overload You: a: ${overloadYou("a")}`);
    console.log(`overload You: a: ${overloadYou("b")}`);
    console.log(`overload You: string: ${overloadYou("string")}`);  // syntax error, but runs

    function foo<T extends "foo">(f: (x: T) => T) {
        return f;
    }

    function bar<T extends "foo" | "bar">(f: (x: T) => T) {
        return f;
    }

    console.log(`typed foo: ${ foo<"foo">( x => x )("foo") }`);
    console.log(`typed foo: ${ foo<"foo" | "Foo">( x => x )("Foo") }`);       // syntax error, but runs

    console.log(`typed bar: ${ bar<"foo" | "bar">( x => x )("foo") }`);
    console.log(`typed bar: ${ bar<"foo" | "bar">( x => x )("bar") }`);
    console.log(`typed bar: ${ bar<"foo" | "bar">( x => x )("baz") }`);     // syntax error, but runs
}());
