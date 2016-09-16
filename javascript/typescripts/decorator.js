var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function ff() {
    console.log("ff(): evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("ff(): called");
    };
}
function gg(param) {
    console.log("gg(): evaluated - param: " + param);
    return function (target, propertyKey, descriptor) {
        console.log("gg(): called - param: " + param);
    };
}
var CC = (function () {
    function CC() {
    }
    CC.prototype.method = function () { };
    __decorate([
        ff(),
        gg('g-param'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], CC.prototype, "method", null);
    return CC;
}());
//# sourceMappingURL=decorator.js.map