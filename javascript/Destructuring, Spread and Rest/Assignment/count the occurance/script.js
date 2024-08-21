const wordCount = (str) => {
  const words = str.split(" ");
  //   console.log(words);
  const wordMap = new Map();
  words.forEach((element) => {
    let word = element;
    if (!wordMap.has(word)) {
      wordMap.set(word, 1);
    } else {
      wordMap.set(word, wordMap.get(word) + 1);
    }
  });

  return wordMap;
};

let char =
  "i am learning the javascript language which is the best language ever";
charOfMap = wordCount(char);
console.log(charOfMap);
