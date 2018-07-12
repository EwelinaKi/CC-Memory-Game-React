export let counter;
let startTime;

class Card {
    constructor(picture) {
        this.picture = picture;
        this.visible = false;
        this.found = false;
    }
}

export function prepareDeck(numberOfPairs, picturesArray) {
    //shuffle new set of cards
    const arrayOfPictures = shuffle(picturesArray).slice(0, numberOfPairs);
    let arrayWithPairs = shuffle(arrayOfPictures.concat(arrayOfPictures));
    //prepare cards objects array
    let arrayOfObjects = [];
    arrayWithPairs.forEach((element) => {
        arrayOfObjects.push(new Card(element));
    });

    return arrayOfObjects;
}

// Shuffle function from http://stackoverflow.com/a/2450976
export function shuffle(array) {
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

export function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

export function checkEndGame(cards) {
    const end = !cards.find(allFound);
    if (end) {
        clearInterval(counter);
        cards.forEach( card => card.found=false)
    }
    return end
}

function allFound(element) {
    return element.found === false
}


export function startTimer() {
    startTime = new Date();
    counter = setInterval(function () {
        // Get actual time
        const now = new Date().getTime();
        // Find the distance between start game and now
        const distance = now - startTime;
        // Time calculations for days, hours, minutes and seconds
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = formatToTwoDigits(Math.floor((distance % (1000 * 60)) / 1000));
        // Output the result
        if (document.getElementById("timer")){
            document.getElementById("timer").innerHTML = minutes + ":" + seconds;
        }
    }, 1000);
}

function formatToTwoDigits(numberToBeFormatted) {
    return numberToBeFormatted.toLocaleString(undefined, {
        minimumIntegerDigits: 2
    });
}






