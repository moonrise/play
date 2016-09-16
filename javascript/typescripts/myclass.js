var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BaseClass = (function () {
    function BaseClass() {
    }
    return BaseClass;
}());
var MyClass = (function (_super) {
    __extends(MyClass, _super);
    function MyClass(name, secrete, shared) {
        _super.call(this);
        this.name = name;
        this.secrete = secrete;
        this.shared = shared;
        this.id = ++MyClass.count;
    }
    MyClass.prototype.dump = function () {
        console.log(this.id + "/" + MyClass.count + " " + this.name + ":" + this.tag + ", " + this.secrete + ":" + this.shared + ", where:" + this.where);
    };
    Object.defineProperty(MyClass.prototype, "tag", {
        get: function () { return this.id * 2; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyClass.prototype, "tle", {
        set: function (where) { this.where = where; },
        enumerable: true,
        configurable: true
    });
    MyClass.prototype.honoraryMethod = function () {
    };
    MyClass.count = 0;
    return MyClass;
}(BaseClass));
var YourClass = (function (_super) {
    __extends(YourClass, _super);
    function YourClass(name, secrete, shared, extra) {
        _super.call(this, name, secrete, shared);
        this.extra = extra;
    }
    YourClass.prototype.dump = function () {
        _super.prototype.dump.call(this);
        console.log("YourClass extrea: " + this.extra);
    };
    return YourClass;
}(MyClass));
var j = new MyClass("james", "dream", "beer");
var m = new MyClass("marry", "dread", "story");
var y = new YourClass("yours", "devil", "fire", "cream cheese");
m.tle = "Denver";
var OurClass = (function (_super) {
    __extends(class_1, _super);
    function class_1(name) {
        _super.call(this, name, "none", "all");
    }
    return class_1;
}(MyClass));
j.dump();
m.dump();
y.dump();
new OurClass("ours").dump();
//# sourceMappingURL=myclass.js.map