"use strict";
var enum_1 = require('./enum');
var MyBook = (function () {
    function MyBook() {
        this.cat = enum_1.Category.Fiction;
    }
    return MyBook;
}());
var fp = function (t) { };
var book1 = { id: 1, title: "Ulysses", author: "James Joyce", cat: enum_1.Category.Fiction, foo: function (n) { } };
var book2 = { id: 1, title: "Ulysses", cat: enum_1.Category.Fiction, foo: function (n) { }, bar: fp };
var book3 = { id: 1, title: "Ulysses", cat: enum_1.Category.Fiction, foo: function (n) { }, bar: fp, extra: true };
var book4 = new MyBook();
function logBook(header, book) {
    console.log(header + ": " + book, book);
}
logBook("book1", book1);
logBook("book2", book2);
logBook("book3", book3);
logBook("book4", book4);
//# sourceMappingURL=interface.js.map