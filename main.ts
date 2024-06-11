//             🚀 Day 29 Challenge: Start Coding! 🚀


// Question 85: 
// Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within 
// any given string and returns its position.



function findCodePosition(str: string): number {
    return str.indexOf("code"); // Looks for "code" and tells where it found it
}

// Example: Searching within a sentence
console.log(findCodePosition("Learn to code with JavaScript")); // Outputs the start position of "code"
// It tells us the position number where "code" starts.



// Question 86: 
// Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. 
// It should return true if found, otherwise false.

function checkWordInSentence(sentence:string): boolean {
    return sentence.includes("Javascript")
}

console.log(checkWordInSentence("I love Coding with Javascript")); //output is True
console.log(checkWordInSentence("I love Coding with Typescript")); //output is false


// Question 87: 
// Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.

function extractFirst10Characters(str: string): string {
    return str.substring(0, 10);
}

console.log(extractFirst10Characters("Learn to code with JavaScript")); // Outputs the first 10 characters of the string





