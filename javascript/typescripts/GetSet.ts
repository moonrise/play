import {IGetSet, IItem} from "./IGetSet"

export default class GetSet<T extends IItem> implements IGetSet<T> {
    constructor(private item:T) {
    }

    setItem(item:T) {
        this.item = item;
    }

    getItem():T {
        return this.item;
    }

    dump() {
        console.log(`item: ${this.item.id}: ${this.item.value}`);
    }
}

