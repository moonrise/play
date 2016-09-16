(function() {
    console.log(`scratch ${this}`);

    let map = new Map([
        [1, 'one'],
        [2, 'two'],
        ["three", 3],
    ]);

    map.set(4, "four");
    console.log(`map has 4/5 [size:${map.size}]`, map.has(4), map.has(5));
    map.delete("three");
    console.log(`map has three/1 [size:${map.size}]`, map.has("three"), map.has(1));

    map.set("ten", 11);
    map.set("ten", 12);
    map.set("ten", 10);
    console.log(`map get("ten") [size:${map.size}]`, map.get("ten"));

    console.log("map", map);
    console.log("map.keys", map.keys());
    console.log("map.values", map.values());
    console.log("map.values.length", map.values().length);

    for (let x of map.values()) {       // iterator won't work in IDEA run (source generated, however)
        console.log("map value:", x);
    }

    for (let [k, v] of map) {
        console.log(`map: ${k}, ${v}`);
    }

    map.forEach( (v, k) => { console.log(`map for each: ${k}, ${v}`); });

    // let arr = [...map.keys()]; // [1, 2, 3]
    // console.log("array: ", arr);


    let _counter = new WeakMap();
    let _action = new WeakMap();
    class Countdown {
        constructor(counter, action) {
            _counter.set(this, counter);
            _action.set(this, action);
        }
        dec() {
            let counter = _counter.get(this);
            if (counter < 1) return;
            counter--;
            _counter.set(this, counter);
            if (counter === 0) {
                _action.get(this)();
            }
        }
    }

    let c = new Countdown(2, () => console.log('DONE'));
    c.dec();
    c.dec();


    let s = new Set([1, 2, 3, 3, 4, {}, {}, "x", "x", new String(), new String() ]);
    console.log("set: ", s);     // Set { 1, 2, 3, 4, {}, {}, 'x', [String: ''], [String: ''] }
    for (let x of s) {console.log(x)}       // worn' work again - siliently
    
    let ws = new WeakSet([{}, {}, new String(), new String() ]);
    console.log("weak set: ", ws);
})();
