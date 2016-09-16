(function() {
    // object literal type separator can be either comma or semi-colon
    let o1 : { x:number, y:number } = {x:0, y:1};
    let o2 : { x:number; y:number } = o1;
    let o3 : { x:number; y:number }; // = {x:2; z:3};   // syntax error on the right side, but runs ok
    interface A { x:number, y:number };
    interface B { x:number; y:number };
    let o4 : A = o1;
    let o5 : B = o1;
    console.log(o1, o2, o3, o4, o5);
})();
