// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const chaMap = {}
    let maxChar = ''
    let maxCount = 0

    for (let char of str) {
        chaMap[char] = chaMap[char] + 1 || 1
    }

    for (let char in chaMap) {
        if (chaMap[char] > maxCount) {
            maxCount = chaMap[char]
            maxChar = char
        }
    }

    return maxChar
}

module.exports = maxChar;
