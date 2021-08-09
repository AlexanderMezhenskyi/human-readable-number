module.exports = function toReadable (number) {
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let numberOfHundreds;
    let numberOfTens;
    let numberOfUnits;

    if (number < 20 ) {
        return units[number];
    } else if (number >= 20 &&  number < 100) {
        numberOfTens = Math.floor(number / 10);
        numberOfUnits = number % 10;

        return numberOfUnits ? `${tens[numberOfTens - 2]} ${units[numberOfUnits]}` : tens[numberOfTens - 2];
    } else {
        numberOfHundreds = Math.floor(number / 100);
        numberOfTens = Math.floor(number % 100 / 10);
        numberOfUnits = number % 100 % 10;

        if (!numberOfTens && !numberOfUnits) {
            return `${units[numberOfHundreds]} hundred`;
        } else if (numberOfTens < 2) {
            return `${units[numberOfHundreds]} hundred ${units[number % 100]}`;
        } else if (numberOfTens >= 2 && !numberOfUnits) {
            return `${units[numberOfHundreds]} hundred ${tens[numberOfTens - 2]}`;
        } else {
            return `${units[numberOfHundreds]} hundred ${tens[numberOfTens - 2]} ${units[numberOfUnits]}`;
        }
    }
}
