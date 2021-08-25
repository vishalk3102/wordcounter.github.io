var word = document.getElementById("word");
var character = document.getElementById("character");
var textbox = document.getElementById("text-box");

textbox.addEventListener("input", function () {
  let text = this.value;
  let charCount = text.length;
  let wordCount = text.split(" ");

  word.innerHTML = wordCount.length;
  character.innerHTML = charCount;
});
