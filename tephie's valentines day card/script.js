"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");


let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === true) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "yayyy!!! i love you tephie! ";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Are you sure?",
    "Pookie please",
    "You'll regret this",
    "You're breaking my heart",
    "no yes, no kiss",
    "I'm gonna cry...",
    "No",
    "Are you sure?",
    "Pookie please",
    "You'll regret this",
    "You're breaking my heart",
    "no yes, no kiss",
    "I'm gonna cry...",
    "No",
    "Are you sure?",
    "Pookie please",
    "You'll regret this",
    "You're breaking my heart",
    "no yes, no kiss",
    "I'm gonna cry...",
    "No",
    "Are you sure?",
    "Pookie please",
    "You'll regret this",
    "You're breaking my heart",
    "no yes, no kiss",
    "I'm gonna cry...",
  ];

  const messageIndex = Math.min(noCount, messages.length);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-yes.gif`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
