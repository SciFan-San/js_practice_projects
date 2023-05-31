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
    letters = letters + `<span class="ease-in-out hover:rotate-12 hover:scale-150 hover:text-emerald-400">${element}</span>`;
});

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

let $calcDisplay = document.querySelector(".calc-screen");
const $buttonPress = document.querySelectorAll(".calc-num-buttons, .calc-op-buttons");

$buttonPress.forEach((node) => {
  node.addEventListener("mousedown", function(e){
    const value = node.innerText.trim();
    const displayText = $calcDisplay.innerText.trim(); 
   
    if(value == "=") {
      let solutionResult = eval(displayText);
      $calcDisplay.innerText = solutionResult;
      return true;
    };

    if(value.toLowerCase() == "c") {
      $calcDisplay.innerText = "";
      return true;
    };

    $calcDisplay.append(value);
  });
});