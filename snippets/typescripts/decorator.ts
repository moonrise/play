function ff() {      // factory pattern
    console.log("ff(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("ff(): called");
    }
}

function gg(param:string) {// factory pattern
    console.log(`gg(): evaluated - param: ${param}`);
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(`gg(): called - param: ${param}`);
    }
}

class CC {
    @ff()
    @gg('g-param')
    method() {}
}

