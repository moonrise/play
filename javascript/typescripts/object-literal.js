(function () {
    // object literal type separator can be either comma or semi-colon
    var o1 = { x: 0, y: 1 };
    var o2 = o1;
    var o3; // = {x:2; z:3};   // syntax error on the right side, but runs ok
    ;
    ;
    var o4 = o1;
    var o5 = o1;
    console.log(o1, o2, o3, o4, o5);
})();
//# sourceMappingURL=object-literal.js.map