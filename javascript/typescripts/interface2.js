var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function () {
    //console.log(`scratch ${this}`);
    function printLabel(labelledObj) {
        console.log("printLabel : " + labelledObj.label);
    }
    function printLabel2(labelledObj) {
        console.log("printLabel2: " + labelledObj.label);
    }
    var myObj = { size: 10, label: "Size 10 Object" };
    printLabel(myObj); // OK
    printLabel2(myObj); // OK
    printLabel({ size: 10, label: "Size 10 Object" }); // syntax error, but runs ok
    printLabel2({ size: 10, label: "Size 10 Object" }); // syntax error, but runs ok
    function square(config) {
        console.log("square: " + config.color + ", " + config.width);
    }
    square({ color: "red", width: 10 });
    square({ color: "red", width: 10, colour: "blue" }); // syntax error, but runs ok
    var t3 = { color: "red", width: 10, colour: "blue" };
    square(t3); // OK
    var T3 = { color: "red", width: 10, colour: "blue" }; // syntax error (object literal assignment)
    var T3x = { color: "red", width: 10, colour: "blue" }; // ok
    var T3y = { color: "red", width: 10, colour: "blue" }; // ok
    function search(src, sub) { return true; }
    var sf1 = search;
    var sf2 = search;
    var sf3 = search;
    var sf4 = search;
    var myArray;
    myArray = ["Bob", "Fred"];
    var myStr = myArray[0];
    var Animal = (function () {
        function Animal() {
        }
        return Animal;
    }());
    var Dog = (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            _super.apply(this, arguments);
        }
        return Dog;
    }(Animal));
    var SimpleStuff = (function () {
        function SimpleStuff() {
            this[0] = "zero";
            this[1] = 1;
        }
        return SimpleStuff;
    }());
    var animal = new SimpleStuff();
    animal["name"] = "pet";
    console.log("animal[\"name\"]: " + animal["name"]);
    console.log("animal[0]: " + animal[0]);
    console.log("animal[1]: " + animal[1]);
    console.log("animal[\"0\"]: " + animal["0"]);
    console.log("animal[\"1\"]: " + animal["1"]);
    var MoreStuff = (function () {
        function MoreStuff(animal) {
            this[0] = new Dog();
            this.animal = animal;
        }
        return MoreStuff;
    }());
    var moreLike = new MoreStuff(new Dog());
    moreLike["animal"]["name"] = "mydog";
    moreLike["animal"]["breed"] = "greyhound";
    console.log("dog[\"animal\"][\"name\"]: " + moreLike["animal"]["name"]);
    console.log("dog[\"animal\"][\"breed\"]: " + moreLike["animal"]["breed"]);
    console.log(moreLike[0]);
    function createClock(ctor, hour, minute) {
        return new ctor(hour, minute);
    }
    var DigitalClock = (function () {
        function DigitalClock(h, m) {
        }
        DigitalClock.prototype.tick = function () {
            console.log("beep beep");
        };
        return DigitalClock;
    }());
    var AnalogClock = (function () {
        function AnalogClock(h, m) {
        }
        AnalogClock.prototype.tick = function () {
            console.log("tick tock");
        };
        return AnalogClock;
    }());
    createClock(DigitalClock, 12, 17).tick();
    createClock(AnalogClock, 7, 32).tick();
    var Control = (function () {
        function Control() {
        }
        return Control;
    }());
    var Button = (function (_super) {
        __extends(Button, _super);
        function Button() {
            _super.apply(this, arguments);
        }
        Button.prototype.select = function () { };
        return Button;
    }(Control));
    var Button2 = (function (_super) {
        __extends(Button2, _super);
        function Button2() {
            _super.apply(this, arguments);
        }
        Button2.prototype.select = function () { };
        return Button2;
    }(Control));
    var Button3 = (function () {
        function Button3() {
        }
        //private state: any;   // can't do this
        //protected state: any; // can't do this
        Button3.prototype.select = function () { };
        return Button3;
    }());
    var Button4 = (function () {
        function Button4() {
        }
        return Button4;
    }());
    var sc1 = new Button();
    var sc2 = new Button2();
})();
//# sourceMappingURL=interface2.js.map