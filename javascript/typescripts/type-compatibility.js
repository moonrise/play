(function () {
    var x = [0, 1, null];
    var nullNumber = null; // number can be null? hmmm....
    console.log("type x[0]: " + typeof x[0] + ", type x[2]:" + typeof x[2] + ", nullNumber: " + nullNumber); // number, object, null
    var fx = function (a) { return 0; };
    var fy = function (b, s) { return 0; };
    fy = function (n) { console.log("n: " + n); return n; }; // OK
    fy(100, "hello"); // n: 100; "hello" is discarded -- acceptable
    fx = function (n, s) { console.log("n: " + n + ", s: " + s); }; // Error, but runs
    fx(100); // n: 100, s: undefined
    var rx = function () { return ({ name: 'Alice' }); };
    var ry = function () { return ({ name: 'Alice', location: 'Seattle' }); };
    rx = ry; // OK
    ry = rx; // Error because x() lacks a location property
    var EventType;
    (function (EventType) {
        EventType[EventType["Mouse"] = 0] = "Mouse";
        EventType[EventType["Keyboard"] = 1] = "Keyboard";
    })(EventType || (EventType = {}));
    function listenEvent(eventType, handler) {
    }
    // Unsound, but useful and common
    listenEvent(EventType.Mouse, function (e) { return console.log(e.x + ',' + e.y); });
    // Undesirable alternatives in presence of soundness
    listenEvent(EventType.Mouse, function (e) { return console.log(e.x + ',' + e.y); });
    listenEvent(EventType.Mouse, (function (e) { return console.log(e.x + ',' + e.y); }));
    // Still disallowed (clear error). Type safety enforced for wholly incompatible types
    listenEvent(EventType.Mouse, function (e) { return console.log(e); });
    function invokeLater(args, callback) {
    }
    // Unsound - invokeLater "might" provide any number of arguments
    invokeLater([1, 2], function (x, y) { return console.log(x + ', ' + y); });
    // Confusing (x and y are actually required) and undiscoverable
    invokeLater([1, 2], function (x, y) { return console.log(x + ', ' + y); });
    var Status;
    (function (Status) {
        Status[Status["Ready"] = 0] = "Ready";
        Status[Status["Waiting"] = 1] = "Waiting";
    })(Status || (Status = {}));
    ;
    var Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Blue"] = 1] = "Blue";
        Color[Color["Green"] = 2] = "Green";
    })(Color || (Color = {}));
    ;
    var status = Status.Ready;
    console.log("type of enum status: " + typeof status + ", " + Status[1]); // number, waiting
    status = Color.Red; //error
    var Animal = (function () {
        function Animal(name, numFeet) {
        }
        return Animal;
    }());
    var Size = (function () {
        function Size(numFeet) {
        }
        return Size;
    }());
    var a;
    var s;
    a = s; //OK
    s = a; //OK
    var ex;
    var ey;
    ex = ey; // empty structure means no issues what so ever
    var identity = function (x) { var data = [x]; return data[0]; };
    var reverse = function (y) { return y; };
    identity = reverse; // Okay because (x: any)=>any matches (y: any)=>any
})();
//# sourceMappingURL=type-compatibility.js.map