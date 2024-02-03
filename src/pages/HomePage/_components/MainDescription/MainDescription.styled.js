import styled from "styled-components";

export const StyledDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`;

export const StyledDescriptionTitle = styled.h2`
  color: var(--secondary-text-color);
  font-size: 26px;
`;

export const StyledDescriptionFeaturesList = styled.ul`
  color: var(--secondary-text-color);
  font-weight: 900;
  font-size: 20px;

  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const StyledDescriptionFeaturesItem = styled.li`
  font-weight: 500;
  font-size: 16px;

  &::before {
    content: "-";
    margin-right: 4px;
  }
`;
