/*
An anagram is a word, a phrase, or a sentence formed from another by rearranging its letters. An example of this is "angel", which is an anagram of "glean".

Write a function that receives an array of words, and returns the total number of distinct pairs of anagramic words inside it.

Some examples:

There are 2 anagrams in the array ["dell", "ledl", "abc", "cba"]
There are 7 anagrams in the array ["dell", "ledl", "abc", "cba", "bca", "bac"]
Algorithms
*/


function anagramCounter(wordsArray) {
    let count = 0
    function nomalizeWord(word) {
        return word.toLowerCase().split("").sort().join("")
    }
    for (let i = 0; i < wordsArray.length; i++) {
        for (let j = i + 1; j < wordsArray.length; j++) {

            if (wordsArray[i] && typeof wordsArray[i] === 'string' && wordsArray[j] && typeof wordsArray[j] === 'string') {
                if (nomalizeWord(wordsArray[i]) === nomalizeWord(wordsArray[j])) {
                    count++

                }
            }

        }

    }

    return count;
}
console.log(anagramCounter(["dell", "ledl", "abc", "cba", "bca", "bac"]))