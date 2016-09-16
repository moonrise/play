var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function () {
    console.log("scratch " + this);
    function identity(arg) {
        return arg;
    }
    var myIdentity1 = identity; // function all signature
    console.log("function call signature: " + myIdentity1((100)));
    var myIdentity2 = identity; // object literal call signature
    console.log("literal object call signature: " + myIdentity2((101)));
    ;
    var myIdentity3 = identity; // interface call signature
    console.log("interface call signature: " + myIdentity3((102)));
    ;
    var myIdentity4 = identity; // interface
    console.log("interface: " + myIdentity4((103)));
    function find(x, y) {
        for (var _i = 0, y_1 = y; _i < y_1.length; _i++) {
            var i = y_1[_i];
            if (i === x)
                return true;
        }
        return false;
    }
    console.log("find 5 in [1,5]: " + find(5, [1, 5]));
    console.log("find false in [true]: " + find(false, [true]));
    function build(ctor, init) {
        var t = new ctor();
        t = init;
        return t;
    }
    console.log("String builder: " + build(String, "initial value"));
    /////////////////////// proto type /////////////////////////
    var BeeKeeper = (function () {
        function BeeKeeper() {
        }
        return BeeKeeper;
    }());
    var ZooKeeper = (function () {
        function ZooKeeper() {
        }
        return ZooKeeper;
    }());
    var Animal = (function () {
        function Animal() {
        }
        return Animal;
    }());
    var Bee = (function (_super) {
        __extends(Bee, _super);
        function Bee() {
            _super.apply(this, arguments);
        }
        return Bee;
    }(Animal));
    var Lion = (function (_super) {
        __extends(Lion, _super);
        function Lion() {
            _super.apply(this, arguments);
        }
        return Lion;
    }(Animal));
    function findKeeper(a) {
        return a.prototype.keeper;
    }
    // findKeeper(Lion).nametag;   // type checks! but undefined at runtime
    // findKeeper(Bee).hasMask;    // type checks! but undefined at runtime
})();
//# sourceMappingURL=generics2.js.map