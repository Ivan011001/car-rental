import styled from "styled-components";

export const StyledAdvertDetailsContainer = styled.div``;

export const StyledAdvertDetailsImage = styled.div`
  border-radius: 14px;
  width: 461px;
  height: 248px;

  margin-bottom: 14px;

  background-image: ${({ $img }) => `url(${$img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const StyledAdvertDetailsBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 24px;
`;

export const StyledAdvertDetailsInfo = styled.div``;

export const StyledAdvertDetailsTitle = styled.h3`
  color: var(--secondary-text-color);

  font-weight: 500;
  font-size: 18px;
  line-height: 133%;

  margin-bottom: 8px;
`;

export const StyledAdvertDetailsModel = styled.span`
  color: var(--accent-color);
`;

export const StyledAdvertDetailsFeatureHeading = styled.h3`
  color: var(--secondary-text-color);

  font-weight: 500;
  font-size: 14px;
  line-height: 143%;

  margin-bottom: 8px;
`;

export const StyledAdvertDetailsFeaturesList = styled.ul`
  max-width: 400px;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 6px;
  row-gap: 4px;

  margin-bottom: 14px;

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

export const StyledAdvertDetailsFeature = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;

  font-size: 12px;
  line-height: 150%;
`;

export const StyledAdvertDetailsDescription = styled.p`
  /* width: 461px; */
  color: var(--secondary-text-color);
  font-size: 14px;
  line-height: 143%;
`;

export const StyledAdvertDetailsFuncList = styled.ul`
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

export const StyledAdvertDetailsFunc = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;

  font-size: 12px;
  line-height: 150%;
`;

export const StyledAdvertDetailsRentalList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const StyledAdvertDetailsRentalItem = styled.li`
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #363535;

  border-radius: 35px;
  padding: 7px 14px;
  background-color: #f9f9f9;
`;

export const StyledAdvertDetailsRentalItemValue = styled.span`
  color: var(--accent-color);
  font-weight: 600;
`;

export const StyledAdvertDetailsTelephon = styled.a`
  color: #fff;

  font-weight: 600;
  font-size: 14px;
  line-height: 143%;
`;
