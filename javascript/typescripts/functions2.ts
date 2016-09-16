(function() {
    console.log(`scratch ${this}`);

    function buildName(firstName = "Will", lastName: string) {
        return firstName + " " + lastName;
    }

    console.log(buildName("Bob"));                  // error, too few parameters - but runs ok
    console.log(buildName("Bob", "Adams", "Sr."));  // error, too many parameters - but runs ok
    console.log(buildName("Bob", "Adams"));         // okay and returns "Bob Adams"
    console.log(buildName(undefined, "Adams"));     // okay and returns "Will Adams"


    let deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        createCardPicker: function() {
            var that = this;
            return function() {
                let pickedCard = Math.floor(Math.random() * 52);
                let pickedSuit = Math.floor(pickedCard / 13);

                // return {suit: this.suits[pickedSuit], card: pickedCard % 13};
                return {suit: that.suits[pickedSuit], card: pickedCard % 13};
            }
        }
    }

    let cardPicker = deck.createCardPicker();
    let pickedCard = cardPicker();       // error
    console.log("card: " + pickedCard.card + " of " + pickedCard.suit);


    (function() {
        let deck = {
            suits: ["hearts", "spades", "clubs", "diamonds"],
            cards: Array(52),
            createCardPicker: function () {
                // Notice: the line below is now a lambda, allowing us to capture `this` earlier
                return () => {
                    let pickedCard = Math.floor(Math.random() * 52);
                    let pickedSuit = Math.floor(pickedCard / 13);

                    return {suit: this.suits[pickedSuit], card: pickedCard % 13};
                }
            }
        }

        let cardPicker = deck.createCardPicker();
        let pickedCard = cardPicker();

        console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
    })();
})();
