import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./Context";

const Modal = () => {
  const { isModalOpen, closeModalHandler } = useGlobalContext();

  return (
    <React.Fragment>
      <div
        className={`${
          isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
        }`}
      >
        <div className="modal-container">
          <h3>modal content</h3>
          <button className="close-modal-btn" onClick={closeModalHandler}>
            <FaTimes />
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
