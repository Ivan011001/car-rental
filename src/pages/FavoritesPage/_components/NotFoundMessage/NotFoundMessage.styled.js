import styled from "styled-components";

export const StyledNotFoundMessageWrapper = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 30px;
`;

export const StyledNotFoundMessage = styled.h3`
  color: var(--secondary-text-color);

  font-size: 28px;
  font-weight: 600;
  text-align: center;
`;
