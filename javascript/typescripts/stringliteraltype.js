(function () {
    var UIElement = (function () {
        function UIElement() {
        }
        UIElement.prototype.animate = function (dx, dy, easing) {
            if (easing === "ease-in") {
            }
            else if (easing === "ease-out") {
            }
            else if (easing === "ease-in-out") {
            }
            else {
            }
        };
        return UIElement;
    }());
    var button = new UIElement();
    button.animate(0, 0, "ease-in");
    function overloadMe(p) {
        return p;
    }
    console.log("overload Me: bool: " + overloadMe(true));
    console.log("overload Me: number: " + overloadMe(100));
    console.log("overload Me: string: " + overloadMe("hi")); // syntax error, but runs
    function overloadYou(p) {
        if ("b" == p) {
            return "bb";
        }
        return p;
    }
    console.log("overload You: a: " + overloadYou("a"));
    console.log("overload You: a: " + overloadYou("b"));
    console.log("overload You: string: " + overloadYou("string")); // syntax error, but runs
    function foo(f) {
        return f;
    }
    function bar(f) {
        return f;
    }
    console.log("typed foo: " + foo(function (x) { return x; })("foo"));
    console.log("typed foo: " + foo(function (x) { return x; })("Foo")); // syntax error, but runs
    console.log("typed bar: " + bar(function (x) { return x; })("foo"));
    console.log("typed bar: " + bar(function (x) { return x; })("bar"));
    console.log("typed bar: " + bar(function (x) { return x; })("baz")); // syntax error, but runs
}());
//# sourceMappingURL=stringliteraltype.js.map