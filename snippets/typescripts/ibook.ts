import { Category } from './enum';

interface ID {
    id: number;
}

interface Author {
    author?: string
}

interface Book extends ID, Author {
    title: string,
    cat: Category,

    foo: (text: string) => void;
    bar?: FP;
}

interface FP {
    (text: string): void;
}

export { Book, FP }