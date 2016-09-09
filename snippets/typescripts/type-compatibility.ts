(function() {
    let x = [0, 1, null];
    let nullNumber:number = null;       // number can be null? hmmm....
    console.log(`type x[0]: ${typeof x[0]}, type x[2]:${typeof x[2]}, nullNumber: ${nullNumber}`); // number, object, null

    let fx = (a: number) => 0;
    let fy = (b: number, s: string) => 0;

    fy = n => { console.log(`n: ${n}`); return n; }; // OK
    fy(100, "hello");       // n: 100; "hello" is discarded -- acceptable

    fx = (n, s) => { console.log(`n: ${n}, s: ${s}`)};    // Error, but runs
    fx(100);        // n: 100, s: undefined

    let rx = () => ({name: 'Alice'});
    let ry = () => ({name: 'Alice', location: 'Seattle'});

    rx = ry; // OK
    ry = rx; // Error because x() lacks a location property


    enum EventType { Mouse, Keyboard }

    interface Event { timestamp: number; }
    interface MouseEvent extends Event { x: number; y: number }
    interface KeyEvent extends Event { keyCode: number }

    function listenEvent(eventType: EventType, handler: (n: Event) => void) {
    }

    // Unsound, but useful and common
    listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.x + ',' + e.y));

    // Undesirable alternatives in presence of soundness
    listenEvent(EventType.Mouse, (e: Event) => console.log((<MouseEvent>e).x + ',' + (<MouseEvent>e).y));
    listenEvent(EventType.Mouse, <(e: Event) => void>((e: MouseEvent) => console.log(e.x + ',' + e.y)));

    // Still disallowed (clear error). Type safety enforced for wholly incompatible types
    listenEvent(EventType.Mouse, (e: number) => console.log(e))



    function invokeLater(args: any[], callback: (...args: any[]) => void) {
    }

    // Unsound - invokeLater "might" provide any number of arguments
    invokeLater([1, 2], (x, y) => console.log(x + ', ' + y));

    // Confusing (x and y are actually required) and undiscoverable
    invokeLater([1, 2], (x?, y?) => console.log(x + ', ' + y));



    enum Status { Ready, Waiting };
    enum Color { Red, Blue, Green };
    let status = Status.Ready;
    console.log(`type of enum status: ${typeof status}, ${Status[1]}`); // number, waiting
    status = Color.Red;  //error


    class Animal {
        feet: number;
        constructor(name: string, numFeet: number) { }
    }

    class Size {
        feet: number;
        constructor(numFeet: number) { }
    }

    let a: Animal;
    let s: Size;

    a = s;  //OK
    s = a;  //OK



    interface Empty<T> {}
    let ex: Empty<number>;
    let ey: Empty<string>;
    ex = ey;        // empty structure means no issues what so ever

    let identity = function<T>(x: T): T { let data:Array<T> = [x]; return data[0]; }
    let reverse = function<U>(y: U): U { return y; }
    identity = reverse;  // Okay because (x: any)=>any matches (y: any)=>any
})();
