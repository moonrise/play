var Rx = require("rx");
var p = Rx.Observer.create((n) => console.log(`p: ${n}`), (e) => console.log(n), () => console.log('p done.'));
var p2 = Rx.Observer.create((n) => console.log(`p2: ${n}`), (e) => console.log(n), () => console.log('p2 done.'));

var i = Rx.Observable.range(1,5);

console.log("Before subscription");

i.do(n => console.log('processing value', n))
    .observeOn(Rx.Scheduler.default)
    .map(n => n*10)
    .subscribe(p);

console.log("After subscription");



Rx.Observable.return(0, Rx.Scheduler.default).repeat().take(5)
.subscribe(p2)