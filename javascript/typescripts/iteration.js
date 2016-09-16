var stuff = [10, 20, 30];
stuff.forEach(function (x) { return console.log(x); });
stuff.forEach(function (x, i, arr) { return console.log(i + ": " + x); });
var filtered = stuff.filter(function (x) { return x > 15; });
for (var _i = 0, filtered_1 = filtered; _i < filtered_1.length; _i++) {
    var x = filtered_1[_i];
    console.log(x);
}
//# sourceMappingURL=iteration.js.map