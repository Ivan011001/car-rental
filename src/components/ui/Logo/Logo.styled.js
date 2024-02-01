import styled from "styled-components";

import { Link } from "react-router-dom";

export const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const StyledLogoIcon = styled.svg`
  height: 32px;
  width: 32px;
  fill: #fff;
`;

export const StyledLogoTitle = styled.p`
  color: #fff;
  font-weight: 600;
  font-size: 19px;
`;
