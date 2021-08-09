module.exports = function toReadable (number) {
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 20 ) {
        return units[number];
    }

    if (number >= 20 &&  number < 100) {
        const numberOfTens = Math.floor(number / 10);
        const numberOfUnits = number % 10;

        return numberOfUnits ? `${tens[numberOfTens - 2]} ${units[numberOfUnits]}` : tens[numberOfTens - 2];
    }
}
