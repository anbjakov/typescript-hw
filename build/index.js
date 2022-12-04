"use strict";
function getDiff(firstString, secondString) {
    let result = [];
    let concatString = firstString.concat(secondString);
    let arrayOfSymbols;
    let occurrencesArray = [];
    arrayOfSymbols = concatString.split("");
    arrayOfSymbols.forEach((item) => {
        occurrencesArray = concatString.match(new RegExp(item, "g")) || [];
        if (occurrencesArray.length < 2)
            result.push(item);
    });
    return {
        amount: result.length,
        array: result
    };
}
console.log(getDiff('abc', 'abcd')); // { amount: 1, array: ['d'] }
console.log(getDiff('abcd', 'cdfe')); // { amount: 4, array: ['a', 'b', 'f', 'e'] }
console.log(getDiff('abc', 'wbbcc')); // { amount: 2, array: ['a', 'w'] }
console.log(getDiff('abc', 'abc')); // { amount: 0, array: [] }
