import styled from "styled-components";

export const StyledFavoriteListWrapper = styled.div`
  width: 100%;
  /* display: flex; */
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
`;

export const StyledFavoriteListTitle = styled.h3`
  color: var(--secondary-text-color);

  font-size: 28px;
  font-weight: 600;
  text-align: center;

  margin-bottom: 20px;
`;

export const StyledFavoriteList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  column-gap: 29.3px;
  row-gap: 50px;
`;
