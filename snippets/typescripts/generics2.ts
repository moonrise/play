(function() {
    console.log(`scratch ${this}`);

    function identity<T>(arg: T): T {
        return arg;
    }

    let myIdentity1: <T>(arg: T) => T = identity;       // function all signature
    console.log (`function call signature: ${myIdentity1((100))}`)

    let myIdentity2: {<T>(arg: T): T} = identity;       // object literal call signature
    console.log (`literal object call signature: ${myIdentity2((101))}`)

    interface IdentF { <T>(arg: T) : T };
    let myIdentity3: IdentF = identity;       // interface call signature
    console.log (`interface call signature: ${myIdentity3((102))}`)

    interface IdentG<T> { (arg: T) : T };
    let myIdentity4: IdentG<number> = identity;       // interface
    console.log (`interface: ${myIdentity4((103))}`)

    function find<T>(x: T, y: Array<T>) : boolean {
        for (let i of y) {
            if (i === x) return true;
        }
        return false;
    }

    console.log(`find 5 in [1,5]: ${find<number>(5, [1, 5])}`);
    console.log(`find false in [true]: ${find<boolean>(false, [true])}`);

    function build<T>(ctor: { new() : T }, init: T) : T {
        let t:T = new ctor();
        t = init;
        return t;
    }
    console.log(`String builder: ${build<String>(String, "initial value")}`);


    /////////////////////// proto type /////////////////////////
    class BeeKeeper {
        hasMask: boolean;
    }

    class ZooKeeper {
        nametag: string;
    }

    class Animal {
        numLegs: number;
        name: string;
    }

    class Bee extends Animal {
        keeper: BeeKeeper;
        age: number;
    }

    class Lion extends Animal {
        keeper: ZooKeeper;
        age: number;
    }

    function findKeeper<A extends Animal, K> (a: { prototype: {keeper: K, name: string, age: number}; new(): A }): K {
        return a.prototype.keeper;
    }

    // findKeeper(Lion).nametag;   // type checks! but undefined at runtime
    // findKeeper(Bee).hasMask;    // type checks! but undefined at runtime
})();
