import styled from "styled-components";

export const StyledAdvertItemCard = styled.li`
  width: 274px;
`;

export const StyledAdvertItemCardImageWrapper = styled.div`
  height: 268px;
  border-radius: 24px;

  position: relative;

  background-image: ${({ $img }) => `url(${$img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  margin-bottom: 14px;
`;

export const StyledAdvertItemLikeButton = styled.button`
  padding: 0;
  line-height: 0;
  border: none;
  background-color: transparent;

  position: absolute;
  top: 14px;
  right: 14px;

  &:hover,
  &:focus {
    & > svg {
      stroke: var(--accent-color);
    }
  }
`;

export const StyledAdvertItemLikeIcon = styled.svg`
  width: 18px;
  height: 18px;
  fill: none;
  stroke: rgba(255, 255, 255, 0.8);

  transition: var(--transition);
`;

export const StyledAdvertItemInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 8px;
`;

export const StyledAdvertItemTitle = styled.h3`
  color: var(--secondary-text-color);

  font-size: 16px;
  font-weight: 500;
  line-height: 150%;

  max-width: 20ch;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const StyledAdvertItemModel = styled.span`
  color: var(--accent-color);
`;

export const StyledAdvertItemPrice = styled.p`
  color: var(--secondary-text-color);

  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
`;

export const StyledAdvertItemFeaturesList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 6px;
  row-gap: 4px;

  & > li {
    &:not(:last-child)::after {
      content: "";
      display: block;
      width: 1px;
      height: 16px;
      background-color: rgba(18, 20, 23, 0.1);
    }
  }
`;

export const StyledAdvertItemFeature = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;

  font-size: 12px;
  line-height: 150%;
`;
