//CREATE AN ARRAY OF WORDS 
const words = ["iteration", "specificity", "dinosaur", "rocket", "statement", "background", "typography", "document", "download", "rectangle", "warehouse", "portofolio", "developer", "screenshot", "blackjack"]

//DECLARE THE MAIN VARIABLES

const playButton = document.getElementById(`play`);
const mainWordDisplay = document.querySelector(`h1`);
const quitGame = document.getElementById(`quit_game`);
const userInput = document.getElementById(`user_input`);
const submit = document.getElementById(`submit`);
const lettersUsed = document.getElementById(`letters_used`);


// WHEN YOU HIT THE PLAY BUTTON GET A RANDOM WORD FROM THE  MAIN ARRAY AND DISPLAY IT HIDDEN IN THE H1

let currentWord = "";
let hiddenWord = "";
let used = [];
console.log(used);
const getWord = (arry) => {
  let i = Math.floor(Math.random() * arry.length);
  return arry[i];
};

//CREATE A FUNCTION THAT RETURNS ASTERIXS THAT MACH THE LENGTH OF THE WORD

const hideWord = (word) => {
  const regex = /./ig
  return (word.replaceAll(regex, '*'));
};

//REPLACE THE innerHTML WITH THE HIDDEN WORD

playButton.addEventListener("click", () => {
  currentWord = getWord(words);
  hiddenWord = hideWord(currentWord);
  mainWordDisplay.innerHTML = hiddenWord;
  console.log(currentWord);
});


//CREATE A SIMPLE FUNCTION THAT CLEARS THE USER'S INPUT WHEN CALLED

const clearInput = () => {
  userInput.value = "";
};

//COMPARE THE USER INPUT WITH THE WORD AND CHECK IF THE LETTER IS PART OF THE WORD
//MAKE AN IF-ELSE STATEMENT AND IF THE WORD CONTAINES THE LETTER ALTER THE INNER.HTML
//IF NOT PUSH THE LETTER TO BE DISPLAYED IN AN ARRAY OF -- "LETTERS USED" --AND ALTER THE inner.HTML
;

submit.addEventListener("click", () => {
  userInput.value.toLowerCase();
  if (currentWord.includes(userInput.value)) {
    let splittedWord = hiddenWord.split("");
    for (let i = 0; i < currentWord.length; i++) {
      if (userInput.value == currentWord[i]) {
        hiddenWord[i] = userInput.value;
        console.log(hiddenWord);
        splittedWord[i] = userInput.value;
      }
    };
    hiddenWord = splittedWord.join("");
    mainWordDisplay.innerHTML = hiddenWord;
  } else if (used.length === 5) {
    mainWordDisplay.innerHTML = `YOU LOST ! ...the word was -- ${currentWord}`;
    displaySadFace();
  } else {
    used.push(userInput.value);
    console.log(used);
    lettersUsed.innerHTML = used;
  };
  displayLives();
  clearInput();
});



//FIGURE A WAY OF LINKING THE LIVES REMAINING WITH THE NUMBER OF WRONG LETTERS INSERTED ! NOTE- USE THE ARRAY'S LENGTH - !

const svgElement1 = document.getElementById(`heart1`);
const svgElement2 = document.getElementById(`heart2`);
const svgElement3 = document.getElementById(`heart3`);
const svgElement4 = document.getElementById(`heart4`);
const svgElement5 = document.getElementById(`heart5`);
const svgElementSadFace = document.getElementById(`sad_face`);
svgElementSadFace.style.visibility = "hidden";

const displayLives = () => {
  if (used.length === 1) {
    svgElement1.style.visibility = "hidden"
  } else if (used.length === 2) {
    svgElement2.style.visibility = "hidden"
  } else if (used.length === 3) {
    svgElement3.style.visibility = "hidden"
  } else if (used.length === 4) {
    console.log(used);
    svgElement4.style.visibility = "hidden"
  } else if (used.length === 5) {
    svgElement5.style.visibility = "hidden";
  };
};

//MAKE A FUNCTION THAT DISPLAYS A SAD FACE WHEN THE PLAYER LOST ALL LIVES

const displaySadFace = () => {
  if (used.length === 5) {
    svgElementSadFace.style.visibility = "visible";
  };
};


//IF THE WHOLE WORD HAS BEEN REVEALED AND THE USER HAS AT LEAST ONE HEART LEFT DISPLAY -- "YOU WON" -- MESSAGE

quitGame.addEventListener("click", () => {
  location.href = "./index.html"
});