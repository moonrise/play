type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;

function getName(n: NameOrResolver): Name {
    // if (typeof n === Name) { } // syntax error

    if (typeof n === 'string') {
        console.log("type string passed in.")
        return n;
    }
    else {
        console.log("fall through.")
        return n();
    }
}

getName("me");


// ====== generic type alias 1
type Container<T> = { value: T };

var fiveContainer:Container<number> = { value: 5 };
console.log(`fiveContainer contains: ${fiveContainer.value}`);

var obj = { value: 10, x:1, y:2 }
var tenContainer:Container<number> = obj as Container<number>;
console.log(`tenContainer contains: ${tenContainer.value}`);

// ====== generic type alias 2
type Container2<T> = { value: T, self: Container2<T> };

var s2:Container2<string> = { value: "hi", self: { value: "self", self: null } };
console.log(`self container: ${s2.value}, ${s2.self.value}`);


// ====== generic type alias 3

type LinkedList<T> = T & { next: LinkedList<T> };
(function() {
    interface Person {
        id: number;
    }
    
    var p:Person = {id: 1};
    var people: LinkedList<Person> = { id: 10, next: { id: 20, next: { id: 30, next: null } } };

    console.log(`linked list 1: ${people.id}`);
    console.log(`linked list 2: ${people.next.id}`);
    console.log(`linked list 3: ${people.next.next.id}`);
})();
