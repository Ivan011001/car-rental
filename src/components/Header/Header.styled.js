import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  z-index: 1000;
  width: 100%;
  top: 0;
  right: 0;
  background-color: var(--accent-color);
  padding: 32px 0px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const StyledHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
