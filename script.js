function firstNonRepeatedChar(str) {
    // Step 1: Create a frequency map to store character counts
    const charCount = {};

    // Step 2: Populate the frequency map
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Step 3: Find the first character with a count of 1
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // Step 4: If no non-repeated character is found, return null
    return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
