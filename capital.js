
let sentence = "the name of the game is ground floor to win"; // Fixed the typo here
let sentenceArr = sentence.split(" ");
let newSentence = [];

for (let word of sentenceArr) {
  let newUpperWord = word[0].toUpperCase() + word.slice(1);
  newSentence.push(newUpperWord);
}

console.log(newSentence.join(" "));


