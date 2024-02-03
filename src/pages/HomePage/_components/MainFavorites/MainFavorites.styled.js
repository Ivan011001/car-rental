import styled from "styled-components";

export const StyledFavoritesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`;

export const StyledFavoritesTitle = styled.h2`
  color: var(--secondary-text-color);
  font-size: 26px;
`;

export const StyledFavoritesDescription = styled.p`
  color: var(--secondary-text-color);
`;

export const StyledFavoritesFeatureList = styled.ul`
  color: var(--accent-color);
  font-weight: 900;
  font-size: 20px;

  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const StyledFavoritesFeaturesItem = styled.li`
  color: var(--secondary-text-color);
  font-weight: 500;
  font-size: 16px;

  &::before {
    content: "-";
    margin-right: 4px;
  }
`;
