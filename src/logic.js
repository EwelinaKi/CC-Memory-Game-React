export function prepareDeck(numberOfCards, picturesArray) {
    //shuffle new set od cards
    let slicedArray = shuffle(picturesArray).slice(0, numberOfCards);
    let objectsArray = [];
    //prepare array of objects
    slicedArray.forEach( element => {
        objectsArray.push(new Card(element));
    });
    //double cards to make pairs
    let newArray = objectsArray.concat(objectsArray);
    return shuffle(newArray);
}


class Card {
    constructor(picture) {
        this.picture = picture;
        this.numberOfVisibleCards = 0
        // this.background = background;

    }

}


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}