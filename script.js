//Modal Project - JS class method -> Edit CSS class
const selectModal = document.querySelector(".modal-container").classList;

class Modal {
  //Prototype function: Defines variables & parameters for methods and new Modal classes
  constructor(selectModal) {
    this.selectModal = selectModal;
  };

  //Function: Sets modal visible
  openModal(selectModal) {
    this.selectModal.remove("invisible");
  };

  //Function: Sets modal hidden
  closeModal(selectModal) {
    this.selectModal.add("invisible");
  };
};

const myModal = new Modal (selectModal);

let openButton = document.querySelector("button.open").addEventListener("click", function() {
  myModal.openModal(selectModal)});
let closeButton = document.querySelector("button.close").addEventListener("click", function() {
  myModal.closeModal(selectModal)});

//Final Project - JS -> CSS animations
const h1 = document.querySelector(".final");
const h1Array = h1.innerText.split("");
let letters = ""
  
h1Array.forEach(element => {
    letters = letters + `<span class="js-animate">${element}</span>`;
});
<<<<<<< HEAD
console.log(letters);
h1.innerHTML = letters;

//Calculator Project -> JS, CSS, HTML -> Simple Calculator
=======
h1.innerHTML = letters;

//Calculator Project - JS operations
class Calculate {
  constructor() {

  }
  
  //Operand logic
  operandLogic () {
    
  }

  //Update Calculator display
  screenUpdate () {

  }

}

const wordNumberArray = document.querySelectorAll(".calc-num-buttons");
const numberArray = wordNumberArray;
const operators = document.querySelectorAll(".calc-op-buttons");
>>>>>>> ea850aa (added calculator project)
