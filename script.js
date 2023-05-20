const selectModal = document.querySelector(".modal-container").classList;

//Creating Modal Class Prototype
class Modal {
  //Prototype function: Defines variables & parameters for methods and new Modal classes
  constructor(selectModal) {
    this.selectModal = selectModal;
  };

  //Function: Sets modal visible
  openModal(selectModal) {
    this.selectModal.remove("modal-hid");
  };

  //Function: Sets modal hidden
  closeModal(selectModal) {
    this.selectModal.add("modal-hid");
  };
};

const myModal = new Modal (selectModal);

let openButton = document.querySelector("button.open").addEventListener("click", function() {
  myModal.openModal(selectModal)});
let closeButton = document.querySelector("button.close").addEventListener("click", function() {
  myModal.closeModal(selectModal)});