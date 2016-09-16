"use strict";
var GetSet_1 = require("./GetSet");
function boo(name, value) {
    var v = value;
    console.log(name + ": " + value);
    return v;
}
boo("number", 10);
boo("string", "hello");
var table = { id: 1, value: "table", extra: "more than enough" };
var item = new GetSet_1.default(table);
item.dump();
item.setItem({ id: 2, value: "good table" });
item.dump();
var NumberItem = (function () {
    function NumberItem(id, value) {
        this.id = id;
        this.value = value;
    }
    return NumberItem;
}());
new GetSet_1.default(new NumberItem(1, 100)).dump();
//# sourceMappingURL=generics.js.map