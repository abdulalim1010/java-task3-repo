let sentrnce="thr name of the game id to win";  
let sentenceArr = sentence.split(" ");
let newSentence = [];

for (let word of sentenceArr) {
  let newUpperWord = word[0].toUpperCase() + word.slice(1);
  newSentence.push(newUpperWord);
}

console.log(newSentence.join(" "));
