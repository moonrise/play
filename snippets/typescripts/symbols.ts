(function() {
    const sym1 = Symbol();        // ambient type Symbol not found, but compiles (verbatim) and runs ok
    const sym2 = Symbol("key"); // optional string key
    const sym3 = Symbol("key"); // optional string key
    console.log("smy1/2/3", sym1 !== sym2 !== sym3);    // true
    console.log(sym1, sym2, sym3);      // Symbol(), Symbol(key), Symbol(key)

    let obj = {
        x: 1,
        ["y"]:  2,
        [sym1]: 3       // not enumerable?
    }
    console.log("obj", obj, obj[sym1]);     // {x:1, y:2} 3

    const greeting:Symbol = Symbol('printGreeting');
    class C {
        [greeting](greet:string) { console.log(greeting, `greeting: ${greet}`); }
    }
    let myC = new C();
    myC[greeting]("hello");
})();
