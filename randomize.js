//Marc Landolt jun, www.marclandolt.ch
//GPL V3

function myFunction() {
    //alert(document.getElementById("plaintext").value);
    document.getElementById("encrypted").value = encrypt(document.getElementById("plaintext").value);
}

//Helper Function to replace single letter / character
String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

//Helper Function for format
Number.prototype.totalDigits = function(n) {
    return this.toPrecision(n).split('.').reverse().join('');
};



function encrypt(parameter) {
  words = parameter.split(" ");
  newWords = [];
  for ( i = 0; i < words.length; i++ )
  {
    newWord = [];
    console.log(words[i]);
    for ( x = 0; x < words[i].length; x++)
      newWord.push(words[i][x]);

    console.log("new: ", newWord);
    for ( j = 1; j < newWord.length-1; j++)
      for ( k = 1; k <  newWord.length-1; k++)
      {
        console.log("New Letters: ", newWord[j], newWord[k]);
        console.log(Math.random());
        if (Math.random() > 0.5)
        {
          console.log(newWord.length);
          l = newWord[j];
          newWord[j] = newWord[k];
          newWord[k] = l;
        }
      }
      console.log("newShuffled: ", newWord);

      newString = newWord.join("");
      console.log("string: ", newString);
      newWords.push(newString);
    }

  result = newWords.join(" ");
  console.log(result);
  return result;
 };

