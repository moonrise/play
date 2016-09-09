let stuff:Array<number> = [10, 20, 30];

stuff.forEach(x => console.log(x));
stuff.forEach((x, i, arr) => console.log(`${i}: ${x}`));

let filtered = stuff.filter(x => x > 15);

for (var x of filtered) { console.log(x); }

