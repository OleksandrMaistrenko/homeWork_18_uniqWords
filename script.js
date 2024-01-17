const enter = document.getElementById("add_btn");
const clearButton = document.getElementById("clear_button");
const input_list = document.getElementById("input_list");
const amountUniqWords = document.getElementById("amount_uniq_words");

function showQuantityUniqWords() {
  const userInput = document.getElementById("user_input").value.trim();

  if (userInput === "") {
    amountUniqWords.textContent = 0;
    return;
  }

  const separator = " ";
  const arrayOfStrings = userInput.split(separator);
  const uniqWords = new Set(arrayOfStrings);
  amountUniqWords.textContent = uniqWords.size;
  const wordStatistic = new Map();
  arrayOfStrings.forEach((element) => {
    if (!wordStatistic.has(element)) {
      wordStatistic.set(element, 1);
    } else {
      wordStatistic.set(element, wordStatistic.get(element) + 1);
    }
  });
  wordStatistic.forEach((value, key, map) => {
    const li = document.createElement("li");

    li.textContent = `${key}: ${value}`;
    input_list.appendChild(li);
  });
}

enter.addEventListener("click", showQuantityUniqWords);

function clearText() {
  const userInput = document.getElementById("user_input");
  amountUniqWords.textContent = 0;
  userInput.value = "";
  input_list.textContent = "";
}

clearButton.addEventListener("click", clearText);
