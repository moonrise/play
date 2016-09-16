"use strict";
var Category1;
(function (Category1) {
    Category1[Category1["Bio"] = 0] = "Bio";
    Category1[Category1["Poet"] = 1] = "Poet";
    Category1[Category1["Fiction"] = 2] = "Fiction";
})(Category1 || (Category1 = {}));
exports.Category = Category1;
;
var Category2;
(function (Category2) {
    Category2[Category2["Bio"] = 1] = "Bio";
    Category2[Category2["Poet"] = 2] = "Poet";
    Category2[Category2["Fiction"] = 3] = "Fiction";
})(Category2 || (Category2 = {}));
;
var Category3;
(function (Category3) {
    Category3[Category3["Bio"] = 5] = "Bio";
    Category3[Category3["Poet"] = 8] = "Poet";
    Category3[Category3["Fiction"] = 11] = "Fiction";
})(Category3 || (Category3 = {}));
;
function driver() {
    var catPoet = Category1.Poet;
    console.log("category1Poet: " + catPoet);
    console.log("category2Poet: " + Category2.Poet);
    console.log("category3Poet: " + Category3.Poet);
    console.log("category1[1]: " + Category1[1]);
    console.log("category2[1]: " + Category2[1]);
    console.log("category3[1]: " + Category3[1]);
    var E;
    (function (E) {
        E[E["A"] = 1] = "A";
        E[E["B"] = 2] = "B";
        E[E["C"] = 2] = "C";
        E[E["D"] = 3] = "D";
    })(E || (E = {}));
    console.log("E.A/B/C/D: " + E.A + ", " + E.B + ", " + E.C + ", " + E.D); // 1,2,2,3
    console.log("E[E.A/B/C/D]: " + E[E.A] + ", " + E[E.B] + ", " + E[E.C] + ", " + E[E.D]); // A,C,C,D
    console.log("const enums: " + 1 /* A */ + ", " + 2 /* B */);
}
//driver();
//console.log(`ambient enums: ${AE.A}, ${AE.B}, ${AE.C}`);  // can't be used like this
//# sourceMappingURL=enum.js.map