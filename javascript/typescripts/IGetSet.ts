export interface IItem {
    id:number;
    value:any;
}

export interface IGetSet<T> {
    setItem(item:T);
    getItem():T;
}

