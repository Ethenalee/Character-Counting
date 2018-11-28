function countLetters(string) {

 var answer = {};
 string = string.split(" ").join("").toLowerCase();
  for(var char of string) {
    answer[char] = answer[char] + 1 || 1;
  }
 console.log(answer);
}




countLetters("lighthouse in the house");
