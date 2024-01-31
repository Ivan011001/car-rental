import { createPortal } from "react-dom";

import { useEffect } from "react";

import {
  StyledModalWindowOverlay,
  StyledModalWindow,
  StyledModalWindowCloseButton,
  StyledModalWindowCloseIcon,
  StyledModalWindowContainer,
} from "./ModalWindow.styled";

const ModalWindow = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const onModalClose = () => {
    onClose();
  };

  return createPortal(
    <StyledModalWindowOverlay onClick={onClose}>
      <StyledModalWindow onClick={(e) => e.stopPropagation()}>
        <StyledModalWindowCloseButton onClick={onModalClose}>
          <StyledModalWindowCloseIcon>
            <use xlinkHref="/sprite.svg#icon-cross" />
          </StyledModalWindowCloseIcon>
        </StyledModalWindowCloseButton>

        <StyledModalWindowContainer>{children}</StyledModalWindowContainer>
      </StyledModalWindow>
    </StyledModalWindowOverlay>,
    document.getElementById("modal-root")
  );
};

export default ModalWindow;
