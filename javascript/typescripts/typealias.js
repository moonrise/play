function getName(n) {
    // if (typeof n === Name) { } // syntax error
    if (typeof n === 'string') {
        console.log("type string passed in.");
        return n;
    }
    else {
        console.log("fall through.");
        return n();
    }
}
getName("me");
var fiveContainer = { value: 5 };
console.log("fiveContainer contains: " + fiveContainer.value);
var obj = { value: 10, x: 1, y: 2 };
var tenContainer = obj;
console.log("tenContainer contains: " + tenContainer.value);
var s2 = { value: "hi", self: { value: "self", self: null } };
console.log("self container: " + s2.value + ", " + s2.self.value);
(function () {
    var p = { id: 1 };
    var people = { id: 10, next: { id: 20, next: { id: 30, next: null } } };
    console.log("linked list 1: " + people.id);
    console.log("linked list 2: " + people.next.id);
    console.log("linked list 3: " + people.next.next.id);
})();
//# sourceMappingURL=typealias.js.map