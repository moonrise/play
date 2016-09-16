for (var i = 0; i < 3; i++) {
    (function() {console.log("in closure A", i); })();      // 0, 1, 2
}

console.log("-------");
for (var j = 0; j < 3; j++) {
    setTimeout(function() {console.log("in closure B", j); }, 100);    // 3, 3, 3
}

for (var x = 0; x < 3; x++) {
    (function(x) { setTimeout(function() {console.log("in closure b", x); }, 100) })(x);    // 0, 1, 2
}

var index = 0;
setTimeout(function() { index = 100; }, 300);
for (var k = 0; k < 6; k++) {
    setTimeout(function() {console.log("in closure C", ++index, k); }, 100*k);
}
