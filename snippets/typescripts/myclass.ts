abstract class BaseClass {
    protected abstract honoraryMethod();
}

class MyClass extends BaseClass {
    private id:number;
    protected where:string;

    protected static count:number = 0;

    constructor(public name:string, private secrete:string, protected shared:string) {
        super();
        this.id = ++MyClass.count;
    }

    dump() {
        console.log(`${this.id}/${MyClass.count} ${this.name}:${this.tag}, ${this.secrete}:${this.shared}, where:${this.where}`);
    }

    get tag() { return this.id*2; }

    set tle(where:string) { this.where = where; }

    protected honoraryMethod() {
    }
}

class YourClass extends MyClass {
    constructor(name:string, secrete:string, shared:string, private extra?:string) {
        super(name, secrete, shared);
    }

    dump() {
        super.dump();
        console.log(`YourClass extrea: ${this.extra}`);
    }
}

let j:MyClass = new MyClass("james", "dream", "beer");
let m:MyClass = new MyClass("marry", "dread", "story");
let y:MyClass = new YourClass("yours", "devil", "fire", "cream cheese");

m.tle = "Denver";

let OurClass = class extends MyClass {
    constructor(name) {
        super(name, "none", "all");
    }
}

j.dump();
m.dump();
y.dump();
new OurClass("ours").dump();
