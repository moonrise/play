import {IGetSet, IItem} from "./IGetSet";
import GetSet from "./GetSet";

function boo <T> (name:string, value:T) : T {
    let v:T = value;
    console.log(`${name}: ${value}`) ;
    return v;
}

boo("number", 10);
boo("string", "hello");

let table = { id:1, value: "table", extra: "more than enough"}

let item:GetSet<IItem> = new GetSet<IItem>(table);
item.dump();
item.setItem(<IItem>{ id: 2, value : "good table"});
item.dump();

class NumberItem implements IItem {
    constructor(public id:number, public value:any) {
    }
}
new GetSet<NumberItem>(new NumberItem(1, 100)).dump();


