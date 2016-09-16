(function () {
    console.log("scratch " + this);
    var map = new Map([
        [1, 'one'],
        [2, 'two'],
        ["three", 3],
    ]);
    map.set(4, "four");
    console.log("map has 4/5 [size:" + map.size + "]", map.has(4), map.has(5));
    map.delete("three");
    console.log("map has three/1 [size:" + map.size + "]", map.has("three"), map.has(1));
    map.set("ten", 11);
    map.set("ten", 12);
    map.set("ten", 10);
    console.log("map get(\"ten\") [size:" + map.size + "]", map.get("ten"));
    console.log("map", map);
    console.log("map.keys", map.keys());
    console.log("map.values", map.values());
    console.log("map.values.length", map.values().length);
    for (var _i = 0, _a = map.values(); _i < _a.length; _i++) {
        var x_1 = _a[_i];
        console.log("map value:", x_1);
    }
    for (var _b = 0, map_1 = map; _b < map_1.length; _b++) {
        var _c = map_1[_b], k = _c[0], v_1 = _c[1];
        console.log("map: " + k + ", " + v_1);
    }
    map.forEach(function (v, k) { console.log("map for each: " + k + ", " + v); });
    // let arr = [...map.keys()]; // [1, 2, 3]
    // console.log("array: ", arr);
    var _counter = new WeakMap();
    var _action = new WeakMap();
    var Countdown = (function () {
        function Countdown(counter, action) {
            _counter.set(this, counter);
            _action.set(this, action);
        }
        Countdown.prototype.dec = function () {
            var counter = _counter.get(this);
            if (counter < 1)
                return;
            counter--;
            _counter.set(this, counter);
            if (counter === 0) {
                _action.get(this)();
            }
        };
        return Countdown;
    }());
    var c = new Countdown(2, function () { return console.log('DONE'); });
    c.dec();
    c.dec();
    var s = new Set([1, 2, 3, 3, 4, {}, {}, "x", "x", new String(), new String()]);
    console.log("set: ", s); // Set { 1, 2, 3, 4, {}, {}, 'x', [String: ''], [String: ''] }
    for (var _d = 0, s_1 = s; _d < s_1.length; _d++) {
        var x_2 = s_1[_d];
        console.log(x_2);
    } // worn' work again - siliently
    var ws = new WeakSet([{}, {}, new String(), new String()]);
    console.log("weak set: ", ws);
})();
//# sourceMappingURL=collection.js.map