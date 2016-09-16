var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Eggs = (function () {
    function Eggs() {
    }
    Eggs.prototype.layEggs = function () { console.log("laying eggs"); };
    ;
    return Eggs;
}());
var Sparrow = (function (_super) {
    __extends(Sparrow, _super);
    function Sparrow() {
        _super.apply(this, arguments);
    }
    Sparrow.prototype.fly = function () { console.log("flying..."); };
    ;
    return Sparrow;
}(Eggs));
var Salmon = (function (_super) {
    __extends(Salmon, _super);
    function Salmon() {
        _super.apply(this, arguments);
    }
    Salmon.prototype.swim = function () { console.log("swimming..."); };
    ;
    return Salmon;
}(Eggs));
// type guard
function isFish(you) {
    return you.swim !== undefined;
}
function whatDoYouDo(you) {
    // type guard
    if (isFish(you)) {
        you.swim();
    }
    else {
        you.fly();
    }
    return you;
}
function whoArtThou(you) {
    if (you instanceof Sparrow) {
        you.fly();
    }
    else {
        you.swim();
    }
}
function tellMe(you) {
    //if (number === typeof you) {   // this won't work
    if (typeof you === "number") {
        console.log("I'm a number: " + you);
    }
    else {
        console.log("I'm a string: " + you.toUpperCase());
    }
}
var bird = new Sparrow();
var fish = new Salmon();
whatDoYouDo(bird).layEggs();
whatDoYouDo(fish).layEggs();
whoArtThou(bird);
whoArtThou(fish);
tellMe(123);
tellMe("hello");
//# sourceMappingURL=union-typeguard.js.map