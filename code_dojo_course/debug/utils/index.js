function reverseString(string) {
    let characters = string.split('');
    let reversedCharacters = characters.reverse();

    return reversedCharacters;
}

module.exports = {
    reverseString
};