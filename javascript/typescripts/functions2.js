(function () {
    console.log("scratch " + this);
    function buildName(firstName, lastName) {
        if (firstName === void 0) { firstName = "Will"; }
        return firstName + " " + lastName;
    }
    console.log(buildName("Bob")); // error, too few parameters - but runs ok
    console.log(buildName("Bob", "Adams", "Sr.")); // error, too many parameters - but runs ok
    console.log(buildName("Bob", "Adams")); // okay and returns "Bob Adams"
    console.log(buildName(undefined, "Adams")); // okay and returns "Will Adams"
    var deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        createCardPicker: function () {
            var that = this;
            return function () {
                var pickedCard = Math.floor(Math.random() * 52);
                var pickedSuit = Math.floor(pickedCard / 13);
                // return {suit: this.suits[pickedSuit], card: pickedCard % 13};
                return { suit: that.suits[pickedSuit], card: pickedCard % 13 };
            };
        }
    };
    var cardPicker = deck.createCardPicker();
    var pickedCard = cardPicker(); // error
    console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
    (function () {
        var deck = {
            suits: ["hearts", "spades", "clubs", "diamonds"],
            cards: Array(52),
            createCardPicker: function () {
                var _this = this;
                // Notice: the line below is now a lambda, allowing us to capture `this` earlier
                return function () {
                    var pickedCard = Math.floor(Math.random() * 52);
                    var pickedSuit = Math.floor(pickedCard / 13);
                    return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
                };
            }
        };
        var cardPicker = deck.createCardPicker();
        var pickedCard = cardPicker();
        console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
    })();
})();
//# sourceMappingURL=functions2.js.map