import React from "react";

//In React terms, we want to conditionally render the modal based on whether an image has been clicked.
//We'll establish the PhotoList as the parent component and the Modal as the child component, because the Modal is located in PhotoList

//Destructuring currentPhoto in the Modal parameter and then destructuring currentPhoto as a const. add onClose as a parameter of the Modal function
//const Modal = ({ onClose, currentPhoto }) => {
function Modal({ onClose, currentPhoto }) {
  const { name, category, description, index } = currentPhoto;

  //We have a state called isModalOpen in the PhotoList parent component. We'll need to pass down this state as a prop to the Modal component, so that it can be updated when the modal is closed. In the parent component PhotoList, we also have the function toggleModal, which we can use to toggle the state of the modal.

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name}</h3>
        <img src={require(`../../assets/large/${category}/${index}.jpg`)} alt="current category" />
        <p>
          {description}
        </p>
        <button type="button" onClick={onClose} >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;