interface Bird {
    fly();
    layEggs();
}

interface Fish {
    swim();
    layEggs();
}

abstract class Eggs {
    layEggs() { console.log ("laying eggs") };
}

class Sparrow extends Eggs implements Bird {
    fly() { console.log ("flying...") };
}

class Salmon extends Eggs implements Fish {
    swim() { console.log ("swimming...") };
}

// type guard
function isFish(you: Bird | Fish): you is Fish {
    return (<Fish>you).swim !== undefined;
}

function whatDoYouDo(you: Bird | Fish): Fish | Bird {
    // type guard
    if (isFish(you)) {
        you.swim();
    }
    else {
        you.fly();
    }

    return you;
}

function whoArtThou(you: Bird | Fish): void {
    if (you instanceof Sparrow) {
        you.fly();
    }
    else {
        you.swim();
    }
}

function tellMe(you: number | string): void {
    //if (number === typeof you) {   // this won't work
    if (typeof you === "number") {
        console.log (`I'm a number: ${you}`);
    }
    else {
        console.log (`I'm a string: ${you.toUpperCase()}`);
    }
}

let bird:Bird = new Sparrow();
let fish:Fish = new Salmon();

whatDoYouDo(bird).layEggs();
whatDoYouDo(fish).layEggs();
whoArtThou(bird);
whoArtThou(fish);

tellMe(123);
tellMe("hello");

