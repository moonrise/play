var Rx = require("rx");
var p = Rx.Observer.create((n) => console.log(n), (e) => console.log(n), () => console.log('p done.'));

var range = Rx.Observable.range(1, 5);

range.subscribe(p);


