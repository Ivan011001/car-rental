import styled from "styled-components";

export const StyledModalWindowOverlay = styled.div`
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(18, 20, 23, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledModalWindow = styled.div`
  position: relative;

  box-sizing: border-box;
  width: 541px;
  border-radius: 24px;
  padding: 40px;
  background-color: var(--main-bg-color);
`;

export const StyledModalWindowCloseButton = styled.button`
  padding: 0;
  line-height: 0;
  background-color: transparent;
  border: none;

  position: absolute;
  top: 16px;
  right: 16px;

  &:hover,
  &:focus {
    & > svg {
      stroke: var(--accent-color);
      transform: rotate(90deg);
    }
  }
`;

export const StyledModalWindowCloseIcon = styled.svg`
  stroke: #121417;
  width: 24px;
  height: 24px;

  transition: var(--transition);
`;

export const StyledModalWindowContainer = styled.div``;
