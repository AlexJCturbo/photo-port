import React from "react";


//Destructuring onClose and currentPhoto in the Modal parameter
function Modal({ onClose, currentPhoto }) {
  const { name, category, description, index } = currentPhoto;

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