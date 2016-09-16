"use strict";
var GetSet = (function () {
    function GetSet(item) {
        this.item = item;
    }
    GetSet.prototype.setItem = function (item) {
        this.item = item;
    };
    GetSet.prototype.getItem = function () {
        return this.item;
    };
    GetSet.prototype.dump = function () {
        console.log("item: " + this.item.id + ": " + this.item.value);
    };
    return GetSet;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GetSet;
//# sourceMappingURL=GetSet.js.map