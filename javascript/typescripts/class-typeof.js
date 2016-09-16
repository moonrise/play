var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function () {
    console.log("scratch " + this);
    var Animal = (function () {
        function Animal(theName) {
            this.name = theName;
        }
        return Animal;
    }());
    var Rhino = (function (_super) {
        __extends(Rhino, _super);
        function Rhino() {
            _super.call(this, "Rhino");
        }
        return Rhino;
    }(Animal));
    var Employee = (function () {
        function Employee(theName) {
            this.name = theName;
        }
        return Employee;
    }());
    var animal = new Animal("Goat");
    var rhino = new Rhino();
    var employee = new Employee("Bob");
    animal = rhino;
    animal = employee; // Error: Animal and Employee are not compatible
    var MyClass = (function () {
        function MyClass(y) {
            this.y = y;
        }
        Object.defineProperty(MyClass, "X", {
            get: function () {
                return MyClass._X;
            },
            set: function (x) {
                MyClass._X = x;
            },
            enumerable: true,
            configurable: true
        });
        MyClass._X = -1;
        return MyClass;
    }());
    var mc = new MyClass(10);
    console.log("X, y: " + MyClass.X + ", " + mc.y);
    var Greeter = (function () {
        function Greeter() {
        }
        Greeter.prototype.greet = function () {
            if (this.greeting) {
                return "Hello, " + this.greeting;
            }
            else {
                return Greeter.standardGreeting;
            }
        };
        Greeter.standardGreeting = "Hello, there";
        return Greeter;
    }());
    var greeter1;
    greeter1 = new Greeter();
    console.log(greeter1.greet());
    var greeterMaker = Greeter;
    greeterMaker.standardGreeting = "Hey there!";
    var greeter2 = new greeterMaker();
    console.log(greeter2.greet());
})();
//# sourceMappingURL=class-typeof.js.map