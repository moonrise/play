function extend(first, second) {
    var result = {};
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var ConsoleLogger = (function () {
    function ConsoleLogger(logName) {
        this.logName = logName;
    }
    ConsoleLogger.prototype.log = function () {
    };
    return ConsoleLogger;
}());
var mixed = extend(new Person("Jim"), new ConsoleLogger("TheLogger"));
console.log("mixed: ", mixed.name, mixed.logName);
//# sourceMappingURL=intersect-mixin.js.map