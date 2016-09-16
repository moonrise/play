(function() {
    //console.log(`scratch ${this}`);

    interface LabelledValue {
        label: string;
    }

    function printLabel(labelledObj: LabelledValue) {
        console.log(`printLabel : ${labelledObj.label}`);
    }
    function printLabel2(labelledObj: { label: string }) {
        console.log(`printLabel2: ${labelledObj.label}`);
    }

    let myObj = {size: 10, label: "Size 10 Object"};
    printLabel(myObj);      // OK
    printLabel2(myObj);     // OK
    printLabel( {size: 10, label: "Size 10 Object"} );      // syntax error, but runs ok
    printLabel2( {size: 10, label: "Size 10 Object"} );     // syntax error, but runs ok

    interface SquareConfig {
        color?: string;
        width: number;
        // [p: string]: any;        // takes the rest of whatever - almost no type checking!
    }

    function square(config: SquareConfig) {
        console.log(`square: ${config.color}, ${config.width}`);
    }
    square({color:"red", width:10});
    square({color:"red", width:10, colour:"blue"});     // syntax error, but runs ok
    var t3 = {color:"red", width:10, colour:"blue"};
    square(t3);     // OK
    var T3:SquareConfig = {color:"red", width:10, colour:"blue"};   // syntax error (object literal assignment)
    var T3x:SquareConfig = {color:"red", width:10, colour:"blue"} as SquareConfig;   // ok
    var T3y:SquareConfig = <SquareConfig>{color:"red", width:10, colour:"blue"};   // ok

    interface SearchFunc {
        (source: string, subString: string): boolean;
    }
    type SFT = (source:string, sub:string) => boolean;
    type SFT2 = SearchFunc;
    function search(src:string, sub:string) { return true; }
    let sf1 : SearchFunc = search;
    let sf2 : (source:string, sub:string) => boolean = search;
    let sf3 : SFT = search;
    let sf4 : SFT2 = search;


    interface StringArray {
        [index: number]: string;
    }
    let myArray: StringArray;
    myArray = ["Bob", "Fred"];
    let myStr: string = myArray[0];

    class Animal {
        name: string;
    }
    class Dog extends Animal {
        breed: string;
    }
    class SimpleStuff {
        name: string;
        0: string = "zero";
        1: number = 1;
    }

    interface ObjectLike {
        [n: number]: any;
        [p: string]: any;
    }

    let animal:ObjectLike = new SimpleStuff();
    animal["name"] = "pet";
    console.log(`animal["name"]: ${animal["name"]}`);
    console.log(`animal[0]: ${animal[0]}`);
    console.log(`animal[1]: ${animal[1]}`);
    console.log(`animal["0"]: ${animal["0"]}`);
    console.log(`animal["1"]: ${animal["1"]}`);

    class MoreStuff {
        constructor(animal: Animal) { this.animal = animal; }
        animal:Animal;
        0: Animal = new Dog();
        [n: number] : any;
        [p: string] : Animal;
    }

    interface MoreLike {
        [n: number]: Dog;
        [p: string]: Animal;
    }

    let moreLike:MoreLike = new MoreStuff(new Dog());
    moreLike["animal"]["name"] = "mydog";
    moreLike["animal"]["breed"] = "greyhound";
    console.log(`dog["animal"]["name"]: ${moreLike["animal"]["name"]}`);
    console.log(`dog["animal"]["breed"]: ${moreLike["animal"]["breed"]}`);
    console.log(moreLike[0]);

    interface ClockConstructor {
        new (hour: number, minute: number): ClockInterface;
    }
    interface ClockInterface {
        tick();
    }

    function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
        return new ctor(hour, minute);
    }

    class DigitalClock implements ClockInterface {
        constructor(h: number, m: number) { }
        tick() {
            console.log("beep beep");
        }
    }
    class AnalogClock implements ClockInterface {
        constructor(h: number, m: number) { }
        tick() {
            console.log("tick tock");
        }
    }

    createClock(DigitalClock, 12, 17).tick();
    createClock(AnalogClock, 7, 32).tick();


    class Control {
        private state: any;
        protected state2: any;
    }

    interface SelectableControl extends Control {
        select(): void;
    }

    class Button extends Control {
        select():void { }
    }

    class Button2 extends Control implements SelectableControl {
        select():void { }
    }

    class Button3 implements SelectableControl {
        //private state: any;   // can't do this
        //protected state: any; // can't do this
        select():void { }
    }

    class Button4 implements Control {  // can't do this
    }

    var sc1:SelectableControl = new Button();
    var sc2:SelectableControl = new Button2();
})();
