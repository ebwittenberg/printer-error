// problem from codewars

// Printer knows what colors to print based on a string of letters corresponding to colors. For ex. "aaabbhaijm". Letters must be between a-m only in the string.
// Printer sometimes errors out and produces a string with erroneous letters beyond a-m.
// Final output needs to be ratio of incorrect letters to correct letters (ex. 8/22). Do not change to decimal.

function printerError(printerString) {
    // if ASCII value is between 97 and 109 inclusive, it is not an erroneous letter
    let totalLetters = printerString.length;
    let badLetter = 0;
    for (i = 0; i < printerString.length; i++) {
        // if letter is not between a and m, it is printer error
        if (!(printerString.charCodeAt(i) >= 97 && printerString.charCodeAt(i) <= 109)) {
            // it is an erronous letter
            badLetter += 1;
        }
    }
    return (badLetter + "/" + totalLetters);

}


console.log(printerError("nopqrstuvwxyz"));