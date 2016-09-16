var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Human = (function () {
    function Human(name) {
        this._name = name;
        Human.totalPeople += 1;
    }
    Object.defineProperty(Human.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (val) {
            this._name = val;
        },
        enumerable: true,
        configurable: true
    });
    Human.prototype.talk = function () {
        return "Hi, I'm " + this.name + "!";
    };
    Human.totalPeople = 0;
    return Human;
}());
var Developer = (function (_super) {
    __extends(Developer, _super);
    function Developer(name, languages) {
        _super.call(this, name);
        this._languages = languages;
    }
    Object.defineProperty(Developer.prototype, "languages", {
        get: function () {
            return this._languages;
        },
        enumerable: true,
        configurable: true
    });
    Developer.prototype.talk = function () {
        return _super.prototype.talk.call(this) + " And I know " + this.languages.join(',') + ".";
    };
    return Developer;
}(Human));
var dev = new Developer("dev", ["js", "css"]);
console.log(dev.talk());
//# sourceMappingURL=classes.js.map