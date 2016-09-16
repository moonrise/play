(function() {
    console.log(`scratch ${this}`);

    class Animal {
        private name: string;
        constructor(theName: string) { this.name = theName; }
    }

    class Rhino extends Animal {
        constructor() { super("Rhino"); }
    }

    class Employee {
        private name: string;
        constructor(theName: string) { this.name = theName; }
    }

    let animal = new Animal("Goat");
    let rhino = new Rhino();
    let employee = new Employee("Bob");

    animal = rhino;
    animal = employee; // Error: Animal and Employee are not compatible


    class MyClass {
        private static _X:number = -1;
        constructor(public y:number) {}

        public static get X() {     // static get/set
            return MyClass._X;
        }
        public static set X(x) {
            MyClass._X = x;
        }
    }

    let mc = new MyClass(10);
    console.log(`X, y: ${MyClass.X}, ${mc.y}`)


    class Greeter {
        static standardGreeting = "Hello, there";
        greeting: string;
        greet() {
            if (this.greeting) {
                return "Hello, " + this.greeting;
            }
            else {
                return Greeter.standardGreeting;
            }
        }
    }

    let greeter1: Greeter;
    greeter1 = new Greeter();
    console.log(greeter1.greet());

    let greeterMaker: typeof Greeter = Greeter;
    greeterMaker.standardGreeting = "Hey there!";

    let greeter2: Greeter = new greeterMaker();
    console.log(greeter2.greet());
})();
