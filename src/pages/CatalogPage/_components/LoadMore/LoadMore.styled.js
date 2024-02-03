import styled from "styled-components";

export const StyledLoadMoreButtonWrapper = styled.div`
  margin-top: 100px;

  display: flex;
  justify-content: center;
`;

export const StyledLoadMoreButton = styled.button`
  border: none;
  background-color: transparent;

  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  text-decoration: underline;
  color: var(--accent-color);

  transition: var(--transition);

  &:hover,
  &:focus {
    color: var(--hover-color);
  }
`;
