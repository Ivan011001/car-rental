import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const StyledNavLink = styled(NavLink)`
  color: #fff;
  color: ${(props) => console.log(props)};
  transition: var(--transition);

  &:hover,
  &:focus {
    color: var(--hover-color);
  }
`;
