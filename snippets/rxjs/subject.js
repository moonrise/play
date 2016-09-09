var Rx = require("rx");
var p = Rx.Observer.create((n) => console.log(`p: ${n}`), (e) => console.log(n), () => console.log('p done.'));
var p2 = Rx.Observer.create((n) => console.log(`p2: ${n}`), (e) => console.log(n), () => console.log('p2 done.'));
var p3 = Rx.Observer.create((n) => console.log(`p3: ${n}`), (e) => console.log(n), () => console.log('p3 done.'));
var p4 = Rx.Observer.create((n) => console.log(`p4: ${n}`), (e) => console.log(n), () => console.log('p4 done.'));

var i = Rx.Observable.interval(500).take(4).map(n=>n+1);
var i2 = Rx.Observable.interval(200).take(4).map(n=>(n+1)*10).delay(600);
var i3 = Rx.Observable.interval(100).take(2).map(n=>(n+1)*100).delay(100);

var sub = new Rx.Subject();
var asub = new Rx.AsyncSubject();
var bsub = new Rx.BehaviorSubject(0);
var rsub = new Rx.ReplaySubject(10, 500);

i.subscribe(sub);
i2.subscribe(sub);

i3.subscribe(asub);

i3.subscribe(bsub);

sub.subscribe(p);
asub.subscribe(p2);
bsub.subscribe(p3);


setTimeout(() => sub.onNext(-1), 1000);

setTimeout(() => {
    i.subscribe(rsub);
    rsub.subscribe(p4);
}, 2000);

