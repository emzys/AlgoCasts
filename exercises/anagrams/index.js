// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

// function anagrams(stringA, stringB) {
//     const cleanedA = stringA.replace(/[^\w]/g, '').toLowerCase();
//     const cleanedB = stringB.replace(/[^\w]/g, '').toLowerCase();

//     if (cleanedA.length !== cleanedB.length) {
//         return false;
//     }

//     const charCount = {};

//     for (let char of cleanedA) {
//         charCount[char] = (charCount[char] || 0) + 1;
//     }

//     for (let char of cleanedB) {
//         if (!charCount[char]) {
//             return false;
//         }
//         charCount[char]--;
//     }

//     const sum = Object.values(charCount).reduce((acc, count) => acc + count, 0);
//     return sum === 0;
// }

module.exports = anagrams;
